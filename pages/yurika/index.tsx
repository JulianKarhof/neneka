import { MemberPage } from "../../components/memberPage/memberPage";
import styles from "./yurika.module.scss";

export default function Yurika() {
  return (
    <MemberPage
      name={["マツリカ", "ユリカ"]}
      intro="Neneka is a very hardworking Indie VTuber, associated with the
      Doujin Circle Rumu Rumu. She interacts with her fans frequently, and
      loves playing games such as Mahjong Souls, League of Legends, Apex
      Legends, and Valorant! She also loves watching anime, and singing
      songs.
      The moment she reached 600 subscribers on Youtube, she streamed for
      4 days, and managed to break 2000 subscribers in that marathon
      session! Currently, she's on a 14-day long streaming marathon to
      raise money for her rent and other living expenses."
      avatar="/yurika.png"
      styles={styles}
      socials={[
        {
          title: "YouTube",
          color: "#ff0000",
          icon: "./youtube.png",
          url: "https://www.youtube.com/channel/UCD8i-h5iqOaysEkDnF1CQ_A",
        },
        {
          title: "Twitter",
          color: "#1da1f2",
          icon: "./twitter.svg",
          url: "https://twitter.com/neko_neneka",
        },
        {
          title: "Reddit",
          color: "#FF5700",
          icon: "./reddit.svg",
          url: "",
        },
        {
          title: "Twitch",
          color: "#6441a5",
          icon: "./twitch.svg",
          url: "https://www.twitch.tv/neko_neneka",
        },
        {
          title: "Fanbox",
          color: "#2c333c",
          icon: "",
          url: "https://neko-neneka.fanbox.cc/",
        },
        {
          title: "Marshmallow",
          color: "#ffae8e",
          icon: "./marshmallow.png",
          url: "https://marshmallow-qa.com/neko_neneka",
        },
      ]}
    />
  );
}
