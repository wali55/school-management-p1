import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-end md:justify-between p-4">
      {/* Search Bar */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src="/search.png" alt="search" height={14} width={14} />
        <input type="text" placeholder="Search..." className="w-[200px] p-2 bg-transparent outline-none" />
      </div>
      {/* Icons and User */}
      <div className="flex items-center gap-6">
        <div className="bg-white rounded-full size-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="message" height={20} width={20} />
        </div>
        <div className="bg-white rounded-full size-7 flex items-center justify-center cursor-pointer relative">
          <Image src="/announcement.png" alt="message" height={20} width={20} />
          <div className="absolute size-5 flex items-center justify-center bg-purple-500 text-white rounded-full -top-3 -right-3 text-xs">1</div>
        </div>
        <div className="flex flex-col">
            <span className="text-xs leading-3 font-medium">John Doe</span>
            <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        {/* <Image src="/avatar.png" alt="avatar" width={36} height={36} className="rounded-full" /> */}
        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;

