import { SubRoutes } from "../SubRoutes";
import { routes } from "../rotas/mountRoutes";
import { RouteItem } from "../RouteItem";

interface Props {
  isCollapsed: boolean;
}

export function Routes({ isCollapsed }: Props) {
  return (
    <ul className="mt-8 space-y-3 h-2/3 overflow-y-auto">
      {routes.routes.map((route) => {
        if (route.routes) {
          return (
            <li
              className={`px-2 py-3 ${
                isCollapsed && "flex justify-center items-center"
              }`}
              key={route.name}
            >
              <SubRoutes
                isCollapsed={isCollapsed}
                menuName={route.name}
                menuIcon={route.icon}
              >
                {route.routes.map((subroute) => {
                  return (
                    <RouteItem
                      key={subroute.name}
                      icon={subroute.icon}
                      name={subroute.name}
                      path={subroute.path}
                    />
                  );
                })}
              </SubRoutes>
            </li>
          );
        }

        return (
          <li key={route.name}>
            <RouteItem
              icon={route.icon}
              name={route.name}
              path={route.path}
              isCollapsed={isCollapsed}
            />
          </li>
        );
      })}
    </ul>
  );
}
