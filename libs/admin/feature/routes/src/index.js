// shared Routes
import { shareRoutes } from '@thanhminh-org/shared/feature/config';

export const navLinkRoutes = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Dashboard',
    path: '/dashboard',
  },
  {
    label: 'Show All',
    path: '/all',
  },
];

export const routes = [...shareRoutes];
