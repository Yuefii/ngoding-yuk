import { HTML } from "@/constants/html";
import { CategoryWeb } from "@/constants/category";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Layout from "../layout";
import Popular from "@/components/articles/Popular";
import Content from "@/components/articles/Content";

const WebPages = () => {
  return (
    <>
      <Layout>
        <div className="flex gap-2 mb-5">
          {CategoryWeb.map((item, index) => (
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
          {HTML.map((item, index) => (
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

export default WebPages;
