import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <nav className={styles.header}>
      <Link href="/" className={styles.logoText}>
        Tilápia
      </Link>
      <ul className={styles.nav}>
        <li>
          <Link href="/" className={styles.button}>
            Início
          </Link>
        </li>
        <li>
          <Link href="/fish" className={styles.button}>
            Peixes
          </Link>
        </li>
        <li>
          <Link href="/calculator" className={styles.button}>
            Calculadora
          </Link>
        </li>
      </ul>
    </nav>
  );
}
