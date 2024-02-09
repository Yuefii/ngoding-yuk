import { POPULAR } from "@/constants/popular";
import Layout from "./layout";
import Popular from "@/components/articles/Popular";
import Head from "next/head";

const CategoryPages = () => {
  return (
    <>
      <Head>
        <title>Ngoding Yuk | Kategori</title>
        <meta
          name="description"
          content="Carilah Skill yang ingin kamu pelajari."
        />
        <meta
          name="keywords"
          content="tutorial pemrograman, dasar-dasar coding, belajar ngoding, Next.js tutorial, React programming, web development, coding for beginners"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className="mt-5">
          <h1 className="font-bold text-2xl">Artikel Populer</h1>
          <div className="mt-3">
            <div className="grid grid-cols-12 lg:gap-5">
              {POPULAR.map((item, index) => (
                <Popular
                  href={item.href}
                  key={index}
                  img={item.img}
                  judul={item.judul}
                  konten={item.konten}
                />
              ))}
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default CategoryPages;
