import styles from "../../styles/books.module.css";

export default function Loading() {
  return <BookListSkeleton />;
}

function BookListSkeleton() {
  const array10 = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <div className={styles.bookListContainer}>
      {array10.map((index: number) => (
        <div key={index} className={styles.bookCardSkeleton}>
          <div className={styles.cardContentSkeletonImage}></div>
          <div className={styles.cardContentSkeleton}></div>
        </div>
      ))}
    </div>
  );
}
