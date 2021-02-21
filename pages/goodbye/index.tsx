import React from "react";
import { FlipCard } from "../../components/flipCard/flipCard";
import styles from "./index.module.scss";
import messages from "../../data/messages.json";

const GoodBye: React.FC = () => {
  return (
    <div className={styles.bg}>
      {messages.map((message) => {
        return (
          <FlipCard
            id={message.id}
            author={message.author}
            jp={message.content.jp}
            en={message.content.en}
          />
        );
      })}
    </div>
  );
};

export default GoodBye;
