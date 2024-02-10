import Link from "next/link";
import { TUTORIAL } from "@/constants/tutorial";
import { buttonVariants } from "@/components/ui/button";
import { CategoryTutorial } from "@/constants/category";
import Layout from "../layout";
import Popular from "@/components/articles/Popular";
import Content from "@/components/articles/Content";

const TutorialPages = () => {
  return (
    <>
      <Layout>
        <div className="flex gap-2 mb-5">
          {CategoryTutorial.map((item, index) => (
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
          {TUTORIAL.map((item, index) => (
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

export default TutorialPages;
