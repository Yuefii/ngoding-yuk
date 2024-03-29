import { MYSQL } from "@/constants/mysql";
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
          <Content title="Artikel Tentang Mysql">
            {MYSQL.map((item, index) => (
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
