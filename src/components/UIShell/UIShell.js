// ------------------------------------------------
// PLEASE DO NOT EDIT. FORK IF YOU NEED TO MODIFY.
// ------------------------------------------------

import React from "react";
import { render } from "react-dom";
import Search20 from "@carbon/icons-react/lib/search/20";
import Notification20 from "@carbon/icons-react/lib/notification/20";
import AppSwitcher20 from "@carbon/icons-react/lib/app-switcher/20";
import HeaderContainer from "carbon-components-react/lib/components/UIShell/HeaderContainer";
import {
  Content,
  Header,
  HeaderMenuButton,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem
} from "carbon-components-react/lib/components/UIShell";

import "./UIShell.css";
import MyGames from "../MyGames/MyGames";
import LeaderBoard from "../LeaderBoard/LeaderBoard";
import GameItem from "../GameItem/GameItem";

const StoryContent = () => {
  const content = (
    <div className="background-color">
        <div className="bx--grid">
            <div className="bx--row bx--offset-lg-1 bx--col-lg-13">
                <MyGames>
                    <GameItem/>
                </MyGames>
                <LeaderBoard />
                
            </div>
        </div>
    </div>
  );

  return <Content id="main-content">{content}</Content>;
};

const Fade16 = () => (
  <svg
    width="16"
    height="16"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    aria-hidden="true"
  >
    <path d="M8.24 25.14L7 26.67a14 14 0 0 0 4.18 2.44l.68-1.88a12 12 0 0 1-3.62-2.09zm-4.05-7.07l-2 .35A13.89 13.89 0 0 0 3.86 23l1.73-1a11.9 11.9 0 0 1-1.4-3.93zm7.63-13.31l-.68-1.88A14 14 0 0 0 7 5.33l1.24 1.53a12 12 0 0 1 3.58-2.1zM5.59 10L3.86 9a13.89 13.89 0 0 0-1.64 4.54l2 .35A11.9 11.9 0 0 1 5.59 10zM16 2v2a12 12 0 0 1 0 24v2a14 14 0 0 0 0-28z" />
  </svg>
);

const UIShell = () => (
  <div className="container">
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <>
          <Header aria-label="IBM Platform Name">
            <SkipToContent />
            <HeaderMenuButton
              aria-label="Open menu"
              onClick={onClickSideNavExpand}
              isActive={isSideNavExpanded}
            />
            <HeaderName href="#" prefix="IBM">
              Game On
            </HeaderName>
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
            <SideNav className="game-on-side-nav" aria-label="Side navigation">
              <SideNavItems>
                <SideNavLink href="javascript:void(0)">
                  Dashboard
                </SideNavLink>
                <SideNavLink href="javascript:void(0)">
                  Active Games
                </SideNavLink>
                <SideNavLink href="javascript:void(0)">
                  Create Game
                </SideNavLink>
                <SideNavLink href="javascript:void(0)">
                  Profile
                </SideNavLink>
              </SideNavItems>
            </SideNav>
          </Header>
          <StoryContent />
        </>
      )}
    />
  </div>
);

export default UIShell;
