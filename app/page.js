'use client';
import BlogList from "@/Components/BlogList";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { Toaster } from "react-hot-toast";


export default function Home() {
  return (
    <>
      <Header />
      <BlogList />
      <Footer />
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </>
  );
}
