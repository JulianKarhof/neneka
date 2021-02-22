import React, { useState } from "react";
import { FlipCard } from "../../components/flipCard/flipCard";
import messages from "../../data/messages.json";
import { Switch } from "@material-ui/core";
import styles from "./index.module.scss";
import StackGrid from "react-stack-grid";
import { Message } from "./message";

const GoodBye: React.FC = () => {
  const [languageIsEn, setLanguageIsEn] = useState(false);

  return (
    <div className={styles.bg}>
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
        <div className={styles.message}>
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
          <p className={styles.info}>
            {languageIsEn
              ? "You can click on each individual card to flip it!"
              : "カードをクリックしたら裏返すことができます!"}
          </p>
          {messages.map((message) => {
            return (
              <div className={styles.card}>
                <FlipCard
                  id={message.id}
                  author={message.author}
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
  );
};

function shuffleArray(array: Array<Object>) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export default GoodBye;
