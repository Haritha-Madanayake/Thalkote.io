// Components
import Hero from "@/components/home/hero";
import About from "@/components/home/about";
import Countdown from "@/components/home/countdown";
import EventPlan from "@/components/home/event-plan";
import Register from "@/components/home/register";
import Footer from "@/components/home/footer";
import Globe from "@/components/rotating-globe";
import Sponsors from "@/components/home/sponsors";

export default function Home() {
  return (
    <main className="bg-black text-white flex flex-col">
      <Hero />
      <About />
      <Sponsors />
      <Countdown />
      <EventPlan />
      <Register />
      <Footer />
      <Globe />
    </main>
  );
}
