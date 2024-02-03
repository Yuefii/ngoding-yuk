import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const Header = () => {
  return (
    <>
      <div className="max-w-3xl space-y-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
          Kembangkan Skill, Pelajari Dasar Cara Ngoding Bersama Kami.
        </h1>
        <h3 className="text-lg sm:text-xl md:text-2xl font-medium">
          <span className="font-bold">Ngoding <span className="underline">Yuk</span></span> adalah website yang
          bisa membantu anda mempelajari dasar-dasar ngoding dan bagaimana cara
          nginstall aplikasi untuk ngoding.
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
