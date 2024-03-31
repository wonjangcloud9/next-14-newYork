import styles from "../styles/벚꽃.module.css";

export default function 벚꽃() {
  const array30 = Array.from({ length: 30 }, (_, index) => index + 1);
  return (
    <>
      {array30.map((_, index: number) => (
        <div
          key={index}
          className={`${styles.cherryBlossom}`}
          style={{
            animationDuration: `${Math.random() * 5 + 3}s`,
            animationDelay: `${Math.random() * 5}s`,
            left: `${Math.random() * 100}%`,
          }}
        ></div>
      ))}
    </>
  );
}
