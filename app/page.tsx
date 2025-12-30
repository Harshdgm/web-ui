import DiagonalDivider from "@/components/ui/DiagonalDivider";
import Hero from "@/components/ui/Hero";
import PixelLogo from "@/components/ui/PixelLogo";

export default function Home() {
  return (
      <main className="border-y border-[#eeeef0]">
          <section className="container border-x border-[#eeeef0]">
            <div className="flex items-center justify-center text-[18px] mx-10 border-x border-[#eeeef0] bg-[#fafafa]">
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
            <p>Another content</p>
          </section>
          <PixelLogo />
      </main>
  );
}
