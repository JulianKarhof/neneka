import Head from "next/head";
import styles from "./index.module.scss";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import Particles from "react-particles-js";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">ねねか's</a> Page!
        </h1>

        <div className={styles.description}>
          <p>Intro</p>
          Neneka is a very hardworking Indie VTuber, associated with the Doujin
          Circle Rumu Rumu. She interacts with her fans frequently, and loves
          playing games such as Mahjong Souls, League of Legends, Apex Legends,
          and Valorant! She also loves watching anime, and singing songs.
          <br />
          <br />
          The moment she reached 600 subscribers on Youtube, she streamed for 4
          days, and managed to break 2000 subscribers in that marathon session!
          Currently, she's on a 14-day long streaming marathon to raise money
          for her rent and other living expenses.
        </div>

        {/* <div className={styles.info}>
          <div>Likes</div>
          <div>Dislikes</div>
        </div> */}

        <div className={styles.timeline}>
          {/* <TwitterTimelineEmbed
            sourceType="profile"
            screenName="neko_neneka"
            options={{ width: 500, height: 600 }}
          /> */}
        </div>
      </main>
      <Particles
        className={styles.particles}
        params={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 1,
              direction: "top",
              out_mode: "out",
            },
          },
        }}
      />
    </div>
  );
}
