import DiagonalDivider from "@/components/ui/DiagonalDivider";
import InstallationCommand from "@/components/ui/InstallationCommand";


export default function Testing() {
  return (
      <main className="border-y border-[#eeeef0]">
          <section aria-hidden="true" className="border-t border-b border-[#eeeef0] overflow-hidden">
            <DiagonalDivider height={32} spacing={12} />
          </section>

          <section>
            <div className="container border-x border-[#eeeef0]">
                <div className="px-4 py-0 font-bold text-[24px] sm:mx-5 md:mx-10 border-x border-[#eeeef0]">
                    Components
                </div>
            </div>
            <div className="container border-x border-t border-b border-[#eeeef0] overflow-hidden">
                <div className="py-2 px-4 text-[16px] sm:mx-5 md:mx-10 border-x border-[#eeeef0]">
                    A collection of reusable components.
                </div>
            </div>
            <div className="container border-x border-t border-b border-[#eeeef0] overflow-hidden">
                <InstallationCommand />
            </div>
           </section>
          
      </main>
  );
}
