import Header from "@/components/home/Header";
import HeroImage from "@/components/home/HeroImage";
import Head from "next/head";

const HomePages = () => {
  return (
    <>
      <Head>
        <title>Ngoding Yuk | Beranda</title>
        <meta
          name="description"
          content="Kembangkan Skill, Pelajari Dasar Cara Ngoding Bersama Kami."
        />
        <meta
          name="keywords"
          content="tutorial pemrograman, dasar-dasar coding, belajar ngoding, Next.js tutorial, React programming, web development, coding for beginners"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-full flex flex-col">
        <div className="flex flex-col justify-center items-center text-center flex-1 px-6 pb-10">
          <HeroImage />
          <Header />
        </div>
      </div>
    </>
  );
};

export default HomePages;
