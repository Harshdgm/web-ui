import DiagonalDivider from "@/components/ui/DiagonalDivider";
import PixelLogo from "@/components/ui/PixelLogo";

export default function Home() {
  return (
      <main className="border-y border-[#eeeef0]">
          <section className="container flex items-center justify-center border-x border-[#eeeef0]">
            <h1 className="text-[18px]">Home Page</h1>
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
