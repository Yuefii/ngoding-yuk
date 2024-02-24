import { CSS } from "@/constants/css";

import BackButton from "@/components/Back";
import Layout from "../../layout";
import Content from "@/components/articles/Content";
import Popular from "@/components/articles/Popular";

const CSSPages = () => {
  return (
    <>
      <Layout>
        <BackButton />
        <main className="mt-3">
          <Content title="Artikel Tentang Belajar CSS Dasar">
            {CSS.map((item, index) => (
              <Popular
                href={item.href}
                key={index}
                img={item.img}
                judul={item.judul}
                konten={item.konten}
              />
            ))}
          </Content>
        </main>
      </Layout>
    </>
  );
};

export default CSSPages;
