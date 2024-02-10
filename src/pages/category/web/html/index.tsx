import { HTML } from "@/constants/html";
import BackButton from "@/components/Back";
import Layout from "../../layout";
import Popular from "@/components/articles/Popular";
import Content from "@/components/articles/Content";

const WebPages = () => {
  return (
    <>
      <Layout>
        <BackButton />
        <main className="mt-3">
          <Content title="Belajar Html Dasar">
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
        </main>
      </Layout>
    </>
  );
};

export default WebPages;
