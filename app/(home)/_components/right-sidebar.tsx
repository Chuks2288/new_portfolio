// import { ModeToggle } from "@/components/toggle-theme"
// import { SideMenu } from "./side-menu"

// export const RightSidebar = () => {
//     return (
//         <div className="md:w-[90px] w-[60px] h-[1330px] py-6 px-4 sm:flex hidden flex-col items-center space-y-40 bg-white dark:bg-[#0F172A]">
//             <ModeToggle />
//             <SideMenu />
//         </div>
//     )
// }



import { ModeToggle } from "@/components/toggle-theme";
import { SideMenu } from "./side-menu";

export const RightSidebar = () => {
    return (
        <aside
            className="hidden sm:flex fixed top-0 right-0 h-screen w-[60px] md:w-[90px] flex-col items-center space-y-40 bg-white dark:bg-[#0F172A] px-2 md:px-4 py-6 z-10"
        >
            <ModeToggle />
            <SideMenu />
        </aside>
    );
};
