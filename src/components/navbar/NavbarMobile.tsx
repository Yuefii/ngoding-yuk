import { Button } from "@/components/ui/button";
import { TextAlignRightIcon } from "@radix-ui/react-icons";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { ModeToggle } from "../ModeToggle";

const NavbarMobile = () => {
  return (
    <div className="mr-3 md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="sm" variant="outline">
            <TextAlignRightIcon />
          </Button>
        </SheetTrigger>
        <SheetContent className="mt-14">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <div className="flex justify-end">
              <ModeToggle />
            </div>
          </SheetHeader>
          <ul className="mt-3 text-lg">
            <li className="p-2">
              <SheetClose asChild>
                <Link className="hover:underline" href="/">
                  Beranda
                </Link>
              </SheetClose>
            </li>
            <li className="p-2">
              <SheetClose asChild>
                <Link className="hover:underline" href="/category">
                  Kategori
                </Link>
              </SheetClose>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavbarMobile;
