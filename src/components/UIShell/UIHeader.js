// ------------------------------------------------
// PLEASE DO NOT EDIT. FORK IF YOU NEED TO MODIFY.
// ------------------------------------------------

import React from "react";
import { render } from "react-dom";
import Search20 from "@carbon/icons-react/lib/search/20";
import Notification20 from "@carbon/icons-react/lib/notification/20";
import AppSwitcher20 from "@carbon/icons-react/lib/app-switcher/20";
import {
  Header,
  HeaderName,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderNavigation,
  HeaderMenu,
  HeaderMenuItem
} from "carbon-components-react/lib/components/UIShell";

import "./UIHeader.css";

const UIHeader = () => (
  <div className="container">
    <Header aria-label="IBM Platform Name">
      <HeaderName href="#" prefix="IBM">
        Game On
      </HeaderName>
      <HeaderNavigation aria-label="IBM [Platform]">
        <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
        <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
        <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
        <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
          <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
          <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
          <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
        </HeaderMenu>
      </HeaderNavigation>
      <HeaderGlobalBar>
        <HeaderGlobalAction aria-label="Search" onClick={() => {}}>
          <Search20 />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="Notifications" onClick={() => {}}>
          <Notification20 />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="App Switcher" onClick={() => {}}>
          <AppSwitcher20 />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </Header>
  </div>
);

export default UIHeader;
