"use client"

import { useEffect, useRef, useState } from "react"
import { MenuStateManagement } from "./menu.subscriptions"

const transform = {
  bar_1:
    "rotate-[-45deg] translate-y-[10px] origin-center",
  bar_2: "opacity-0",
  bar_3:
    "rotate-[45deg]  translate-y-[-10px] origin-center",
}

export default function MenuIcon() {

  const expandedRef = useRef<boolean>(false)
  const expanded = expandedRef.current === true
  const [_, setExpanded] = useState<boolean>(false)
  MenuStateManagement.bind(setExpanded)
  useEffect(() => {
    // Disable scrolling when menu is expanded
    if (expanded)
      document.body.style.overflow = "hidden"
    else
      document.body.style.overflow = "auto"
  }, [expanded])

  return (
    <div
      onClick={() => {
        expandedRef.current = !expandedRef.current
        MenuStateManagement.setExpenededState(expandedRef.current)
      }}
      className="fixed right-10 top-10 box-content  w-7 h-7 p-[7px] flex flex-col justify-between bg-[#ffffff33] outline-2 outline-[rgba(255,255,255,0.4)] rounded-md z-20">
      <span className={`h-1.5 bg-white rounded-full transition-transform duration-300 ease-in-out  ${(expanded) ? transform.bar_1 : ""}`} />
      <span className={`h-1.5 bg-white rounded-full transition-transform duration-300 ease-in-out  ${(expanded) ? transform.bar_2 : ""}`} />
      <span className={`h-1.5 bg-white rounded-full transition-transform duration-300 ease-in-out ${(expanded) ? transform.bar_3 : ""}`} />
    </div>
  )
}