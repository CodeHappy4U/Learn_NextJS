import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>

      {/* DATA PASSING */}
      <User name = "Happy"/>
      <User name = "Mala"/>
      <User name = "keya"/>
      <User name = "Riva"/>

      <h1>First Page</h1>
    </main>
  );
}

//PASSING AS A PROPS
const User=(props)=>{
  return(
    <div>
      <h2>
        I am {props.name}
      </h2>
    </div>
  )
}
