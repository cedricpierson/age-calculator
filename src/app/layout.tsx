import "./globals.css";

export const metadata = {
  title: "Age Calculator",
  description: "Calculating age",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
