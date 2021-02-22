import React, { useEffect, useState } from "react";
import { FlipCard } from "../../components/flipCard/flipCard";
import messages from "../../data/messages.json";
import { Switch } from "@material-ui/core";
import styles from "./index.module.scss";
import { Message } from "../../components/message/message";
import classNames from "classnames";

const GoodBye: React.FC = () => {
  const [languageIsEn, setLanguageIsEn] = useState(false);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    setAudio(new Audio("/sneeze.mp3"));
  }, [setAudio]);

  return (
    <div>
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
            {messages.map((message, i) => {
              return (
                <div className={styles.card} key={i}>
                  <FlipCard
                    id={message.id}
                    author={message.author.split("#")[0]}
                    jp={message.content.jp}
                    en={message.content.en}
                    flipDefault={languageIsEn}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

function shuffleArray(array: Array<Object>) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export default GoodBye;
