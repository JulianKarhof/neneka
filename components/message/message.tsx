import React from "react";

interface MessageProps {
  isEn: boolean;
}

export const Message: React.FC<MessageProps> = ({ isEn }) => {
  return isEn ? (
    <>
      <p>To Neko Neneka</p>
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
        you. A home you can always feel warm in. Because everything will be gone
        when you come back, we hope that these messages will at least remain
        somewhere in your heart, just like you will always remain in ours.
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
        future, no matter which form you may take. There will always, always be
        people who support you here, and who love everything about you, so
        please come back whenever you want.
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
      <p>子狐ねねか様へ</p>
      <br />
      <p>卒業おめでとうございます。</p>
      <br />
      <p>
        この卒業の発表は、多くの方にとって突然のことだったかもしれませんが、どこに居ても、どんな姿になろうとも、今後の活躍が上手く行くよう願っています。
      </p>
      <br />
      <p>
        デビュー時からのファンも、最後の14日間配信の中でファンになった人も、ここに居る全員はねねかの事が凄く大好きだから今まで精一杯応援してきました。なので、皆からのこのメッセージに込められた想いがちゃんと伝われば幸いです。
      </p>
      <br />
      <p>
        この2週間は忘れ難い思い出でいっぱいでした。例えこの素敵な配信のアーカイブが残らずとも、届けられたプレゼント、共有された切り抜き動画、配信に来てくれたVtuberのお友達、そして、毎日重ねてきた思い出はずっと永遠に皆の心の中に刻まれると思います。どうか今後もこうして応援を続けさせてください。ねねかが私達に与えてくれたものは一生忘れません。
      </p>
      <br />
      <p>
        皆のサポートがねねかの役に立ち、そしてそのお陰で生活が楽になっているのであれば何よりです。私達の唯一の願いはねねかが幸せになる事です。だから、皆のサポートでこれからの毎日のあなたが少しでもより笑顔になってくれれば非常に嬉しく思います。
      </p>
      <br />
      <p>
        ねねかと同じように、このサーバーも変わります。もうねねかのファンサーバーではなく、ねねかの新たな人生のファンサーバーになります。なのでこのdiscordチャンネルは全て消え、新しい「あなた」のために、いつもあなたを温められるような新しい居場所として、discordチャンネルを建てます。あなたが帰ってきた時、今ここにある全てが消えて無くなっていても、このメッセージだけは心のどこがに残してもらえると嬉しいです。私達の心の中にもいつもあなたが居てくれますように。
      </p>
      <br />
      <p>
        生まれてきてくれてありがとう。
        <br />
        毎日一生懸命頑張ってくれてありがとう。
        <br />
        いっぱい思い出をくれてありがとう。
        <br />
        子狐ねねかになってくれてありがとう。
      </p>
      <br />
      <p>
        約束します。どんな姿になっても、これからもこのサーバーはいつでもあなたを温かく大歓迎します。ここではいつも応援してくれる人が居ます、あなたの全てを大好きな人が。
        <br />
        だからいつでも帰って来てください。
      </p>
      <br />
      <p>この新しい人生がさらに素敵な未来への第一歩となりますように。</p> <br />
      <p>またいつか会いましょう。</p>
      <p>
        愛を込めて、
        <br />
        ファンサーバーの全員より
      </p>
    </>
  );
};
