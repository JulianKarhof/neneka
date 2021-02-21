import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    setFlipped(flipDefault);
  }, [flipDefault, setFlipped]);
  return (
    <Tilt options={{ max: 0, perspective: 1000, scale: 1.1 }}>
      <ReactCardFlip
        isFlipped={flipped}
        flipDirection="horizontal"
        containerStyle={{ backfaceVisibility: "hidden" }}
      >
        <div className={styles.front} onClick={() => setFlipped(!flipped)}>
          {jp}
        </div>
        <div className={styles.back} onClick={() => setFlipped(!flipped)}>
          {en}
        </div>
      </ReactCardFlip>
    </Tilt>
  );
};
