import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/navbar/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main>
        <nav className="mb-20">
        <Navbar />
        </nav>
        <Component {...pageProps} />
      </main>
    </>
  );
}
