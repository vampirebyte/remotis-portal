import { LicenseCard } from './LicenseCard';
import licenseA from 'assets/img/Amateur.svg';
import licenseS from 'assets/img/Specialist.svg';
import licenseE from 'assets/img/Expert.svg';
import licenseL from 'assets/img/Legend.svg';


import "./Shop.css"

export const Shop = () => {
  return (
    <div className='shop-container align-baselines'>
       <div className='grid gap-8 grid-cols-12'>
          <div className='col-span-6'>
            <LicenseCard
              licenseLevel="Amateur"
              monthlyRcoins={35}
              maxPower={12000}
              logoLicense={licenseA}
              fps={60}
              boostEachLap={1}
              carLiveries={1}
              soundsNumber={1}
              defaultPrice={5}
              pricePerBattery={1}
              pricePerMonth={5}
            />
          </div>
          <div className='col-span-6'>
            <LicenseCard
              licenseLevel="Specialist"
              monthlyRcoins={50}
              maxPower={14000}
              logoLicense={licenseS}
              fps={60}
              boostEachLap={2}
              carLiveries={2}
              soundsNumber={2}
              defaultPrice={10}
              pricePerBattery={2}
              pricePerMonth={10}
            />
          </div>
          <div className='col-span-6'>
            <LicenseCard
              licenseLevel="Expert"
              monthlyRcoins={55}
              maxPower={17000}
              logoLicense={licenseE}
              fps={90}
              boostEachLap={3}
              carLiveries={3}
              soundsNumber={3}
              defaultPrice={15}
              pricePerBattery={3}
              pricePerMonth={15}
            />
          </div>
          <div className='col-span-6'>
            <LicenseCard
              licenseLevel="Legend"
              monthlyRcoins={100}
              maxPower={20000}
              logoLicense={licenseL}
              fps={90}
              boostEachLap={4}
              carLiveries={4}
              soundsNumber={4}
              defaultPrice={20}
              pricePerBattery={4}
              pricePerMonth={20}
            />
          </div>
        </div>
    </div>
  );
};
