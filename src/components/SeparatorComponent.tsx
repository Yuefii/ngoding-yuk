import Link from "next/link";
import { Separator } from "@/components/ui/separator";
// import { Combobox } from "./ComboBox";

const SeparatorComponent = () => {
  return (
    <div>
      <div className="space-y-1">
        <Link href="/category" className="text-4xl font-bold leading-none hover:underline">Kategori</Link>
        <p className="text-sm pt-2 text-muted-foreground">
          Beberapa kategori yang sering dicari.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex md:flex-row flex-col md:space-x-4 text-sm">
        <div className="flex my-2 space-x-4 h-5 text-sm">
          <Link className="hover:underline" href="/category/web">
            Web
          </Link>
          <Separator orientation="vertical" />
          <Link className="hover:underline" href="/category/database">
            Database
          </Link>
          <Separator orientation="vertical" />
          <Link className="hover:underline" href="/category/tutorial">
            Tutorial
          </Link>
        </div>
        {/* <Combobox /> */}
      </div>
    </div>
  );
};

export default SeparatorComponent;
