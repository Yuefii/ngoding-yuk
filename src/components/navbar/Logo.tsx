import Image from "next/image";

const Logo = () => {
  return (
    <>
      <div className="flex items-center gap-x-2">
        <Image src="/favicon.ico" alt="" height={30} width={30} />
        <p className="font-semibold">Ngoding Yuk</p>
      </div>
    </>
  );
};

export default Logo;
