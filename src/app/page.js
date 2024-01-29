'use client'
import styles from "./page.module.css";
import Link from "next/link";


export default function Home() {

  
  return (
    // <main className={styles.main}> 
    <main> 
      <h1>8. Basic Routing/ Page Navigation/ Links </h1> 

      <Link href="/login">Go To Login Page</Link>
      <br/><hr/>
      <Link href="/about">Go To About Page</Link>
     
    </main>
  )
}
