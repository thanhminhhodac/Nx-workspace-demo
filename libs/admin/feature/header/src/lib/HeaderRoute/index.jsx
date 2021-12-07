// libs
import React from 'react';
import { navLinkRoutes } from '@thanhminh-org/admin/feature/routes';
// shared libs
import { HeaderNavLink } from '@thanhminh-org/shared/ui/header-navlink';

const HeaderRoute = () => {
  console.log(navLinkRoutes);
  return (
    <div className="header-route-wrapper">
      <div className="header-route-wrapper-inner">
        {navLinkRoutes.map((navLink) => {
          return (
            <HeaderNavLink
              key={navLink.label}
              path={navLink.path}
              label={navLink.label}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HeaderRoute;
