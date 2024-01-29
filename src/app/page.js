'use client'
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Link from "next/link";


export default function Home() {
  const router =  useRouter();
  
  return (
    // <main className={styles.main}> 
    <main> 
      <h1>8. Basic Routing/ Page Navigation/ Links </h1> 

      <Link href="/login">Go To Login Page</Link>
      <br/><hr/>
      <Link href="/about">Go To About Page</Link>
      <br/>
      <br/>
      <br/>
      <br/>
      <button onClick={()=>router.push("/login")}>Go To Login Page </button>
      <button onClick={()=>router.push("/about")}>Go To About Page </button>


    </main>
  )
}
