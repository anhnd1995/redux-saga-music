import Head from "next/head";
import Todo from "../components/Todo";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import HomeLayout from "./HomeLayout";
export default function Home() {
  return (
    <>
      <Head>
        <title>Music App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeLayout />
    </>
  );
}
