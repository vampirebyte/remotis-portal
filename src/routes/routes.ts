import { RouteNamesEnum } from 'localConstants';
import { Dashboard, Shop, Home } from 'pages';
import { RouteType } from 'types';
import HeadphonesMicrophone from 'assets/img/HeadphonesMicrophone.svg?react';
import CircuitMap from 'assets/img/CircuitMap.svg?react';
import ProfileIcon from 'assets/img/Profile.svg?react';
import Ranking from 'assets/img/Ranking.svg?react';
import SteeringWheel from 'assets/img/SteeringWheel.svg?react';
import SettingsFill from 'assets/img/SettingsFill.svg?react';
import HelmetFillInclined from 'assets/img/HelmetFillInclined.svg?react';
import ShopIcon from 'assets/img/Shop.svg?react';

interface RouteWithTitleType extends RouteType {
  title: string;
  icon: string | React.FunctionComponent;
}

export const routes: RouteWithTitleType[] = [
  {
    path: RouteNamesEnum.shop,
    title: 'Shop',
    component: Shop,
    icon: ShopIcon
  },
  {
    path: RouteNamesEnum.myProfile,
    title: 'My Profile',
    component: Home,
    icon: HelmetFillInclined
  },
  {
    path: RouteNamesEnum.racing,
    title: 'Racing',
    component: Home,
    icon: SteeringWheel
  },
  {
    path: RouteNamesEnum.cars,
    title: 'Cars',
    component: Home,
    icon: ProfileIcon
  },
  {
    path: RouteNamesEnum.ranking,
    title: 'Ranking',
    component: Home,
    icon: Ranking
  },
  {
    path: RouteNamesEnum.circuits,
    title: 'Circuits',
    component: Home,
    icon: CircuitMap
  },
  {
    path: RouteNamesEnum.settings,
    title: 'Settings',
    component: Home,
    icon: SettingsFill
  },
  {
    path: RouteNamesEnum.support,
    title: 'Support',
    component: Home,
    icon: HeadphonesMicrophone
  },
];
