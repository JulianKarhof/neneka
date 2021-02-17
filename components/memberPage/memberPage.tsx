import React from "react";
import Particles from "react-particles-js";
import Head from "next/head";
import { SocialButton } from "../socialButton/socialButton";

interface MemberPageProps {
  name: string[];
  intro: string;
  avatar: string;
  socials: MemberPageSocialLink[];
  styles: {
    readonly [key: string]: string;
  };
}

interface MemberPageSocialLink {
  title: string;
  url: string;
  color: string;
  icon: string;
}

export const MemberPage: React.FC<MemberPageProps> = ({
  name,
  intro,
  avatar,
  socials,
  styles,
}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{name.join("")} Fan Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src={avatar} className={styles.avatar} />
        <h1 className={styles.title}>
          Welcome to{" "}
          <a href="http://www.meish.me/i/neko_neneka">
            {name[name.length - 1]}'s
          </a>{" "}
          Page!
        </h1>

        <div className={styles.skew}>
          <div className={styles.description}>
            <p>Intro</p>
            {intro}
          </div>
          <div className={styles.socials}>
            {socials.map((social) => (
              <SocialButton
                url={social.url}
                icon={social.icon}
                color={social.color}
              >
                {social.title}
              </SocialButton>
            ))}
          </div>
        </div>
      </main>
      <Particles
        className={styles.particles}
        params={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 1,
              direction: "top",
              out_mode: "out",
            },
          },
        }}
      />
    </div>
  );
};
