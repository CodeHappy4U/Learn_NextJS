'use client'
import styles from "./page.module.css";
'use client' // WRONG WAY TO DO THIS 

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Events, Function and State</h1>

      // USE CLIENT SIDE RENDERING
      <button onClick={()=>alert ("Hello")}>Click Me</button> 
    </main>
  );
}
