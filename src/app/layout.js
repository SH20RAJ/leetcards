import "./globals.css";

export const metadata = {
  title: "ReadmeCards || Create ",
  description: "Get Cards ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
