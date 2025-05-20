import Navbar from "@/components/navbar";
import TypewriterEffect from "@/components/typewriter";
import { Fragment } from "react";
import Logo from "../logo";
import RegisterLink from "../register-link";

export default function Hero() {
  return (
    <Fragment>
      <div id="elevated-stage" className="z-10 w-screen h-screen">
        <header id="site-header">
          <Navbar />
        </header>
        <section
          id="hero-section"
          className="flex flex-col items-end justify-center w-full h-full bg-orange-line"
        >
          <div className="flex flex-col lg:items-end mr-[15px] sm:mr-[50px] lg:mr-[150px]">
            <Logo />
            <div className="mt-5 w-[500px] h-[100px] self-end">
              <TypewriterEffect text={"The hackathon you've been waiting for"} />
            </div>
            <div className="self-end">
              <RegisterLink />
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
}
