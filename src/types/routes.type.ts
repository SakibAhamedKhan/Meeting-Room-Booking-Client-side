import { ReactNode } from "react"

export type TRoute = {
    path: string, 
    element: ReactNode,
}

export type TSidebarUserPath = {
    name: string, 
    path?: string, 
    element?: ReactNode, 
    children?:TSidebarUserPath[],
    icons?:ReactNode,
}