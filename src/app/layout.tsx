import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Greater LA Area Mensa",
  description: "Where brilliance belongs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
