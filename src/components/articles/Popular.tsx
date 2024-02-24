import Image from "next/image";
import Link from "next/link";

interface PopularProps {
  img: string;
  judul: string;
  konten: string;
  href: string
}
const Popular: React.FC<PopularProps> = ({ img, judul, konten, href }) => {
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
        <Link href={href}>
          <h1 className="text-xl font-semibold mb-3 hover:underline cursor-pointer">
            {judul}
          </h1>
        </Link>
        <p className="lg:pr-10 font-medium text-justify lg:text-md opacity-80">
          {konten}
        </p>
      </div>
    </>
  );
};

export default Popular;
