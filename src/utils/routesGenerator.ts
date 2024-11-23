import { TRoute, TRouteUserPath } from "@/types";



export const routeGenerator = (items : TRouteUserPath[]) => {
    const routes = items.reduce((acc : TRoute[], item) => {
        if (item.path && item.element) {
            acc.push({
                path: item.path,
                element: item.element,
            })
        }
    
        if (item.children) {
            item.children.forEach(child => {
                acc.push({
                    path: `${item.name}/${child.path!}`,
                    element: child.element,
                })
            })
        }
        return acc;
    }, []);

    return routes;
}