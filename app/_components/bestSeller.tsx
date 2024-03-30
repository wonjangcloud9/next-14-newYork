import styles from "../styles/best-seller.module.css";

export default function BestSeller({ bestSellerName }: BestSellerProps) {
  return <div className={styles.card}>{bestSellerName}</div>;
}

interface BestSellerProps {
  bestSellerName: string;
}
