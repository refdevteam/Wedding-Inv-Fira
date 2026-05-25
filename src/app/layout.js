import "./globals.css";

export const metadata = {
  title: "The Wedding of Fira & Luqman",
  description: "Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i untuk hadir di hari bahagia kami.",
  openGraph: {
    title: "The Wedding of Fira & Luqman",
    description: "Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i untuk hadir di hari bahagia kami.",
    url: "https://wedding-of-fira-luqman.vercel.app",
    siteName: "Wedding Invitation - Fira & Luqman",
    images: [
      {
        url: "https://wedding-of-fira-luqman.vercel.app/images/hero-1.jpeg",
        width: 1200,
        height: 630,
        alt: "Fira & Luqman Pre-wedding",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Wedding of Fira & Luqman",
    description: "Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i untuk hadir di hari bahagia kami.",
    images: ["https://wedding-of-fira-luqman.vercel.app/images/hero-1.jpeg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" data-theme="dark-elegance">
      <body>{children}</body>
    </html>
  );
}
