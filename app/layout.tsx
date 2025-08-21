import "./globals.css";
import localFont from "next/font/local";

const sf = localFont({
  src: [
    {
      path: "../public/fonts/SF-Pro-Display-Light.woff",
      weight: "200",
    },
    {
      path: "../public/fonts/SF-Pro-Display-Regular.woff",
      weight: "400",
    },
    {
      path: "../public/fonts/SF-Pro-Display-Bold.woff",
      weight: "700",
    },
  ],
  variable: "--font-base",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sf.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
