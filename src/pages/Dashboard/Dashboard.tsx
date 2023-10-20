import { Button } from 'components/Button';
import { contractAddress } from 'config';
import { AuthRedirectWrapper } from 'wrappers';
import logo from 'assets/img/logoRemotis.png';
import license from 'assets/img/logo-info.png';
import { useGetAccountInfo, useGetNetworkConfig } from 'hooks';
import { routes } from 'routes';
import { NavLink } from 'react-router-dom';
import { logout } from 'helpers';
import { Outlet } from "react-router";
import { FormatAmount } from 'components/sdkDappComponents';
import profile from 'assets/img/Profile.png';
import flag from 'assets/img/Flag.png';
import "./Dashboard.css"
import React from 'react';


export const Dashboard = () => {
  const  { account } = useGetAccountInfo();
  const handleLogout = () => {
    sessionStorage.clear();
    logout(`${window.location.origin}/unlock`, undefined, false);
  };

  const { network } = useGetNetworkConfig();

  return (
    <AuthRedirectWrapper>
      <div className='side-bar flex'>
        <div className='login-side-bar-container'>
          <div
              data-testid='unlockPage'
              className='login'
              >
              <img src={logo} className='logo-img' alt="remottis-logo-img" />
              <div className="menu__container">
                <img className="menu__container--profile" src={profile} alt="user profile" />
                <div className="menu__container__info">
                    <div className="menu__container__info--user-details">
                      <div className='menu__container__info--user-details--user'>
                          <img className="menu__container__info--flag" src={flag} alt="" />
                          <span >{account.address}</span>
                      </div>
                      <span className="tooltip-text">{account.address}</span>
                    </div>
                </div>
              </div>
          </div>
          
          <div className='grid grid-cols-12'>
            <div className="col-span-4 items-center menu__container__profile--item-description">
              <div className="value">2</div>
              <div className="name">Slot Res.</div>
            </div>

            <div className="col-span-4 items-center mid menu__container__profile--item-description">
              <div className="value">
                <img className='license-img' src={license} alt="license-image" />
              </div>
              <div className="name">License</div>
            </div>

            <div className="col-span-4 items-center menu__container__profile--item-description flex content-center">
              <div className="value">
              <FormatAmount
                value={account.balance}
                egldLabel={network.egldLabel}
                data-testid='balance'
                digits={2}
              />
            </div>
            </div>
          </div>
          <div className="menu__container--navLinks">
            {routes.map((route) => (
              <NavLink key={route.path} to={route.path} caseSensitive className={({ isActive }) => (isActive ? 'activeBtn' : '')}>
                <hr/>
                <div className="menu__container--navLinks--item">
                  <p className="navLink_content">
                    {React.createElement(route.icon)}
                    {route.title}
                  </p>
                </div>
              </NavLink>
            ))}

            <Button
              onClick={handleLogout}
              className='inline-block custom-logout-button'
            >
              Logout
            </Button>
          </div>
        </div>

        <div className='outlet-container'>
          <Outlet />
        </div>
      </div>
    </AuthRedirectWrapper>
);
};
