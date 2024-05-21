'use client';
import React from 'react';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import { Button } from 'react-day-picker';

export default function Navbar() {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '20px', }}>
                <NavigationMenu  style={{backgroundColor:'black',color:'white'}}>
                    <NavigationMenuList>
                        <NavigationMenuItem asChild><a href="/">Home</a></NavigationMenuItem>
                        <NavigationMenuLink asChild><a href="/students">Students</a></NavigationMenuLink>
                        <NavigationMenuLink>Branches</NavigationMenuLink>
                        <NavigationMenuLink asChild><a href="/about">AboutUs</a></NavigationMenuLink>
                        <NavigationMenuItem asChild><a href="/contact">ContactUs</a></NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger style={{backgroundColor:'black',color:'white'}}>Departments</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                

                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem asChild><a href="/login">Login</a></NavigationMenuItem>
                        <NavigationMenuItem asChild><a href="/signup">SignUp</a></NavigationMenuItem>

                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </>
    )
}