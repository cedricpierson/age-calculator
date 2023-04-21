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
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
