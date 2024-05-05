import { FolderKanban, Home, UserRound } from "lucide-react";

const SidebarLink = [
    {
        url:"/",
        icons:<Home className='ml-4 text-'/> ,
        title:"Dashboard"
    },
    {
        url:"/project",
        icons:<FolderKanban className='ml-4 text-green-500'/> ,
        title:"Project"
    }, 
    {
        url:"/profile",
        icons:<UserRound className='ml-4 text-'/> ,
        title:"Profile"
    },

]

export {SidebarLink}