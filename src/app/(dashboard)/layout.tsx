import Menu from "@/components/Menu"
import Navbar from "@/components/Navbar"
import Image from "next/image"
import Link from "next/link"

export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex">
      {/* left */}
      <div className="w-[14%] md:w-[8%] lg:w-[17%] xl:w-[14%] p-4">
        <Link href="/" className="flex justify-center items-center lg:justify-start gap-2">
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block font-bold">ManageSchool</span>
        </Link>
        <Menu />
      </div>
      {/* right */}
      <div className="bg-[#F7F8FA] w-[86%] md:w-[92%] lg:w-[83%] xl:w-[86%] flex flex-col min-h-[900px]">
        <Navbar />
        {children}
      </div>
    </div>
  )
}
