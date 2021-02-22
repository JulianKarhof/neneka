import React, { useState } from "react";
import { FlipCard } from "../../components/flipCard/flipCard";
import messages from "../../data/messages.json";
import { Button, Switch } from "@material-ui/core";
import styles from "./index.module.scss";

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
  );
};

export default GoodBye;
