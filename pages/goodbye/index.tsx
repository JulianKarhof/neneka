import React, { useEffect, useState } from "react";
import { FlipCard } from "../../components/flipCard/flipCard";
import { CircularProgress, Switch } from "@material-ui/core";
import styles from "./index.module.scss";
import { Message } from "../../components/message/message";
import classNames from "classnames";
import { Octokit } from "@octokit/core";
import Particles from "react-particles-js";
import Head from "next/head";
import cookie from "js-cookie";

interface Message {
  id: string;
  nickname: string;
  content: Content;
}

interface Content {
  jp?: string;
  en?: string;
}

const octokit = new Octokit();

const GoodBye: React.FC = () => {
  const [languageIsEn, setLanguageIsEn] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement[]>();
  const [messages, setMessages] = useState<Message[]>();

  useEffect(() => {
    let seed: number;
    if (!cookie.get("seed")) {
      let arbitrary: number = getRandomArbitrary(1, 1000000);
      cookie.set("seed", arbitrary.toString());
      seed = arbitrary;
    } else seed = parseInt(cookie.get("seed"));
    octokit
      .request("GET /gists/3caa3be29ee69626545b7098f7d26d00")
      .then((res) => JSON.parse(res.data.files["neneka_messages.json"].content))
      .then((data) => {
        let messages: Message[] = [];
        for (var key in data) {
          if (data.hasOwnProperty(key)) {
            messages.push({
              id: key,
              content: data[key].content,
              nickname: data[key].nickname,
            });
          }
        }
        shuffle(messages, seed);
        setMessages(messages);
      });

    setAudio(
      [...new Array(8)].map((v, i) => new Audio(`/Sneeze_${i + 1}.mp3`))
    );
  }, [setAudio]);

  const LangSwitch = (): React.ReactElement => {
    return (
      <div className={styles.switch}>
        JP
        <Switch
          checked={languageIsEn}
          onChange={(event) => setLanguageIsEn(event.target.checked)}
        />
        EN
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>子狐ねねかの思い出</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.bg}>
        <img
          src="neneka.png"
          className={styles.neneka}
          onClick={() => audio[Math.floor(Math.random() * audio.length)].play()}
        />
        <div className={styles.headWrapper}>
          <p className={styles.header}>子狐ねねかの思い出</p>
          <p className={styles.subtitle}>Neko Neneka Memories</p>
        </div>
        <LangSwitch />
        <div className={styles.wrapper}>
          <div
            className={classNames(
              styles.message,
              languageIsEn ? styles.en : styles.jp
            )}
          >
            <Message isEn={languageIsEn} />
          </div>
          <div className={styles.feed}>
            <LangSwitch />
            <p
              className={classNames(
                styles.info,
                languageIsEn ? styles.en : styles.jp
              )}
            >
              {languageIsEn
                ? "You can click on each individual card to flip it!"
                : "カードをクリックしたら裏返すことができます!"}
            </p>
            {messages ? (
              messages.map((message) => {
                return (
                  <div className={styles.card} key={message.id}>
                    <FlipCard
                      author={message.nickname}
                      jp={message.content.jp}
                      en={message.content.en}
                      flipDefault={languageIsEn}
                    />
                  </div>
                );
              })
            ) : (
              <CircularProgress color="secondary" />
            )}
          </div>
        </div>
      </div>
      <Particles
        className={styles.particles}
        canvasClassName={styles.canvas}
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
    </>
  );
};

function shuffle(array: any[], seed: number) {
  var m = array.length,
    t,
    i;

  while (m) {
    i = Math.floor(random(seed) * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
    ++seed;
  }

  return array;
}

function random(seed: number) {
  var x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

function getRandomArbitrary(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

export default GoodBye;
