import "./globals.css";
import Header from "./components/header";


export const metadata = {
  title: "Sales Book",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        
      </body>
    </html>
  );
}
