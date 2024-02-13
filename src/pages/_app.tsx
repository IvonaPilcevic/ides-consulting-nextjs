import type { AppProps } from "next/app";
import { Maven_Pro } from "next/font/google";
import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";

const maven_pro = Maven_Pro({
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <main className={maven_pro.className}>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}
