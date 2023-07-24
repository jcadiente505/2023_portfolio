import { Metadata } from "next";
import Link from "next/link";
 import Intro from './ui/Intro';
 import About from './ui/About';

export const metadata: Metadata = {
  title: "Next.js",
};


export const Page = () => {
  return (
    <>
      <Intro />
      <About />
    </>
  );
}

export default Page;
