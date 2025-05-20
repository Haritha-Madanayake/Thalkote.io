import Image from "next/image";
import hackSl from "@/public/sponsors/hacksl.webp";
import codechefs from "@/public/sponsors/codechefs.webp";
import gdg from "@/public/sponsors/gdg.webp";
import ieeeSl from "@/public/sponsors/ieee-sl.webp";
import hcb from "@/public/sponsors/hcb.webp";
import Sponsor from "@/components/sponsor";

export default function Sponsors() {
  return (
    <section id="sponsors" className="flex flex-col gap-5">
      <h1 className="text-xtreme-medium md:text-xtreme-extra-large text-center font-bold">
        Our <span className="text-xtreme-orange">sponsors</span>
      </h1>
      <ul
        id="sponsor-list"
        className="flex flex-row gap-5 flex-wrap justify-center items-center"
      >
        <li>
          <Sponsor
            name="Hacksl"
            url="https://www.linkedin.com/company/hacksl/"
            logo={hackSl}
          />
        </li>
        <li>
        <Sponsor
            name="Google developer group"
            url="https://gdgsrilanka.org/"
            logo={gdg}
          />
        </li>
        <li>
        <Sponsor
            name="Codechefs"
            url=""
            logo={codechefs}
          />
        </li>
        <li>
        <Sponsor
            name="Hemas consumer brands"
            url="https://hemas.com/consumer-brands.html"
            logo={hcb}
          />
        </li>
        <li>
        <Sponsor
            name="IEEE Sri Lanka section"
            url="https://ieee.lk/"
            logo={ieeeSl}
          />
        </li>
      </ul>
    </section>
  );
}
