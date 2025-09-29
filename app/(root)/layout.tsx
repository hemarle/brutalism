import MobileLayout from "@/components/layout/MobileLayout";
import Navbar from "@/components/layout/navbar";
import Sidebar from "@/components/layout/sidebar";
// import MobileLayout from "@/components/layout/MobileLayout";



export default function AuthenticatedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased `}
      >
        {/* Mobile Layout */}
        <div className="block md:hidden">
          <MobileLayout>
            {children}
          </MobileLayout>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex w-full bg-gray-50">
          <div className="flex-0 max-w-64">
            <Sidebar/>
          </div>
          <div className="flex-1 ">
            <div className="  ">
              <Navbar/>
              <hr />
            </div>
            <div className="p-4">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
