import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import styles from "./flipCard.module.scss";
import Tilt from "react-tilt";

interface FlipCardProps {
  id: string;
  author: string;
  jp: string;
  en: string;
}

export const FlipCard: React.FC<FlipCardProps> = ({ id, en, jp, author }) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <Tilt options={{ max: 10, perspective: 1000, scale: 1.1 }}>
      <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
        <div className={styles.front} onClick={() => setFlipped(!flipped)}>
          {en}
        </div>
        <div className={styles.back} onClick={() => setFlipped(!flipped)}>
          {jp}
        </div>
      </ReactCardFlip>
    </Tilt>
  );
};
