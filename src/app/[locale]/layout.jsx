import { Inter } from "next/font/google";
import "./globals.css";
import Header from '../../components/header/page'
import Footer from "../../components/footer/page"
import { NextIntlClientProvider, useMessages } from "next-intl";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};



export default function RootLayout({ children, params: { locale }, }) {

  const messages = useMessages()

  return (
    <html lang={locale}>
      <body suppressHydrationWarning={true}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header/>
          {children}
          <Footer/>
        </NextIntlClientProvider>
        </body>
    </html>
  );
}
