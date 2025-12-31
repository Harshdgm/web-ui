import Counter from "@/components/ui/Counter";
import DiagonalDivider from "@/components/ui/DiagonalDivider";
import GridBox from "@/components/ui/GridBox";
import Hero from "@/components/ui/Hero";
// import JourneySlider from "@/components/ui/JourneySlider";
import PixelLogo from "@/components/ui/PixelLogo";

export default function Home() {
  return (
      <main className="border-y border-[#eeeef0]">
          <section className="container border-x border-[#eeeef0]">
            <div className="flex items-center justify-center sm:mx-5 md:mx-10 border-x border-[#eeeef0] bg-background">
              <Hero />
            </div>
          </section>

          <section
            aria-hidden="true"
            className="border-t border-b border-[#eeeef0] overflow-hidden"
          >
            <DiagonalDivider height={32} spacing={12} />
          </section>

          <section className="container border-x border-[#eeeef0]">
            <div className=" text-[18px] sm:mx-5 md:mx-10 border-x border-[#eeeef0]">
              <GridBox />
              <Counter />
              {/* <JourneySlider /> */}
            </div>
            
          </section>
          <PixelLogo />
      </main>
  );
}
