import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Página Principal</title>
        <meta name="keywords" content="Roupas, Calçados, Bonés"></meta>
        <meta
          name="description"
          content="Encontre a melhor roupa pra você"
        ></meta>
      </Head>
      <div>
        <h1 className={styles.title}>Hello world!</h1>
        <Image
          src="/images/ultimate.jpg"
          height="500px"
          width="500px"
          alt="nebulosa"
        />
      </div>
    </>
  );
}
