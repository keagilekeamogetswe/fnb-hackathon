"use client";
import { useEffect, useRef, useState } from "react";
import MenuIcon from "./nav/menu.icon";
import { MenuStateManagement } from "./nav/menu.subscriptions";
import gsap from "gsap";
import MenuItem from "./nav/menu.item";

export function Nav() {
  const [shown_status, setShow] = useState<boolean>(false);
  const menu_items = useRef<HTMLUListElement>(null)
  MenuStateManagement.subscribe(setShow);

  useEffect(() => {
    gsap.set("nav", {
      x: "100%",
      opacity: 1
    })
    if (shown_status) {
      gsap.set(menu_items.current!.children, {
        opacity: 100,
        y: 0,
        x: 0
      })
      gsap.from(menu_items.current!.children, {
        y: -20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.3,
        ease: "power2.out"
      })
      gsap.to("nav", {
        x: 0,
        duration: 0.4,
        ease: "power2.out"
      })
    } else {
      gsap
        .to(menu_items.current!.children, {
          opacity: 0,
          delay: 0.4,
          stagger: 0,
          duration: 0,
          ease: "power2.out"
        })
      gsap.to("nav", {
        x: "100%",
        duration: 0.4,
        ease: "power2.out"
      }
      )
    }
  })
  return (
    <>
      <MenuIcon />
      <nav className="top-0 right-0 left-[15%] p-10 bottom-0 bg-[rgba(46,46,46,0.1)] backdrop-blur-[10px] backdrop-brightness-30 outline outline-[rgba(255,255,255,0.4)] fixed z-10 flex flex-col opacity-0">
        <h2 className="text-[32px] font-bold">AidLink</h2>
        <div className="mt-10 flex flex-col gap-y-10 justify-between grow">
          <div>
            <small className="font-bold text-[#8B8B8B] ml-4">MENU</small>
            <ul ref={menu_items} className="text-xl flex flex-col gap-y-6 mt-3">
              { }{MenuStateManagement.routes.map((route, i) => (
                <MenuItem key={i} name={route.name} url={route.url} />
              ))}
            </ul>
          </div>
          <div className="-mx-10 -mb-10 p-7 bg-[rgba(84,84,87,0.4)] outline outline-[rgba(255,255,255,0.4)] shadow-[0_4px_8px_rgba(0,0,0,0.25)]" >
            <ul className="flex flex-row gap-x-10 justify-center">
              <li className=" px-8 py-1.5 bg-[#72853F] text-center text-bold rounded-xl">Sign up</li>
              <li className=" px-8 py-1.5 bg-[#A81A26] text-center text-bold  rounded-xl">Report</li>
            </ul>
          </div>
        </div>
      </nav>
    </>

  )
}
