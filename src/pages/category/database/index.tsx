import Link from "next/link";
import Layout from "../layout";
import { buttonVariants } from "@/components/ui/button";
import Popular from "@/components/articles/Popular";
import { MYSQL } from "@/constants/mysql";

const Category = [
  {
    label: "mysql",
    href: "#",
  },
  {
    label: "postgresql",
    href: "#",
  },
  {
    label: "mongodb",
    href: "#",
  },
];

const DatabasePages = () => {
  return (
    <>
      <Layout>
        <main className="mt-5">
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
              {MYSQL.map((item, index) => (
                <Popular
                  href="#"
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

export default DatabasePages;
