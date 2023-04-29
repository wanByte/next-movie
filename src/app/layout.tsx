import "@/app/globals.css";
import "swiper/css/bundle";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-dark">
        <div className="p-4">{children}</div>
      </body>
    </html>
  );
}
