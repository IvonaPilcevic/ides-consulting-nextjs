//@ts-nocheck
import Services from "@/components/Services/Services";
import React from "react";
import data from "../../data.json";
const Page = (props) => {
  return <Services content={props.content} />;
};

export async function getStaticPaths() {
  const paths = ["/kinaxis", "/sap", "/tungsten", "/hewlett"];
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params?.slug;
  const content = data?.pages[slug];
  return {
    props: {
      content,
    },
  };
}

export default Page;
