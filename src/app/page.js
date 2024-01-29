'use client'
import styles from "./page.module.css";


export default function Home() {
  const mango= ()=>{
    alert("Fruit")
  }
  return (
    <main className={styles.main}>
      <h1>Events, Function and State</h1>

      {/* USING ONCLICK AND ARROW FUNCTION */}
      <button onClick={mango}>Click Me</button> 
    </main>
  );
}
