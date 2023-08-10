import { RxHome, RxCalendar, RxBarChart } from "react-icons/rx";
import { AiOutlineGlobal } from "react-icons/ai";

import { MenuRoutes } from '../interfaces/menuRoutes';


export const routes: MenuRoutes = {
  routes: [
    {
      icon: RxHome,
      name: 'Dashboard',
      path: '/',
     },
    {
      name: 'Calendarios',
      icon: RxCalendar,
      path: '',
      routes: [
        {
          name: 'Global',
          icon: AiOutlineGlobal,
          path: '/calendar',
        },
        {
          name: 'Semestral',
          icon: RxBarChart,
          path: '/calendar/semestral',
        }
        ,
        {
          name: 'Bimestral',
          icon: RxBarChart,
          path: '/calendar/bimestral',
        }
      ]
    },
    {
      name: 'Planos',
      icon: RxCalendar,
      path: '',
      routes: [
        {
          icon: RxBarChart,
          name: 'Diario',
          path: '/plans/daily'
        },
        {
          icon: RxBarChart,
          name: 'Anual',
          path: '/plans/yearly'
        }
      ]
    }
  ]
}
