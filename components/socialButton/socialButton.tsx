import React from "react";
import styles from "./socialButton.module.scss";

interface SocialButtonProps {
  icon?: string;
  url: string;
  color?: string;
}

export const SocialButton: React.FC<SocialButtonProps> = ({
  icon,
  url,
  children,
  color,
}) => {
  return (
    <div className={styles.socials}>
      <div className={styles.buttonWrap}>
        <a
          className={styles.youtube}
          href={url}
          target="_blank"
          style={{ color }}
        >
          <img src={icon} /> {children}
        </a>
      </div>
    </div>
  );
};
