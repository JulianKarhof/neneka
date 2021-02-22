import React, { useEffect, useState } from "react";
import { FlipCard } from "../../components/flipCard/flipCard";
import { CircularProgress, Switch } from "@material-ui/core";
import styles from "./index.module.scss";
import { Message } from "../../components/message/message";
import classNames from "classnames";
import { Octokit } from "@octokit/core";
import Particles from "react-particles-js";
import Head from "next/head";

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
  const [audio, setAudio] = useState(null);
  const [messages, setMessages] = useState<Message[]>();

  useEffect(() => {
    octokit
      .request("GET /gists/5f440dc7ed9e92f407001245ee654001")
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
        shuffleArray(messages);
        setMessages(messages);
      });

    setAudio(new Audio("/sneeze.mp3"));
  }, [setAudio]);

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
          onClick={() => audio.play()}
        />
        <p className={styles.header}>子狐ねねかの思い出</p>
        <div className={styles.switch}>
          JP
          <Switch
            checked={languageIsEn}
            onChange={(event) => setLanguageIsEn(event.target.checked)}
          />
          EN
        </div>
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
            <div className={styles.switch}>
              JP
              <Switch
                checked={languageIsEn}
                onChange={(event) => setLanguageIsEn(event.target.checked)}
              />
              EN
            </div>
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

const objectMap = (obj: Object, fn: Function) =>
  Object.fromEntries(Object.entries(obj).map(([k, v], i) => [k, fn(v, k, i)]));

function shuffleArray(array: Array<Object>) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export default GoodBye;
