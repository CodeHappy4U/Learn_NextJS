
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Events, Function and State</h1>
      <button onClick={()=>alert ("Hello")}>Click Me</button> //USE AS A SERVER COMPONENT
    </main>
  );
}
