import Image from "next/image";
import BackButton from "../Back";
import ArtikelTerbaru from "./ArtikelTerbaru";

const ContentArtikel = ({ title, children, img }: any) => {
  return (
    <>
      <div className="md:container md:mx-auto">
        <div className="flex lg:flex-row flex-col justify-between gap-8">
          <article className="md:mb-10 lg:max-w-4xl md:border p-2 md:p-5 rounded-xl">
            <BackButton />
            <h1 className="text-4xl font-bold my-4 md:my-10">{title}</h1>
            <div className="flex justify-center">
              <Image
                className="my-4 border rounded-xl"
                src={img}
                alt="..."
                width={500}
                height={500}
              />
            </div>
            {children}
          </article>
          <ArtikelTerbaru title="Artikel Terbaru" />
        </div>
      </div>
    </>
  );
};

export default ContentArtikel;
