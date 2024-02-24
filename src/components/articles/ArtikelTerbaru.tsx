import { POPULAR } from "@/constants/popular";
import Link from "next/link";

const ArtikelTerbaru = ({ title }: any) => {
  return (
    <>
      <div>
        <h1 className="text-xl font-semibold mb-3">{title}</h1>
        <div className="space-y-4 h-[300px] overflow-y-auto md:border p-5 rounded-xl">
          {POPULAR.map((item, index) => (
            <div key={index} className="flex gap-3">
              <li className="text-sm font-medium hover:underline">
                <Link href={item.href}>{item.judul}</Link>
              </li>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ArtikelTerbaru;
