// pages
import { Homepage } from '@thanhminh-org/shared/pages/homepage';
import { ShowAll } from '@thanhminh-org/shared/pages/showall';

export const shareRoutes = [
  { path: '/', element: <Homepage />, label: 'Homepage' },
  { path: '/all', element: <ShowAll />, label: 'Show All' },
];
