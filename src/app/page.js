'use client'
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Link from "next/link";


export default function Home() {
  const router =  useRouter();

  const navigate=(name)=>{
    router.push(name);
  }
  
  return (
    // <main className={styles.main}> 
    <main> 
      <h1>10. Common Layout</h1> 

      <Link href="/login">Go To Login Page</Link>
      <br/>
      <br/>
      <Link href="/about">Go To About Page</Link>
      <br/>
      <br/>
      <br/>
      <br/>
      <button onClick={()=>navigate("/login")}>Go To Login Page </button>
      &nbsp;
      &nbsp;
      <button onClick={()=>navigate("/about")}>Go To About Page </button>


    </main>
  )
}
