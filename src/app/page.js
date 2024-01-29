'use client'
import { useState } from "react";
import styles from "./page.module.css";


export default function Home() {

  // USING REACT STATE
  const [name,setName] = useState("Happy") //TEMPORARY NAME
  const mango=()=>{
    setName("Raja") //USING SETTING STATE
  }
  return (
    <main className={styles.main}> 
    {/* HTML INSIDE JSX */}
      <h1>Events, Function and State {name}</h1>
      <button onClick={()=>mango()}>Click Me</button> 
    </main>
  );
}
