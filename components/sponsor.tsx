import Image from "next/image"
import type { StaticImageData } from "next/image"

export default function Sponsor({name, logo, url}: {name: string, logo: string | StaticImageData, url: string}) {
  return (
	<div className="flex flex-col items-center gap-2 hover:scale-110 transition-all duration-300">
          <a target="_blank" href={url}>
            <Image
              src={logo}
              width="200"
              alt="Hacksl"
            />
          </a>
          <span className="text-xtreme-small">{name}</span>
        </div>
  )
}


