import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Hero from '../compons/Hero'
import Skills from '../compons/Skills'
import About from '../compons/About'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Skills />
      <About />
    </div>
  )
}
