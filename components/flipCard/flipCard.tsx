import React, { useEffect, useState } from "react";
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
  const [unflip, setUnflip] = useState(false);

  const isOneSided = !(en && jp);

  useEffect(() => {
    setUnflip(true);
    setFlipped(false);
    setTimeout(function () {
      setUnflip(false);
    }, 100);
  }, [flipDefault]);

  return (
    <Tilt options={{ max: 0, perspective: 1000, scale: 1.1 }}>
      <ReactCardFlip
        isFlipped={flipped}
        flipDirection="horizontal"
        flipSpeedBackToFront={unflip ? 0 : 0.6}
        flipSpeedFrontToBack={unflip ? 0 : 0.6}
      >
        <div
          className={flipDefault ? styles.back : styles.front}
          onClick={() => {
            if (!isOneSided) setFlipped(!flipped);
          }}
        >
          <p className={styles.message}>
            {isOneSided ? (en ? en : jp) : flipDefault ? en : jp}
          </p>
          <p className={styles.author}>- {author}</p>
        </div>
        <div
          className={flipDefault ? styles.front : styles.back}
          onClick={() => {
            if (!isOneSided) setFlipped(!flipped);
          }}
        >
          <p className={styles.message}>{flipDefault ? jp : en}</p>
          <p className={styles.author}>- {author}</p>
        </div>
      </ReactCardFlip>
    </Tilt>
  );
};
