import Link from "next/link";
import Layout from "../layout";
import Popular from "@/components/articles/Popular";
import { buttonVariants } from "@/components/ui/button";
import { MYSQL } from "@/constants/mysql";

const Category = [
  {
    label: "mysql",
    href: "/category/database/mysql",
  },
  {
    label: "postgresql",
    href: "/category/database/postgresql",
  },
  {
    label: "mongodb",
    href: "/category/database/mongodb",
  },
];

const DatabasePages = () => {
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
              {MYSQL.map((item, index) => (
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

export default DatabasePages;
