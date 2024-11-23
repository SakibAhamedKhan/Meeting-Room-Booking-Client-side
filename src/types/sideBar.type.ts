import { ReactNode } from "react"

export type TSideBarItem = {
    key: string,
    label: ReactNode,
    children?:TSideBarItem[],
    icon?: ReactNode,
}

export type TRouteUserPath = {
    name?: string, 
    path?: string, 
    element?: ReactNode, 
    children?:TRouteUserPath[],

}

