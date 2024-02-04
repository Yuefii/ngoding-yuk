import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { TextAlignCenterIcon } from "@radix-ui/react-icons";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

export function NavbarMobile() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const sheetRef = useRef<HTMLDivElement>(null);

  const handleSheetOpen = () => {
    setIsSheetOpen(true);
  };

  const handleClickOutsideSheet = (event: MouseEvent) => {
    if (sheetRef.current && !sheetRef.current.contains(event.target as Node)) {
      setIsSheetOpen(false);
    }
  };

  useEffect(() => {
    if (isSheetOpen) {
      document.addEventListener("click", handleClickOutsideSheet);
    }

    return () => {
      document.removeEventListener("click", handleClickOutsideSheet);
    };
  }, [isSheetOpen]);

  return (
    <div className="mr-3 md:hidden" ref={sheetRef}>
      <Sheet>
        <SheetTrigger asChild>
          <Button size="sm" variant="outline" onClick={handleSheetOpen}>
            <TextAlignCenterIcon />
          </Button>
        </SheetTrigger>
        {isSheetOpen && (
          <SheetContent className="mt-14">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div>
              <ul className="mt-3 text-lg">
                <li className="p-2">
                  <Link className="hover:underline" href="/">
                    Beranda
                  </Link>
                </li>
                <li className="p-2">
                  <Link className="hover:underline" href="/category">
                    Kategori
                  </Link>
                </li>
              </ul>
            </div>
          </SheetContent>
        )}
      </Sheet>
    </div>
  );
}
