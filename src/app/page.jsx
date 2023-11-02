import styles from "./Style.module.css";

export const metadata = {
  title: "Home",
  description: "A description",
};

export default function Home() {
  return (
    <main>
      <h1 className={styles.h1}>Hej</h1>
    </main>
  );
}
