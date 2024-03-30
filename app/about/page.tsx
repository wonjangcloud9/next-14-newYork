import styles from "../styles/about.module.css";

export const metadata = {
  title: "소개",
};

export default function About() {
  return (
    <section className={styles.introSection}>
      <p className={`${styles.introText} ${styles.textAnimation1}`}>
        뉴욕 타임즈 베스트셀러 목록에 오른 책들은 단순한 글자의 나열을 넘어서,
        독자들의 마음을 움직이고 삶을 변화시킬 힘을 지녔습니다.
      </p>
      <p className={`${styles.introText} ${styles.textAnimation2} `}>
        이 페이지는 그러한 책들의 세계로 여러분을 안내합니다.
      </p>
      <p className={`${styles.introText} ${styles.textAnimation3} `}>
        여기서는 베스트셀러가 된 작품들이 단지 인기 있고 많이 팔린 책들이
        아니라, 사람들의 생각과 문화에 깊은 영향을 미친 작품임을 이해할 수
        있습니다.
      </p>
      <p className={`${styles.introText} ${styles.textAnimation4} `}>
        우리는 다양한 장르에서 선정된 이 책들이 어떻게 독자들의 마음을
        사로잡았는지, 그리고 왜 수많은 사람들이 이 책들에 열광하는지 그 이유를
        탐구합니다.
      </p>
      <p className={`${styles.introText} ${styles.textAnimation5} `}>
        이곳에서는 각 책의 숨겨진 가치와 의미, 작가들의 영감과 창작 과정에 대한
        이야기를 공유합니다.
      </p>
      <p className={`${styles.introText} ${styles.textAnimation6} `}>
        또한, 이 책들이 사회와 문화에 끼친 영향력에 대해서도 깊이 있게 다룰
        것입니다.
      </p>
      <p className={`${styles.introText} ${styles.textAnimation7} `}>
        뉴욕 타임즈 베스트셀러에 오른 책들은 단순한 독서를 넘어, 삶을 이해하고
        세상을 바라보는 새로운 시각을 제공합니다.
      </p>
      <p className={`${styles.introText} ${styles.textAnimation8} `}>
        여러분이 이 페이지를 통해 새로운 영감을 받고, 삶의 다양한 면모를
        탐색하는 데 도움이 되기를 바랍니다.
      </p>
      <p className={`${styles.introText} ${styles.textAnimation9} `}>
        우리와 함께 이 특별한 여정을 시작하세요.
      </p>
    </section>
  );
}
