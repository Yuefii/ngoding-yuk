import Header from "@/components/home/Header";
import HeroImage from "@/components/home/HeroImage";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Ngoding Yuk | Home</title>
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
      <div className="mt-20 min-h-full flex flex-col">
        <div className="flex flex-col justify-center items-center text-center gap-y-8 flex-1 px-6 pb-10">
          <Header />
          <HeroImage />
        </div>
      </div>
    </>
  );
};

export default Home;
