import Link from "next/link";
import Layout from "../layout";
import Popular from "@/components/articles/Popular";
import { buttonVariants } from "@/components/ui/button";
import { TUTORIAL } from "@/constants/tutorial";

const Category = [
  {
    label: "vscode",
    href: "/category/tutorial/vscode",
  },
  {
    label: "xampp",
    href: "/category/tutorial/xampp",
  },
  {
    label: "docker",
    href: "/category/tutorial/docker",
  },
];

const TutorialPages = () => {
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
              {TUTORIAL.map((item, index) => (
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

export default TutorialPages;
