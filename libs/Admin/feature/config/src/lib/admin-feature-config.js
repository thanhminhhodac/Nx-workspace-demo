// share routes
import { shareRoutes } from '@thanhminh-org/shared/feature/config';
// self routes
import { Dashboard } from '@thanhminh-org/admin/pages/dashboard';

export const routes = [
  ...shareRoutes,
  {
    path: '/dashboard',
    component: Dashboard,
  },
];
