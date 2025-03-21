import Link from "next/link";
import Image from "next/image";
import styles from "./home.module.css";

export default function Home() {
  return (
    <section className={styles.all}>
      <div className={styles.topImage}></div>
      <section className={styles.fullPage}>
        <div className={styles.topContent}>
          <h1>Title</h1>
          <p>Introduction</p>
        </div>
        <section className="flex flex-row flex-wrap justify-around">
          <div className={styles.portfolioDiv}>
            <Link href="#">
              <Image src="" alt="Ship Space" width={300} height={300} />
            </Link>
            <div className={styles.portfolioBottom}>
              <h2>PortfolioTitle</h2>
              <p>Description</p>
            </div>
          </div>
          <div className={styles.portfolioDiv}>
            <Link href="#">
              <Image src="" alt="Week 8" width={300} height={300} />
            </Link>
            <div className={styles.portfolioBottom}>
              <h2>PortfolioTitle</h2>
              <p>Description</p>
            </div>
          </div>
          <div className={styles.portfolioDiv}>
            <Link href="#">
              <Image src="" alt="Week 9" width={300} height={300} />
            </Link>
            <div className={styles.portfolioBottom}>
              <h2>PortfolioTitle</h2>
              <p>Description</p>
            </div>
          </div>
          <div className={styles.portfolioDiv}>
            <Link href="#">
              <Image
                src=""
                alt="Week 6 Cookie Clicker"
                width={300}
                height={300}
              />
            </Link>
            <div className={styles.portfolioBottom}>
              <h2>PortfolioTitle</h2>
              <p>Description</p>
            </div>
          </div>
          <div className={styles.portfolioDiv}>
            <Link href="#">
              <Image src="" alt="FlexFare Mockup" width={300} height={300} />
            </Link>
            <div className={styles.portfolioBottom}>
              <h2>PortfolioTitle</h2>
              <p>Description</p>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}
