import { GET_BOOK_API_URL } from "../../constants";
import styles from "../../styles/books.module.css";

export const metadata = {
  title: "책 목록",
};

export default async function BookList({
  params,
  searchParams: {},
}: BookListProps) {
  const bookList = await getBookList(params.id);

  return (
    <div className={styles.bookListContainer}>
      {bookList["results"]["books"].map((book: Book) => (
        <div className={styles.bookCard} key={book.primary_isbn13}>
          <img
            src={book.book_image}
            alt={book.title}
            className={styles.bookImage}
          />
          <h2 className={styles.bookTitle}>{book.title}</h2>
          <h3 className={styles.bookAuthor}>{book.author}</h3>
          <a href={book.amazon_product_url} className={styles.buyLink}>
            구매하기
          </a>
        </div>
      ))}
    </div>
  );
}

interface BookListProps {
  params: {
    id: string;
  };
  searchParams: {};
}

interface Book {
  rank: number;
  rank_last_week: number;
  weeks_on_list: number;
  asterisk: number;
  dagger: number;
  primary_isbn10: string;
  primary_isbn13: string;
  publisher: string;
  description: string;
  price: string;
  title: string;
  author: string;
  contributor: string;
  contributor_note: string;
  book_image: string;
  book_image_width: number;
  book_image_height: number;
  amazon_product_url: string;
  age_group: string;
  book_review_link: string;
  first_chapter_link: string;
  sunday_review_link: string;
  article_chapter_link: string;
  isbns: Isbn[];
  buy_links: Buylink[];
  book_uri: string;
}

interface Buylink {
  name: string;
  url: string;
}
interface Isbn {
  isbn10: string;
  isbn13: string;
}

async function getBookList(id: string) {
  const response = await fetch(`${GET_BOOK_API_URL}${id}`);
  const json = await response.json();
  return json;
}

export function BookListSkeleton() {
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
