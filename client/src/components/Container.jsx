import { cn } from "./ui/cn"
const Container = ({children, className}) => {
  return (
    <div className={cn("max-w-screen-7xl mx-auto px-4 py-10",
        className)}>
        {children}
        </div>
  )
}

export default Container