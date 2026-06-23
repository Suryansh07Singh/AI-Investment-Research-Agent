import "./globals.css";
export const metadata = {
  title: "AI Investment Research Agent",
  description: "Investment analysis using Gemini AI",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}