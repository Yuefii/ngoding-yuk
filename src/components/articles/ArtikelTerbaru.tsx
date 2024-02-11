import { POPULAR } from "@/constants/popular";
import Image from "next/image";

const ArtikelTerbaru = ({ title }: any) => {
  return (
    <>
      <div className="space-y-4 h-[300px] md:border p-5 rounded-xl">
        <h1 className="text-xl font-semibold">{title}</h1>
        {POPULAR.map((item, index) => (
          <div key={index} className="flex gap-3">
            <Image
              className="rounded-md"
              src={item.img}
              alt=""
              width={100}
              height={100}
            />
            <p className="text-md font-medium">{item.judul}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ArtikelTerbaru;
