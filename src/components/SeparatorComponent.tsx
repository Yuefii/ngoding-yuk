import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Combobox } from "./ComboBox";

const SeparatorComponent = () => {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-4xl font-bold leading-none">Kategori</h4>
        <p className="text-sm pt-2 text-muted-foreground">
          Beberapa kategori yang sering dicari.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
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
        <Combobox />
      </div>
    </div>
  );
};

export default SeparatorComponent;
