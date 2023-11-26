import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <div>
      <h1 className="text-[72px] font-bold">Our Works</h1>
      {children}
    </div>
  )
}
export default Layout