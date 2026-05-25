import "./globals.css";

export const metadata = {
  title: "Wedding Invitation - Fira & Luqman",
  description: "You are invited to our wedding celebration.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" data-theme="dark-elegance">
      <body>{children}</body>
    </html>
  );
}
