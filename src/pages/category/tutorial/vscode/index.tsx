import BackButton from "@/components/Back";
import Layout from "../../layout";
import Popular from "@/components/articles/Popular";
import { TUTORIAL } from "@/constants/tutorial";
import Content from "@/components/articles/Content";

const WebPages = () => {
  return (
    <>
      <Layout>
        <BackButton />
        <main className="mt-3">
          <Content title="Artikel Tentang Visual Studio Code">
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
        </main>
      </Layout>
    </>
  );
};

export default WebPages;
