import { assets } from "@/Assets/assets";
import Sidebar from "@/Components/AdminComponents/Sidebar";
import Image from "next/image";
import { Toaster } from 'react-hot-toast';


export default function Layout({ children }) {
    return (
        <div>
            <div className="flex">
                <Toaster
                    position="top-right"
                    reverseOrder={false}
                />
                <Sidebar />
                <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b-1">
                        <h3 className="font-medium">Admin Panel</h3>
                        <Image src={assets.profile_icon} width={40} alt="profile" />
                    </div>
                    {children}
                </div>
            </div>

        </div>
    );
}