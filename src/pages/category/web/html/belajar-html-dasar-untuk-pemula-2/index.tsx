import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold my-10">
          Belajar HTML DASAR UNTUK PEMULA
        </h1>
        <div className="flex flex-col lg:flex-row gap-4">
          <Image
            className="my-4 border rounded-xl"
            src="/article/HTML_1.png"
            alt="..."
            width={500}
            height={500}
          />
          <p className="my-5 text-xl text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            vero minus aspernatur numquam possimus assumenda harum libero
            ducimus, dolores magni.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptas vero minus aspernatur numquam possimus
            assumenda harum libero ducimus, dolores magni. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Voluptas vero minus aspernatur
            numquam possimus assumenda harum libero ducimus, dolores magni.Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Voluptas vero
            minus aspernatur numquam possimus assumenda harum libero ducimus,
            dolores magni. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Sint, eaque. Voluptas vero minus aspernatur numquam possimus
            assumenda harum libero ducimus, dolores magni. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Sint, eaque.
          </p>
        </div>
        <article className="text-xl text-justify mb-20">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
            repellendus porro, quisquam vero dolore architecto consectetur quasi
            unde ipsam nisi ex, fugiat accusantium officiis, ullam odit quod
            beatae facilis ut. Ad quo dignissimos corrupti totam! At est vel
            delectus temporibus. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Enim rem sit omnis sunt, debitis, quis deleniti
            culpa commodi est, tempore necessitatibus! Provident labore ut
            laboriosam illum modi explicabo mollitia accusamus.
          </p>
          <div className="my-4">
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </div>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            eligendi quidem dolorem, impedit autem vero hic nemo asperiores
            consequuntur velit reprehenderit commodi quam tempore quas
            blanditiis? Ex, maiores hic neque assumenda quam dolorum harum
            obcaecati esse aperiam natus soluta nulla doloribus vero reiciendis
            itaque nam pariatur mollitia quod exercitationem? Ipsam animi ipsum
            culpa dolore! Nesciunt suscipit distinctio quidem dicta veniam
            incidunt maxime voluptates nobis asperiores iusto ipsam obcaecati,
            minus impedit pariatur libero itaque atque voluptatem laborum
            accusamus expedita cumque, fugiat tempore alias nostrum. Nulla ipsa
            voluptatum saepe fuga mollitia ipsum consectetur illum pariatur
            praesentium, distinctio modi ab deserunt blanditiis qui.
          </p>
        </article>
      </div>
    </>
  );
};

export default index;
