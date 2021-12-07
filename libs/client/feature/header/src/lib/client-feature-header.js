// libs
import React from 'react';
// shared library
import { HeaderLogo } from '@thanhminh-org/shared/ui/header-logo';
export const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header-wrapper-inner">
        <HeaderLogo title="ClientSite" />
      </div>
    </div>
  );
};
export default Header;
