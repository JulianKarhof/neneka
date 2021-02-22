import React from "react";

interface MessageProps {
  isEn: boolean;
}

export const Message: React.FC<MessageProps> = ({ isEn }) => {
  return isEn ? (
    <>
      <p>To Neneka</p>
      <br />

      <p>Congratulations on your graduation.</p>
      <br />

      <p>
        This announcement may have been sudden to many of us, but we want to
        wish you the best in the future, wherever you may go, and whoever you
        may become.
      </p>
      <br />

      <p>
        Whether they have been your fan since the start, or whether they only
        found out about you from your 14 day stream, every person here is here
        because they fell in love with Neko Neneka and wanted to support her as
        best as they could. So we hope these messages from everyone will convey
        those emotions as best as possible.
      </p>
      <br />

      <p>
        These past two weeks were full of moments we will never forget. Even if
        there is no archive of this incredible stream, all the gifts people
        sent, all the clips that were shared, all the vtuber friends who came
        here, and all the memories that were made everyday will be engraved in
        our hearts forever. We hope that in the future you&rsquo;ll allow us to
        continue supporting you with all that we&rsquo;ve got, because no one
        here will ever forget about you and what you gave us.
      </p>
      <br />

      <p>
        We hope that all the support we managed to provide was of help to you,
        and that you can live more comfortably in the future thanks to it. Our
        sole wish is for you to be happy, so if you can smile even just a bit
        more everyday thanks to everyone&rsquo;s support, we will be more than
        grateful.
      </p>
      <br />

      <p>
        Just like Neneka, this server too will change. It won&rsquo;t be the
        Neneka fan server anymore, but a server for your new life. All these
        channels will disappear so they can give birth to a new home for a new
        you. Because everything will be gone, we hope that these messages will
        at least remain somewhere in your heart, just like you will always
        remain in ours.
      </p>
      <br />

      <p>
        Thank you for being born. <br />
        Thank you for working so hard day in and day out. <br />
        Thank you for sharing so many moments of your life with us.
        <br />
        Thank you for becoming Neko Neneka.
      </p>
      <br />

      <p>
        We promise that our server will always welcome you with open arms in the
        future, no matter which form you may take. You will always, always find
        support here, so please come back whenever you want.
      </p>
      <br />

      <p>
        May your new life be the first step into an even more wonderful future.
      </p>
      <br />

      <p>See you again one day.</p>
      <br />

      <p>
        All the love, <br />
        The entire Neneka Fan Server
      </p>
    </>
  ) : (
    <>
      <p>ネネカへ</p>
      <br />

      <p>この度はご卒業おめでとうございます。</p>
      <br />

      <p>
        突然の発表だったかもしれませんが、これから先、どこへ行くにしても、誰になるにしても、皆さんのご健闘をお祈りしています。
      </p>
      <br />

      <p>
        最初からファンだった人も、14日のストリームでしか知らなかった人も、ここにいる人たちはみんな猫ねねかを好きになって、精一杯応援したいと思ったからこそ、ここにいるんです。だから、この皆さんからのメッセージで、その気持ちが少しでも伝わればいいなと思っています。
      </p>
      <br />

      <p>
        この2週間は忘れられない瞬間がたくさんありました。この素晴らしいストリームのアーカイブがなくても、みんなが送ってくれたプレゼント、共有されたクリップ、ここに来てくれたVtuberの友達、そして毎日の思い出は永遠に私たちの心に刻まれていくでしょう。ここにいる誰もが、私たちに与えてくれたものを忘れることはないでしょうから、これからも全力で応援させてください。
      </p>
      <br />

      <p>
        私たちができる限りのサポートが皆様のお役に立てたならば、そのお陰でこれからの人生がより快適に過ごせるようになることを願っています。私たちの唯一の願いは、皆様に幸せになっていただくことですので、皆様のご支援のおかげで毎日少しでも笑顔になっていただければ、それ以上の感謝の気持ちでいっぱいです。
      </p>
      <br />

      <p>
        ネネカと同じように、このサーバーも変わります。ネネカのファンサーバーではなく、あなたの新生活のためのサーバーになります。全てのチャンネルが消えて、新しいあなたのための新しいホームが誕生します。すべてが消えてしまうからこそ、このメッセージが少なくともあなたの心のどこかに残っていることを願っています。
      </p>
      <br />

      <p>
        生まれてきてくれてありがとう。
        <br />
        毎日一生懸命働いてくれてありがとう。
        <br />
        たくさんの人生の瞬間を私たちと共有してくれてありがとう。
        <br />
        ねこねかになってくれてありがとう。
      </p>
      <br />

      <p>
        これからも、どんな形であっても、私たちのサーバーはあなたを心を込めてお迎えすることをお約束します。いつでも、いつでも、いつでも、ここでサポートが受けられますので、いつでも戻ってきてくださいね。
      </p>
      <br />

      <p>あなたの新生活が、さらに素敵な未来への第一歩となりますように。</p>
      <br />

      <p>またいつかお会いしましょう。</p>
      <br />

      <p>
        愛を込めて。
        <br />
        ネネカファンサーバー全体
      </p>
    </>
  );
};
