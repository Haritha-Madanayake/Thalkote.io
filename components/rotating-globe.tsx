"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const Globe = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set up the scene, camera, and renderer
    const div = mountRef.current;
    const scene = new THREE.Scene();
    const width = window.innerWidth;
    const height = window.innerHeight;
    const camera = new THREE.PerspectiveCamera(
      75,
      width  / height,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    if (div) {
      div.appendChild(renderer.domElement);
    }

    // Create the sphere (globe)
    const geometry = new THREE.SphereGeometry(1.4, 32, 32);

    // Create a buffer geometry to hold the points
    const pointsGeometry = new THREE.BufferGeometry();
    const positions = [];
    const colors = [];
    const color = new THREE.Color(0xff6b00); // Orange color

    for (let i = 0; i < geometry.attributes.position.count; i++) {
      const x = geometry.attributes.position.getX(i);
      const y = geometry.attributes.position.getY(i);
      const z = geometry.attributes.position.getZ(i);

      // Add some noise to the position
      const noiseFactor = 0.20; // Adjust this value to change the noise intensity
      positions.push(
        x + (Math.random() - 0.5) * noiseFactor,
        y + (Math.random() - 0.5) * noiseFactor,
        z + (Math.random() - 0.5) * noiseFactor
      );

      // Add the color
      colors.push(color.r, color.g, color.b);
    }

    pointsGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
    pointsGeometry.setAttribute(
      "color",
      new THREE.Float32BufferAttribute(colors, 3)
    );

    // Create the material for the points
    const pointsMaterial = new THREE.PointsMaterial({
      size: 0.009, // Adjust the size of the points
      vertexColors: true,
    });

    // Create the Points object
    const points = new THREE.Points(pointsGeometry, pointsMaterial);
    scene.add(points);

    // Tilt the globe
    points.rotation.x = -0.27; // Adjust this value to tilt the globe around the x-axis
    points.rotation.z = 0; // Adjust this value to tilt the globe around the z-axis

    // Position the globe and the camera
    points.position.set(-1.2, 0, 0); // Move the globe slightly to the left
    camera.position.set(0, 0.1, 2.1); // Move the camera to the left to keep half of the globe visible

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      points.rotation.y += 0.00019;
      renderer.render(scene, camera);
    };
    animate();

    // Clean up on unmount
    return () => {
      if (div) {
        div.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div ref={mountRef} className="flex absolute h-screen top-0 left-0 z-0" />
  );
};

export default Globe;
