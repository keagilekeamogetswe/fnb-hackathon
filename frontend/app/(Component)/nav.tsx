import MenuIcon from "./nav/menu.icon";

export function Nav() {
  return (
    <>
      <MenuIcon />
      <nav className="top-0 right-0 left-[15%] p-10 bottom-0 bg-[rgba(46,46,46,0.1)] backdrop-blur-[10px] backdrop-brightness-30 outline outline-[rgba(255,255,255,0.4)] fixed z-10 flex flex-col">
        <h2 className="text-[32px] font-bold">AidLink</h2>
        <div className="mt-10 flex flex-col gap-y-10 justify-between grow">
          <div>
            <small className="font-bold text-[#8B8B8B] ml-4">MENU</small>
            <ul className="text-xl flex flex-col gap-y-6 mt-3">
              <li className="-mx-10 py-2 px-14 text-[#ff8c00]! bg-[rgba(84,84,87,0.4)] outline outline-[rgba(255,255,255,0.4)] shadow-[0_4px_8px_rgba(0,0,0,0.25)] ">Home</li>
              <li className="-mx-10 px-14 " >About</li>
              <li className="-mx-10 px-14 ">Learn</li>
              <li className="-mx-10 px-14 ">Events</li>
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
