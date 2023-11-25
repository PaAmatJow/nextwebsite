import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

const BlogLayout = ({children}: Props) => {
  return (
    <div>
      {children}
    </div>
  )
}
export default BlogLayout