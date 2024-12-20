import { TSideBarItem, TSidebarUserPath } from "@/types";
import { NavLink } from "react-router-dom";


export const sidebarItemsGenerator = (items: TSidebarUserPath[], role:string) => {
    const sidebarItems = items.reduce((acc: TSideBarItem[], item) => {
        if(item.path && item.name){
            acc.push({
                key: item.name, 
                label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
                icon: item.icons,
            })
        }
    
        if(item.children){
            const arr: TSideBarItem[] = [];
            item.children.forEach(child => {
                if(child.name){
                    return arr.push({
                        key: child.name, 
                        label: <NavLink to={`/${role}/${item.name}/${child.path}`}>{child.name}</NavLink>,
                    })
                }
            })
            acc.push({
                key: item.name, 
                label: item.name,
                icon: item.icons,
                children: arr,
            })
        }
        return acc;
    },[]);

    return sidebarItems;
}