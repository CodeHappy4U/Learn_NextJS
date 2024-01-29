'use client'
import { useState } from "react";
import styles from "./page.module.css";


export default function Home() {

  // USING REACT STATE
  // const [name,setName] = useState("Happy") //TEMPORARY NAME
  let data="Alpit"
  const mango=()=>{
    // setName("Raja") //USING SETTING STATE
      data ="Arjun"
  }
  return (
    <main className={styles.main}> 
    {/* HTML INSIDE JSX */}
      <h1>Events, Function and State {data}</h1>
      <button onClick={()=>mango()}>Click Me</button> 
    </main>
  );
}
