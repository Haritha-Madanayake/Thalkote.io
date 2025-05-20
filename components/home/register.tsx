// 'use client'
// import React from "react";

import RegisterLink from "../register-link";

// export default function Register() {
//   return (
//     <section id="register">
//       <div
//         className="text-xtreme-white py-10 px-5 md:flex grid items-center h-screen justify-center md:items-end md:justify-between m-0 mt-5"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(255,107,0,0.6250875350140056) 0%, rgba(18,18,18,0.9808298319327731) 100%)",
//         }}
//       >
//         <div className="flex flex-col items-start space-y-4 ">
//           <h1 className="md:text-xtreme-large sm:text-2xl font-bold">
//             Hurry up and be a <span className="text-xtreme-orange">winner</span>
//           </h1>
//           <div className="flex items-center">
//             <div className="h-[150px] w-[2px] bg-xtreme-orange"></div>
//             <p className="ml-4 text-lg text-center">
//               [caption here] <br />
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
//               lobortis urna sit amet arcu ultrices, vestibulum pharetra libero
//               lacinia. Etiam scelerisque, lacus quis mollis consectetur, libero
//               diam varius mauris, a condimentum quam nibh quis erat. Phasellus
//               pellentesque bibendum inte
//             </p>
//           </div>
//         </div>
//         <div className="flex items-center w-full md:ml-5">
//           <button className="bg-xtreme-orange text-xtreme-white py-3 px-6 rounded-full text-xtreme-small">
//             Register
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function Register() {
  return (
    <section
      id="register"
      style={{
        backgroundImage: "url('/register-bg.webp')",
        backgroundSize: "cover",
        backgroundRepeat: "none",
        backgroundPosition: "center",
      }}
      className="z-0 flex flex-col gap-5 items-center justify-center min-h-screen px-4 md:px-6 mt-[200px]"
    >
      <div
        id="cover"
        className="z-0 absolute w-screen min-h-screen bg-xtreme-black/75"
      ></div>
      <div className="z-10 max-w-md w-full space-y-4 text-center">
        <h1 className="text-xtreme-medium md:text-xtreme-large font-bold text-white">
          Register Now
        </h1>
        <p className="md:text-xtreme-small text-xtreme-extra-small text-gray-200">
          Join the Ultimate Hackathon Community Secure Your Spot Today!
        </p>
        <a href="#countdown" className="flex items-center justify-center py-3 px-5 rounded-full no-underline bg-white text-[#FF6B00] hover:bg-[#FF6B00] hover:text-white text-xtreme-small transition-colors">
          Registrations opening soon
        </a>
      </div>
    </section>
  );
}
