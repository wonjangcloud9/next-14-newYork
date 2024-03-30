import styles from "../styles/best-seller.module.css";
import { FaArrowCircleRight } from "react-icons/fa";

export default function BestSeller({ bestSellerName }: BestSellerProps) {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        {bestSellerName}
        <FaArrowCircleRight className={styles.arrowIcon} size={16} />
      </div>
    </div>
  );
}

interface BestSellerProps {
  bestSellerName: string;
}
