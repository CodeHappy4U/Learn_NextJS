import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>First Page</h1>
    </main>
  );
}

const User=()=>{
  return(
    <div>
      <h2>
        I am Happy
      </h2>
    </div>
  )
}
