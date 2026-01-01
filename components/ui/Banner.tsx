import Image from "next/image";
import Images from "@/assets/Images/index";

export default function Banner() {
  return (
    <div className="w-full border rounded-2xl bg-[var(--foreground)] text-[var(--background)]">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[200px]">
        <div className="flex flex-col justify-center px-6 py-6 md:px-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
            Powerful Banner Title
          </h2>

          <p className="text-sm md:text-base mb-5 md:mb-6 max-w-md">
            This is a banner description. Content is aligned properly and
            responsive using grid layout.
          </p>

          <button className="w-fit px-4 py-2 rounded-lg bg-[var(--background)] text-[var(--foreground)] font-medium">
            Get Started
          </button>
        </div>

        <div className="grid place-items-center p-6">
          <div className="rounded-xl overflow-hidden w-full max-w-[220px] sm:max-w-[260px] md:max-w-full">
            <Image
              src={Images.model2}
              alt="Banner"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
