export const MenuStateManagement = (() => {
  const subscribers: Array<(i: boolean) => void> = []
  let setExpenededState: ((i: boolean) => void) | null = null
  return {
    routes: [
      {name: "Home", url: "/"},
      {name: "About", url: "/about"},
      {name: "Learn", url: "/learn"},
      { name: "Events", url: "/events" }
    ],
    bind: (useStateCallback: (i: boolean) => void) => {

      setExpenededState = (i: boolean) => {
        useStateCallback(i)
        subscribers.forEach((callback) => callback(i))
      }
    },
    setExpenededState: (i: boolean) => {
      if (setExpenededState) {
        setExpenededState(i)
      }
      return null
    },
    subscribe: (callback: (i: boolean) => void) => {
      subscribers.push(callback)
    }
  }
})()