import { WEB } from "@/constants/web";
import { CategoryWeb } from "@/constants/category";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Layout from "../layout";
import Popular from "@/components/articles/Popular";
import Content from "@/components/articles/Content";
import { PaginationArticle } from "@/components/PaginationArticle";
import { useState } from "react";

const ITEMS_PER_PAGE = 3;

const WebPages = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = WEB.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(WEB.length / ITEMS_PER_PAGE);
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

export default WebPages;
