import Image from "next/image";

interface PopularProps {
  img: string;
  judul: string;
  konten: string;
}

const Popular: React.FC<PopularProps> = ({ img, judul, konten }) => {
  return (
    <>
      <div className="col-span-12 py-2 lg:col-span-3">
        <Image
          src={img}
          className="rounded-lg border"
          alt="..."
          width={400}
          height={400}
        />
      </div>
      <div className="lg:my-3 col-span-12 lg:col-span-9">
        <h1 className="text-2xl font-semibold mb-3 hover:underline cursor-pointer">
          {judul}
        </h1>
        <p className="lg:pr-10 font-medium text-justify lg:text-lg opacity-80">
          {konten}
        </p>
      </div>
    </>
  );
};

export default Popular;
