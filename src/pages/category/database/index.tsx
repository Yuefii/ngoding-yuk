import { buttonVariants } from "@/components/ui/button";
import { DATABASE } from "@/constants/database";
import { CategoryDatabase } from "@/constants/category";
import Link from "next/link";
import Layout from "../layout";
import Popular from "@/components/articles/Popular";
import Content from "@/components/articles/Content";

const DatabasePages = () => {
  return (
    <>
      <Layout>
        <div className="flex gap-2 mb-5">
          {CategoryDatabase.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={buttonVariants({ size: "sm", variant: "outline" })}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Content title="Artikel Populer">
          {DATABASE.map((item, index) => (
            <Popular
              href={item.href}
              key={index}
              img={item.img}
              judul={item.judul}
              konten={item.konten}
            />
          ))}
        </Content>
      </Layout>
    </>
  );
};

export default DatabasePages;
