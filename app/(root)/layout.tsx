import Navbar from "@/components/layout/navbar";
import Sidebar from "@/components/layout/sidebar";



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
        <div className="flex w-full bg-gray-50">

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
