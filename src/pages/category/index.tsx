import Layout from "./layout";
import Popular from "@/components/articles/Popular";

const CategoryPages = () => {
  return (
    <>
      <Layout>
        <main className="mt-5">
          <h1 className="font-bold text-2xl">Artikel Populer</h1>
          <div className="mt-3">
            <div className="grid grid-cols-12 lg:gap-5">
              <Popular
                img="/article/article_1.png"
                judul="Belajar HTML Dasar untuk Pemula"
                konten="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed porro, nesciunt numquam libero assumenda quos, beatae, ea alias impedit dolore temporibus modi eum quis. Similique omnis magni amet saepe minus?"
              />
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default CategoryPages;
