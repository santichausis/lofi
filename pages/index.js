import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { videos } from '../assets/data'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LoFi Music</title>
        <meta name="description" content="It's a Lo-Fi site for listen music from youtube" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1>Lo-Fi Music</h1>
      </main>
      <section className={styles.section}>

        <ul className={styles.ul}>
          {
            videos.map(({id, nombre}) =>
              <li className={styles.li} key={id}>
                <iframe
                  load="lazyload"
                  className={styles.iframe}
                  width="426"
                  height="240"
                  src={nombre}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="autoplay; picture-in-picture"
                  allowFullScreen
                >
                </iframe>
              </li>
            )}
        </ul>
      </section>
      <footer className={styles.footer}>
        Powered by Santi 🐽
      </footer>
    </div>
  )
}

