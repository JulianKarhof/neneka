import React, { useState } from "react";
import { FlipCard } from "../../components/flipCard/flipCard";
import styles from "./index.module.scss";
import messages from "../../data/messages.json";
import { Switch } from "@material-ui/core";

const GoodBye: React.FC = () => {
  const [languageIsEn, setLanguageIsEn] = useState(false);

  return (
    <div className={styles.bg}>
      <div className={styles.switch}>
        JP{" "}
        <Switch
          checked={languageIsEn}
          onChange={(event) => setLanguageIsEn(event.target.checked)}
        />
        EN
      </div>
      {messages.map((message) => {
        return (
          <FlipCard
            id={message.id}
            author={message.author}
            jp={message.content.jp}
            en={message.content.en}
            flipDefault={languageIsEn}
          />
        );
      })}
    </div>
  );
};

export default GoodBye;
