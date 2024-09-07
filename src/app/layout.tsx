import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Polyglotter",
  description: "For multilingual capabilities, emphasizing global communication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <script src="./node_modules/preline/dist/preline.js"></script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       {/* <Navigation/> */}
        <main className="min-h-screen flex flex-col bg-gray-800">
 
        {children}
        </main>
      </body>
    </html>
  );
}
