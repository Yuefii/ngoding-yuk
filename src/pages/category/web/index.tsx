import Link from "next/link";
import Layout from "../layout";
import { buttonVariants } from "@/components/ui/button";
import Popular from "@/components/articles/Popular";
import { HTML } from "@/constants/html";

const Category = [
  {
    label: "HTML",
    href: "/category/web/html",
  },
  {
    label: "CSS",
    href: "/category/web/css",
  },
  {
    label: "Javascript",
    href: "/category/web/javascript",
  },
];

const WebPages = () => {
  return (
    <>
      <Layout>
        <main className="mt-5 max-w-6xl">
          <div className="flex gap-2 mb-5">
            {Category.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={buttonVariants({ size: "sm", variant: "outline" })}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <h1 className="font-bold text-4xl">Artikel Populer</h1>
          <div className="mt-3">
            <div className="grid grid-cols-12 lg:gap-5">
              {HTML.map((item, index) => (
                <Popular
                href={item.href}
                  key={index}
                  img={item.img}
                  judul={item.judul}
                  konten={item.konten}
                />
              ))}
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default WebPages;
