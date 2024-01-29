'use client'
import styles from "./page.module.css";


export default function Home() {
  const mango= (item)=>{
    alert(item)
  }
  return (
    <main className={styles.main}>
      <h1>Events, Function and State</h1>

      {/* CALLING A FUNCTION */}
      <button onClick={()=>mango("color")}>Click Me</button> 
    </main>
  );
}
