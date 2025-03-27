// app/layout.js
import "./globals.css";

export const metadata = {
  title: "My Signup/Login",
  description: "A simple Next.js + Tailwind signup/login example",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
