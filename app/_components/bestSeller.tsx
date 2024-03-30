"use client";
import { useRouter } from "next/navigation";
import styles from "../styles/best-seller.module.css";
import { FaArrowCircleRight } from "react-icons/fa";

export default function BestSeller({ bestSellerName }: BestSellerProps) {
  const router = useRouter();

  const onClick = () => {
    router.push(`/list/${bestSellerName}`);
  };

  return (
    <div className={styles.card} onClick={onClick}>
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
