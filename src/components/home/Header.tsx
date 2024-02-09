import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const Header = () => {
  return (
    <>
      <div className="max-w-2xl space-y-4">
        <h1 className="text-4xl sm:text-5xl font-bold">
          Kembangkan Skill Kamu, Pelajari Dasar-Dasar Ngoding Bersama Kami!
        </h1>
        <h3 className="text-md sm:text-xl font-medium">
          <span className="font-bold">
            Ngoding<span className="underline">Yuk</span>
          </span>{" "}
          adalah website yang menyajikan pengalaman belajar ngoding yang
          menyenangkan! Temukan dasar-dasar ngoding dan panduan instalasi
          aplikasi dengan mudah di sini.
        </h3>
        <Button>
          <Link className="flex items-center" href="/category">
            Mulai Sekarang
            <ArrowRightIcon className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </div>
    </>
  );
};

export default Header;
