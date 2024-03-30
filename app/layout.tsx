import Navigation from "./_components/navigation";
import "./styles/global.css";

export const metadata = {
  title: {
    template: "%s | NEW YORK TIMES BEST SELLERS",
    default: "Loading...",
  },
  description: "뉴욕 타임즈 베스트 셀러 목록을 보여주는 웹사이트",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
