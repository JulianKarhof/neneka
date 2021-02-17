import Head from "next/head";
import styles from "./index.module.scss";
import Particles from "react-particles-js";
import { SocialButton } from "../components/socialButton/socialButton";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>子狐ねねか Fan Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>
        Welcome to <a href="http://www.meish.me/i/neko_neneka">ねねか's</a>{" "}
        Page!
      </h1>

      <img src="/nene.png" className={styles.nene} />

      <div className={styles.skew}>
        <div className={styles.description}>
          <p>Introduction</p>
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

        <div className={styles.socials}>
          <SocialButton
            url="https://www.youtube.com/channel/UCD8i-h5iqOaysEkDnF1CQ_A"
            icon="/youtube.png"
            color="#ff0000"
          >
            YouTube
          </SocialButton>
          <SocialButton
            url="https://twitter.com/neko_neneka"
            icon="/twitter.svg"
            color="#1da1f2"
          >
            Twitter
          </SocialButton>
          <SocialButton
            url="https://www.reddit.com/user/neko_neneka/"
            icon="/reddit.svg"
            color="#FF5700"
          >
            Reddit
          </SocialButton>
          <SocialButton
            url="https://www.twitch.tv/neko_neneka"
            icon="/twitch.svg"
            color="#6441a5"
          >
            Twitch
          </SocialButton>
          <SocialButton url="https://neko-neneka.fanbox.cc/" color="#2c333c">
            Fanbox
          </SocialButton>
          <SocialButton
            url="https://marshmallow-qa.com/neko_neneka"
            icon="/marshmallow.png"
            color="#ffae8e"
          >
            Marshmallow
          </SocialButton>
        </div>
      </div>
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
