import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Python classes</title>
        <meta name="description" content="Aurangabad's top python classes" />
        <meta name="google-site-verification" content="nfWt5xKu4sRBR9onwzf7oMAa68SE7O1v-pr_5sjWJAg" />
        <meta name="msvalidate.01" content="F2EFB734FE83C1EBBC9D1782E4DA10AF" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Python classes in <span style={{color: "#0066ff"}}>Aurangabad</span>
        </h1>
        <p style={{color: "tan"}}>
          Website under construction. Very soon website will update!
        </p>
        <p className={styles.description}>
           For enquiry : <a style={{color: "#ac7b3b"}} href="mailto:info.digitute@gmail.com">info.digitute@gmail.com</a> <br/>
        </p>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h2>Django &rarr;</h2>
            <p>We have great experience with Django. We made lots of projects in Django.</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Python &rarr;</h2>
            <p>We believe our teaching style will help you to get JOB!</p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h2>Javascripts &rarr;</h2>
            <p>We have great experience with React, Nextjs and many frontend frameworks.</p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h2>HTML &amp; CSS &rarr;</h2>
            <p>
              We will learn each technology using live projects.
            </p>
          </a>
        </div>
        <p style={{color: "blue"}}>
           We have many students. Who have been placed in large corporations.
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="#"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/digitute_logo.jpg" alt="Vercel Logo" width={72} height={20} />
          </span>
        </a>
      </footer>
    </div>
  )
}
