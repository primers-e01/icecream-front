import React from 'react';
import { Mobile, DeskTop, Tablet } from 'src/responsive/Responsive';
import DesktopNav from './DeskTop';
import MobileNav from './Mobile';
import TabletNav from './Tablet';

const NavBar = () => {
  return (
    <>
      <DeskTop children={<DesktopNav />} />
      <Mobile children={<MobileNav />} />
      <Tablet children={<TabletNav />} />
    </>
  );
};

export default NavBar;
