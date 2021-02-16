import Head from "next/head";
import styles from "./index.module.scss";
import Particles from "react-particles-js";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>子狐ねねか Fan Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src="/nene.png" className={styles.nene} />
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">ねねか's</a> Page!
        </h1>

        <div className={styles.skew}>
          <div className={styles.description}>
            <p>Intro</p>
            Neneka is a very hardworking Indie VTuber, associated with the
            Doujin Circle Rumu Rumu. She interacts with her fans frequently, and
            loves playing games such as Mahjong Souls, League of Legends, Apex
            Legends, and Valorant! She also loves watching anime, and singing
            songs.
            <br />
            <br />
            The moment she reached 600 subscribers on Youtube, she streamed for
            4 days, and managed to break 2000 subscribers in that marathon
            session! Currently, she's on a 14-day long streaming marathon to
            raise money for her rent and other living expenses.
          </div>

          <div className={styles.socials}>
            <div className={styles.buttonWrap}>
              <a
                className={styles.youtube}
                href="https://www.youtube.com/channel/UCD8i-h5iqOaysEkDnF1CQ_A"
                target="_blank"
              >
                <img src="/youtube.png" /> YouTube
              </a>
            </div>
            <div className={styles.buttonWrap}>
              <a
                className={styles.twitter}
                href="https://twitter.com/neko_neneka"
                target="_blank"
              >
                <img src="/twitter.svg" /> Twitter
              </a>
            </div>
            <div className={styles.buttonWrap}>
              <a
                className={styles.twitch}
                href="https://www.twitch.tv/neko_neneka"
                target="_blank"
              >
                <img src="/twitch.svg" /> Twitch
              </a>
            </div>
            <div className={styles.buttonWrap}>
              <a
                className={styles.fanbox}
                href="https://neko-neneka.fanbox.cc/"
                target="_blank"
              >
                Fanbox
              </a>
            </div>
            <div className={styles.buttonWrap}>
              <a
                className={styles.marshmallow}
                href="https://marshmallow-qa.com/neko_neneka"
                target="_blank"
              >
                <img src="/marshmallow.png" /> Marshmallow
              </a>
            </div>
          </div>
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
