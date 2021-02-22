import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import styles from "./flipCard.module.scss";
import Tilt from "react-tilt";

interface FlipCardProps {
  author: string;
  jp: string;
  en: string;
  flipDefault: boolean;
}

export const FlipCard: React.FC<FlipCardProps> = ({
  en,
  jp,
  author,
  flipDefault,
}) => {
  const [flipped, setFlipped] = useState(flipDefault);

  const isOneSided = !(en && jp);

  return (
    <Tilt options={{ max: 0, perspective: 1000, scale: 1.1 }}>
      <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
        <div
          className={flipDefault ? styles.back : styles.front}
          onClick={() => {
            if (!isOneSided) setFlipped(!flipped);
          }}
        >
          {isOneSided ? (en ? en : jp) : flipDefault ? en : jp}
          <p className={styles.author}>- {author}</p>
        </div>
        <div
          className={flipDefault ? styles.front : styles.back}
          onClick={() => {
            if (!isOneSided) setFlipped(!flipped);
          }}
        >
          {flipDefault ? jp : en}
          <p className={styles.author}>- {author}</p>
        </div>
      </ReactCardFlip>
    </Tilt>
  );
};
