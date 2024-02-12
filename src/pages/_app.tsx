import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";

const roboto = Roboto({
  weight: ["300", "400", "700"],
  style: "normal",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}
