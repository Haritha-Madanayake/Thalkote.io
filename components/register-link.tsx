import { JetBrains_Mono } from 'next/font/google';

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] });

export default function RegisterLink () {
  return (
    <a href="#countdown" style={jetbrainsMono.style} className="bg-xtreme-orange cursor-pointer text-xtreme-small p-5 no-underline text-white font-bold py-2 px-4 rounded-full hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-xtreme-orange focus:ring-opacity-50">
      Registrations opening soon
    </a>
  );
};