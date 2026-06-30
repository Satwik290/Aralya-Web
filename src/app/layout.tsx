import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aralya – Fresh Flower Delivery | Daily Puja Plan",
  description:
    "Preserve Your Family's Morning Rituals. Fresh flowers delivered before sunrise, every day, without fail. Subscribe to Aralya's daily puja plan via WhatsApp.",
  keywords: "fresh flowers, puja flowers, daily delivery, morning rituals, India",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cream text-dark antialiased flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
}
