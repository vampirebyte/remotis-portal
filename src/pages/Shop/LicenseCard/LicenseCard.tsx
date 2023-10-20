import CropSquare from 'assets/img/CropSquare.svg?react';
import DoubleSquares from 'assets/img/DoubleSquares.svg?react';
import Formula1 from 'assets/img/Formula1.svg?react';
import Music from 'assets/img/music.svg?react';
import { paymentAddress } from "config"
import {
  PingPongRaw
} from '../widgets';

import './LicenseCard.css';
import { useEffect, useState } from 'react';
import { useGetAccountInfo } from '@multiversx/sdk-dapp/hooks/account/useGetAccountInfo';
import { Button } from 'components';
import { RouteNamesEnum } from 'localConstants';

interface License {
  licenseLevel: 'Amateur' | 'Specialist' | 'Legend' | 'Expert';
  monthlyRcoins: number;
  maxPower: number;
  fps: number;
  boostEachLap: number;
  carLiveries: number;
  logoLicense: string;
  soundsNumber: number;
  defaultPrice: number;
  pricePerBattery: number;
  pricePerMonth: number;
}

export const LicenseCard = ({
  licenseLevel,
  maxPower,
  fps,
  boostEachLap,
  carLiveries,
  logoLicense,
  soundsNumber,
  pricePerBattery,
  pricePerMonth
} : License): JSX.Element => {

  const [coin, setCoin] = useState(100);
  const [month, setMonth] = useState(1);
  const [price, setPrice] = useState(0);
  const  { account } = useGetAccountInfo();
  
  const sendMoney = async () => {
    window.open(
      `${paymentAddress}?
      price=${price}&
      user_wallet=${account.address}&
      return_url=${ `${window.location.origin}/${RouteNamesEnum.success}`}`, 
      "noreferrer"
    );
  };

  const handleMonthChange = (event: any) => {
    let value = event.target.value;
    setPrice(coin * pricePerBattery + value * pricePerMonth)
    setMonth(value)
  };
  const handleCoinChange = (event: any) => {
    let value = event.target.value;
    setPrice(value * pricePerBattery + month * pricePerMonth)
    setCoin(value)
  };

  useEffect(() => {
    setPrice(coin * pricePerBattery + month * pricePerMonth);;
  }, [coin, pricePerBattery, month, pricePerMonth]);

  return (
    <div className="license-card">
      <div className="flex justify-between">
        <h2>{licenseLevel}</h2>   
        <select className="month-dropdown" onChange={handleMonthChange}>
          <option value="1">1 MONTHS</option>
          <option value="2">2 MONTHS</option>
          <option value="3">3 MONTHS</option>
          <option value="6">6 MONTHS</option>
          <option value="12">12 MONTHS</option>
        </select>
      </div>
      <div className="license-card__container">
        <img className="license-card__container--logo-license" src={logoLicense} alt="" />
        <div className='flex justify-around licence-info'>
          <div>
            <span>Battery:</span>
            <select className="month-dropdown r-coin" onChange={handleCoinChange}>
              <option value="100">100</option>
              <option value="500">500</option>
              <option value="1500">1500</option>
              <option value="2000">2000</option>
            </select>
          </div>

          <div>
            <span>Max RPM: </span> <span className="body-text"> {maxPower} </span>{' '}
            <span className="rpm"> RPM </span>
          </div>
        </div>

        <div className="license-card__icons">
          <div className="license-card__icons--icon">
            <DoubleSquares />
            <div className="license-card__icons--icon-fps-group">
              <span className='fps-value'>{fps}</span>
              <br />
              <span className="fps">FPS</span>
            </div>
          </div>

          <div className="license-card__icons--icon">
            <CropSquare />
            <div className="license-card__icons--icon-boost-group">
              <span>
                BOOST <br />
                EACH <br />
                LAP
              </span>
              <span className="boost">{boostEachLap}</span>
              <br />
            </div>
          </div>

          <div className="license-card__icons--icon">
            <Formula1 className="formula1" />
            <div className="license-card__icons--icon-liveries-group">
              <span>{carLiveries} Huds</span>
              <br />
            </div>
          </div>

          <div className="license-card__icons--icon">
            <Music className="sound" />
            <div className="license-card__icons--icon-liveries-group">
              <span>{soundsNumber} Sounds</span>
              <br />
            </div>
          </div>

        </div>
      
      </div>
      <div className='license-card_price-button-container'>
        <Button
          onClick={sendMoney}
          className='license-card_price-button'
        >
           {price} &#8364; Buy
        </Button>
        {/* <PingPongRaw price={price}/> */}
      </div>
    </div>
  );
};
