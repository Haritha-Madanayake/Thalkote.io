import WavyBlock from "../wavy-block";
import about1 from "@/public/about-1.webp";
import about2 from "@/public/about-2.webp";
import Image from "next/image";

export default function About() {
  return (
    <section id="about-section" className="bg-black relative">
      <WavyBlock>
        <h1 className="text-xtreme-white text-xtreme-medium md:text-xtreme-extra-large font-bold ml-7 sm:ml-14 my-0">
          <span className="text-xtreme-orange">What is{` `}</span>
          {`J'pura`} Xtreme
        </h1>
        <section
          id="description"
          className="flex flex-col gap-20 items-center mt-[100px]"
        >
          <div
            id="description-a"
            className="flex flex-col gap-8 w-full sm:w-auto sm:flex-row items-center"
          >
            <p className="text-xtreme-extra-small sm:text-xtreme-small text-center w-[400px] md:w-[800px]">
              J&rsquo;puraXtreme is an innovative hackathon organized by the
              University of Sri Jayewardenepura which was designed to bring
              together the brightest minds in technology and innovation. This
              event includes a range of activities such as hackathons,
              workshops, and seminars, serving as a distinguished hub for
              aspiring engineers and technology enthusiasts.
            </p>
            <div id="about-image">
              <Image src={about1} width={300} className="rounded-lg" alt="Frame of the image" />
            </div>
          </div>
          <div
            id="description-b"
            className="flex flex-col gap-8 w-full sm:w-auto sm:flex-row-reverse items-center"
          >
            <p className="text-xtreme-extra-small sm:text-xtreme-small text-center w-[400px] md:w-[800px]">
              J&rsquo;puraXtreme fosters a dynamic environment where creativity,
              teamwork, and technical prowess are put to the test, culminating
              in a showcase of cutting-edge projects and ideas. The event places
              a strong emphasis on learning and networking opportunities,
              offering participants the chance to improve their technical
              abilities, particularly in data structures and algorithms (DSA).
              Through workshops and seminars, attendees can deepen their
              understanding of DSA concepts which are crucial for solving
              complex problems and optimizing solutions in coding. Beyond merely
              being a hackathon, J&rsquo;puraXtreme is a celebration of technical
              innovation and a spark for future developments in the field of
              computer science.
            </p>
            <div id="about-image">
              <Image src={about2} width={300} className="rounded-lg" alt="Frame of the image" />
            </div>
          </div>
        </section>
      </WavyBlock>
    </section>
  );
}
