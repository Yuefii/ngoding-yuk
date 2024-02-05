import Image from "next/image";

const HeroImage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center max-w-5xl">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:[400px]">
          <Image
            src="/images/hero.png"
            alt="..."
            className="object-containc dark:invert"
            fill
          />
        </div>
      </div>
    </>
  );
};

export default HeroImage;
