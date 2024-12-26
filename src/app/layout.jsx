import "@/styles/globals.css";
import "@/styles/variable.css";
import Navigation from '@/component/Navigation';

export const metadata = {
  title: {
    template: "%s | Ditto",
    default: "Loadnig..."
  },
  description: '시험 감독 인공지능 서비스',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  );
}
