import style from "../styles/Notice.module.css";
import { RiPushpinLine } from "react-icons/ri";
import Link from "next/link";

function Notice() {
  return (
    <div className={style.cont}>
      <div className={style.header}>
        <h1>Updates</h1>
        <RiPushpinLine size={35} />
      </div>

        <div className={style.cardNotice}>
          <h2>New Fellows Announced</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed leo
            in justo aliquam aliquam. Nam nunc elit, sagittis sed commodo sed,
            malesuada vitae quam. Morbi rhoncus tortor eget sem ultrices
            finibus. Maecenas et ipsum ante. Fusce faucibus lectus ex, eget
            bibendum mi
          </p>
          <Link href="/blog">Click Here for More</Link>
        </div>

      <div className={style.cardNotice}>
        <h2>New Blog Post</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed leo
          in justo aliquam aliquam. Nam nunc elit, sagittis sed commodo sed,
          malesuada vitae quam. Morbi rhoncus tortor eget sem ultrices finibus.
          Maecenas et ipsum ante. Fusce faucibus Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed sed leo in justo aliquam aliquam. Nam
          nunc elit, sagittis sed commodo sed, malesuada vitae quam. Morbi
          rhoncus tortor eget sem ultrices finibus. Maecenas et ipsum ante.
          Fusce faucibus Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Sed sed leo in justo aliquam aliquam. Nam nunc elit, sagittis
          sed commodo sed, malesuada vitae quam. Morbi rhoncus tortor eget sem
          ultrices finibus. Maecenas et ipsum ante. Fusce faucibus
        </p>
      </div>
      <div className={style.cardAd}>
        <h2>Sponsor Name</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed leo
          in justo aliquam aliquam. Nam nunc elit, sagittis
        </p>
      </div>
    </div>
  );
}

export default Notice;
