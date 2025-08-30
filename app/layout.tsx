// import './globals.css'
// import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'

// // using clerk for user auth
// import {ClerkProvider,   SignInButton,
//   SignedIn,
//   SignedOut,
//   UserButton} from '@clerk/nextjs'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'vAI',
//   description: 'AI ChatBot',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (

//     <ClerkProvider>
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//     </ClerkProvider>
//   )
// }

// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "AI SaaS Platform",
//   description: "AI-powered SaaS platform",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         {children}
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";  // ← This import is CRUCIAL

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI SaaS Platform",
  description: "AI-powered SaaS platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
