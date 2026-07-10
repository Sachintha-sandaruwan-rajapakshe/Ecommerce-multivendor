import { Divider, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

interface menuItem {
    name: string,
    path: string,
    icon: any,
    activeIcon: any
}

interface DrawerListProps {
    menu: menuItem[],
    menu2: menuItem[],
    toggleDrower: () => void
}

const DrawerList = ({ menu, menu2, toggleDrower }: DrawerListProps) => {

    const locarion = useLocation();
    const navigate = useNavigate();

   return (
    <div className="">
        <div className="flex flex-col w-[300px] min-h-[90vh] border-gray-300 border-r py-5">

            <div className="flex-1 overflow-y-auto">

                <div className="space-y-5 mb-5">
                    {menu.map((item,index:number)=>
                        <div className="pr-9 cursor-pointer" key={index}>
                            <p onClick={()=>navigate(item.path)} className={`flex px-5 py-3 items-center ${
                                item.path === locarion.pathname
                                ? "bg-teal-600 text-white border-r border-gray-300 rounded-r-full"
                                : "text-teal-600"
                            }`}>
                                <ListItemIcon>
                                    {item.path === locarion.pathname 
                                    ? item.activeIcon 
                                    : item.icon}
                                </ListItemIcon>

                                <ListItemText>
                                    {item.name}
                                </ListItemText>
                            </p>
                        </div>
                    )}
                </div>


                <Divider className="my-4"/>


                <div className="space-y-4 mt-5">
                    {menu2.map((item,index:number)=>
                        <div className="pr-9 cursor-pointer" key={index}>
                            <p onClick={()=>navigate(item.path)} className={`flex px-5 py-3 items-center ${
                                item.path === locarion.pathname
                                ? "bg-teal-600 text-white rounded-r-full"
                                : "text-teal-600"
                            }`}>
                                <ListItemIcon>
                                    {item.path === locarion.pathname 
                                    ? item.activeIcon 
                                    : item.icon}
                                </ListItemIcon>

                                <ListItemText>
                                    {item.name}
                                </ListItemText>
                            </p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    </div>
)
}

export default DrawerList
