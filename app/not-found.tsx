import styles from "./styles/not-found.module.css";

export const metadata = {
  title: "Not found",
};

export default function NotFound() {
  return (
    <div className={styles.notFoundContainer}>
      <h2>404 - Page Not Found</h2>
      <p>찾으려는 페이지가 없습니다.</p>
      <a href="/">돌아가기</a>
    </div>
  );
}
