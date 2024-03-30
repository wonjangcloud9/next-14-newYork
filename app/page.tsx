import BestSeller from "./_components/bestSeller";
import { GET_BOOKS_API_URL } from "./constants";
import styles from "./styles/best-sellers.module.css";

export default async function BestSellerList() {
  const bestSellerList = await getBestSellerList();

  return (
    <div className={styles.container}>
      {bestSellerList["results"].map((bestSeller: BestSellerListProps) => (
        <BestSeller
          key={bestSeller["list_name_encoded"]}
          bestSellerName={bestSeller["list_name_encoded"]}
        />
      ))}
    </div>
  );
}

export const metadata = {
  title: "홈 | 뉴욕 타임즈 베스트 셀러",
};

interface BestSellerListProps {
  list_name: string;
  display_name: string;
  list_name_encoded: string;
  oldest_published_date: string;
  newest_published_date: string;
  updated: string;
}

async function getBestSellerList() {
  const response = await fetch(GET_BOOKS_API_URL);
  const json = await response.json();
  return json;
}

export function BestSellerListSkeleton() {
  const array10 = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <div className={styles.container}>
      {array10.map((index: number) => (
        <div key={index} className={styles.cardSkeleton}></div>
      ))}
    </div>
  );
}
