import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />

      <div className="container w-full max-w-[80vw] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-[2.5fr_1fr] gap-8">
          {children}
          <div className="mt-8 md:mt-0 md:sticky top-10 h-fit md:block">
            <Sidebar />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
