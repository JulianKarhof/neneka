import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import styles from "./flipCard.module.scss";
import Tilt from "react-tilt";

interface FlipCardProps {
  id: string;
  author: string;
  jp: string;
  en: string;
  flipDefault: boolean;
}

export const FlipCard: React.FC<FlipCardProps> = ({
  id,
  en,
  jp,
  author,
  flipDefault,
}) => {
  const [flipped, setFlipped] = useState(flipDefault);

  return (
    <Tilt options={{ max: 0, perspective: 1000, scale: 1.1 }}>
      <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
        <div
          className={flipDefault ? styles.back : styles.front}
          onClick={() => setFlipped(!flipped)}
        >
          {flipDefault ? en : jp}
        </div>
        <div
          className={flipDefault ? styles.front : styles.back}
          onClick={() => setFlipped(!flipped)}
        >
          {flipDefault ? jp : en}
        </div>
      </ReactCardFlip>
    </Tilt>
  );
};
