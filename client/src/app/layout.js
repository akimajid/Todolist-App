import Navbar from "../components/Navbar";
import "../app/globals.css";

export const metadata = {
  title: "Todo App",
  description: "A simple todo app with authentication",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="container mx-auto mt-10">{children}</div>
      </body>
    </html>
  );
}
