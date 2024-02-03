import Link from "next/link";
import Layout from "../layout";
import { buttonVariants } from "@/components/ui/button";

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
        <main className="mt-10">
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
        </main>
      </Layout>
    </>
  );
};

export default TutorialPages;
