import { POPULAR } from "@/constants/popular";
import { useState } from "react";
import { PaginationArticle } from "@/components/PaginationArticle";

import Layout from "./layout";
import Popular from "@/components/articles/Popular";
import Head from "next/head";
import Content from "@/components/articles/Content";

const ITEMS_PER_PAGE = 3;

const CategoryPages = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = POPULAR.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(POPULAR.length / ITEMS_PER_PAGE);

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
        <Content title="Artikel Populer">
          {currentItems.map((item, index) => (
            <Popular
              href={item.href}
              key={index}
              img={item.img}
              judul={item.judul}
              konten={item.konten}
            />
          ))}
        </Content>
        <div className="mt-5 flex justify-center items-center">
          <PaginationArticle
            handlePageChange={handlePageChange}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </div>
      </Layout>
    </>
  );
};

export default CategoryPages;
