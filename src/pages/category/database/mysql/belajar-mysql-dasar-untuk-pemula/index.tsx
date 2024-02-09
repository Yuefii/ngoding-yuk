/* eslint-disable react-hooks/rules-of-hooks */
import Image from "next/image";
import { POPULAR } from "@/constants/popular";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useState } from "react";
import BackButton from "@/components/Back";

const index = () => {
  const [code, setCode] = useState(`
<!DOCTYPE html>
  <html lang="en">
    <head>
      <title>Belajar HTML #01</title>
    </head>
    <body>
      <p>Hello World!</p>
    </body>
  </html>
    `);
  return (
    <>
      <div className="md:container mx-auto">
        <div className="flex lg:flex-row flex-col justify-between gap-8">
          <article className="mb-20 lg:max-w-4xl md:border p-5 rounded-xl">
            <BackButton />
            <h1 className="text-4xl font-bold my-10">
              Belajar DATABASE MYSQL DASAR UNTUK PEMULA
            </h1>
            <div className="flex justify-center">
              <Image
                className="my-4 border rounded-xl"
                src="/article/MYSQL_1.png"
                alt="..."
                width={500}
                height={500}
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
              repellendus porro, quisquam vero dolore architecto consectetur
              quasi unde ipsam nisi ex, fugiat accusantium officiis, ullam odit
              quod beatae facilis ut. Ad quo dignissimos corrupti totam! At est
              vel delectus temporibus. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Enim rem sit omnis sunt, debitis, quis deleniti
              culpa commodi est, tempore necessitatibus! Provident labore ut
              laboriosam illum modi explicabo mollitia accusamus.
            </p>
            <h1 className="text-4xl font-semibold my-4">Daftar Isi</h1>
            <div className="my-4 cursor-pointer space-y-2">
              <li className="hover:underline">Lorem ipsum dolor sit amet.</li>
              <li className="hover:underline">Lorem ipsum dolor sit amet.</li>
              <li className="hover:underline">Lorem ipsum dolor sit amet.</li>
              <li className="hover:underline">Lorem ipsum dolor sit amet.</li>
              <li className="hover:underline">Lorem ipsum dolor sit amet.</li>
              <li className="hover:underline">Lorem ipsum dolor sit amet.</li>
            </div>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              eligendi quidem dolorem, impedit autem vero hic nemo asperiores
              consequuntur velit reprehenderit commodi quam tempore quas
              blanditiis? Ex, maiores hic neque assumenda quam dolorum harum
              obcaecati esse aperiam natus soluta nulla doloribus vero
              reiciendis itaque nam pariatur mollitia quod exercitationem? Ipsam
              animi ipsum culpa dolore! Nesciunt suscipit distinctio quidem
              dicta veniam incidunt maxime voluptates nobis asperiores iusto
              ipsam obcaecati, minus impedit pariatur libero itaque atque
              voluptatem laborum accusamus expedita cumque, fugiat tempore alias
              nostrum. Nulla ipsa voluptatum saepe fuga mollitia ipsum
              consectetur illum pariatur praesentium, distinctio modi ab
              deserunt blanditiis qui.
            </p>
            <div className="my-4">
              <h1 className="text-3xl font-semibold ">
                1. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </h1>
              <p className="pl-10 my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio veritatis esse asperiores dolorum libero fuga hic,
                voluptas aspernatur quia officiis aliquid qui dolor repellendus
                cum. Maiores, molestias. Odio ipsam optio impedit possimus
                reiciendis placeat totam omnis sequi quam tenetur. Aut cum quos
                quam enim incidunt ipsum, et vero accusamus ratione.
              </p>
              <div className="mx-10">
                <SyntaxHighlighter language="html" style={oneDark}>
                  {code.trim()}
                </SyntaxHighlighter>
              </div>
            </div>
            <div className="my-4">
              <h1 className="text-3xl font-semibold ">
                2. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </h1>
              <p className="pl-10 my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio veritatis esse asperiores dolorum libero fuga hic,
                voluptas aspernatur quia officiis aliquid qui dolor repellendus
                cum. Maiores, molestias. Odio ipsam optio impedit possimus
                reiciendis placeat totam omnis sequi quam tenetur. Aut cum quos
                quam enim incidunt ipsum, et vero accusamus ratione.
              </p>
              <div className="mx-10">
                <SyntaxHighlighter language="html" style={oneDark}>
                  {code.trim()}
                </SyntaxHighlighter>
              </div>
            </div>
            <p className="my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              vel temporibus ut est necessitatibus accusantium earum dolor,
              magni debitis molestias doloremque molestiae a, ea iste nostrum
              rerum voluptatem iure reiciendis incidunt! Et corporis eum
              possimus minima esse eligendi quibusdam incidunt eaque id
              voluptatem ab, non consectetur obcaecati. Quod, nemo quisquam
              sapiente quia tempora eaque velit a, ullam corrupti perferendis
              fuga veniam ea cupiditate sunt praesentium odit accusamus
              voluptatum optio laboriosam blanditiis, reiciendis maxime culpa
              ratione? Eligendi soluta minima accusantium autem deserunt. Sunt,
              provident temporibus aspernatur dolore repellendus voluptatum. Aut
              id quidem aperiam quo qui harum dolore est facere doloribus ab!
            </p>
          </article>
          <div className="space-y-4 h-[300px] md:border p-5 rounded-xl">
            <h1 className="text-xl font-semibold">Artikel Terbaru</h1>
            {POPULAR.map((item, index) => (
              <div key={index} className="flex gap-3">
                <Image
                  className="rounded-md"
                  src={item.img}
                  alt=""
                  width={100}
                  height={100}
                />
                <p className="text-md font-medium">{item.judul}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
