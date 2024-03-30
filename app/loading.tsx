import styles from "./styles/best-sellers.module.css";

export default function Loading() {
  return <BestSellerListSkeleton />;
}

function BestSellerListSkeleton() {
  const array10 = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <div className={styles.container}>
      {array10.map((index: number) => (
        <div key={index} className={styles.cardSkeleton}></div>
      ))}
    </div>
  );
}
