"use client";
import Link from "next/link";
import { ModeToggle } from "@/components/ui/toggle-modle";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export default function Nav() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = currentScrollPos < prevScrollPos || currentScrollPos < 10;

    setPrevScrollPos(currentScrollPos);
    setVisible(visible);
  };



  return (
    <div
      className={`z-10 fixed top-0 left-0 right-0 px-10 sm:py-3 border-b bg-transparent  ${
        visible ? "visible" : "hidden"
      }`}
      style={{ backdropFilter: "blur(10px)" }} //make a blur effect behind the nav bar
    >
      <div className=" flex flex-row">
        <div className="flex basis-3/4 flex-row gap-4">

        
        <h1 className=" text-3xl py-2 hidden sm:inline-block">
          <Link href={"/"}> Movie</Link>
        </h1>
        <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>More..</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="flex flex-col w-full px-10 py-5 text-sm">
                      <NavigationMenuLink>
                        <Link className="border-b inline-block" href={"/Movies"}>
                          
                          Movies
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink>
                        <Link className="border-b" href={"/Trending"}>
                          
                          Trending
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink>
                        <Link className="border-b inline-block" href={"/Playing"}>
                          <h1>
                          NowPlaying

                          </h1>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink>
                        <Link className="border-b" href={"#"}>
                    
                          About
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            </div>
        <div className="flex basis-1/4 gap-5 justify-end  ">
          <p>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </p>
          
          <h2>
            <ModeToggle />
          </h2>
        </div>
      </div>
    </div>
  );
}
