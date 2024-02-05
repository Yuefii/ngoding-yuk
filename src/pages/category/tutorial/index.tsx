import Link from "next/link";
import Layout from "../layout";
import { buttonVariants } from "@/components/ui/button";
import Popular from "@/components/articles/Popular";

const Category = [
  {
    label: "vscode",
    href: "#",
  },
  {
    label: "xampp",
    href: "#",
  },
  {
    label: "docker",
    href: "#",
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
              <Popular
                img="/article/article_1.png"
                judul="Bagaimana Cara Install VSCode di Windows"
                konten="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed porro, nesciunt numquam libero assumenda quos, beatae, ea alias impedit dolore temporibus modi eum quis. Similique omnis magni amet saepe minus?"
              />
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default TutorialPages;
