import type {
  ExtensionLoginButtonPropsType,
  WebWalletLoginButtonPropsType,
  OperaWalletLoginButtonPropsType,
  LedgerLoginButtonPropsType,
  WalletConnectLoginButtonPropsType
} from '@multiversx/sdk-dapp/UI';
import {
  ExtensionLoginButton,
  LedgerLoginButton,
  OperaWalletLoginButton,
  WalletConnectLoginButton,
  WebWalletLoginButton
} from 'components/sdkDappComponents';
import { nativeAuth } from 'config';
import { RouteNamesEnum } from 'localConstants';
import { AuthRedirectWrapper } from 'wrappers';
import logo from 'assets/img/Logo.png';
import './Unlock.css';
import { UnlockFooter } from './UnlockFooter';

type CommonPropsType =
  | OperaWalletLoginButtonPropsType
  | ExtensionLoginButtonPropsType
  | WebWalletLoginButtonPropsType
  | LedgerLoginButtonPropsType
  | WalletConnectLoginButtonPropsType;

const commonProps: CommonPropsType = {
  callbackRoute: RouteNamesEnum.shop,
  nativeAuth
};

export const Unlock = () => {
  return (
    <AuthRedirectWrapper requireAuth={false}>
      <div className='flex'>
        <div className='login-side-bar-container col-span-3'>
          <div
              data-testid='unlockPage'
              className='login'
            >
            <img src={logo} className='logo-img' alt="remottis-logo-img" />
            <div className="login__header">
              <h1>Create Account</h1>
              <p>and have a free test drive</p>
            </div>

            <div className="login__form">
              <WalletConnectLoginButton
                buttonClassName = "custom-botton"
                loginButtonText='xPortal App'
                showScamPhishingAlert= {false}
                modalClassName="wallet-modal"
                wrapContentInsideModal = {true}
                innerWalletConnectComponentsClasses={{
                  'containerContentClassName':'wallet-modal-container',
                  'containerButtonClassName': 'wallet-modal-buttons',
                  'containerLoaderClassName': 'wallet-modal-loader'
                }}
                {...commonProps}
              />
              <LedgerLoginButton 
                loginButtonText='Ledger' 
                buttonClassName = "custom-botton"
                modalClassName="wallet-modal"
                wrapContentInsideModal = {true}
                showScamPhishingAlert= {false}
                showProgressBar={false}
                innerLedgerComponentsClasses={{
                  'ledgerProgressBarClassNames': {
                    'ledgerProgressBarTrackClassName': 'wallet-modal-loader'
                    // ledgerProgressBarThumbClassName?: string;
                  },
                  'ledgerLoadingClassNames': {
                    'ledgerLoadingWrapper': 'wallet-modal-container',
                    'ledgerLoadingSpinner': 'wallet-ledger-spinner'
                  },
                  'ledgerConnectClassNames': {
                    'ledgerModalButtonClassName': 'custom-button',
                    'ledgerModalContentClassName': 'wallet-modal-container',
                  }
                }}
                {...commonProps} 
              />
              <ExtensionLoginButton
                loginButtonText='DeFi Wallet'
                buttonClassName = "custom-botton"
              />
              <OperaWalletLoginButton
                loginButtonText='Opera Crypto Wallet - Beta'
                buttonClassName = "custom-botton"
                {...commonProps}
              />
              <WebWalletLoginButton
                loginButtonText='Web Wallet'
                data-testid='webWalletLoginBtn'
                buttonClassName = "custom-botton"
                {...commonProps}
              />
            </div>
          </div>
        </div>

        <div className='login-side-bar-footer'>
          <UnlockFooter/>
        </div>
      
      </div>
    </AuthRedirectWrapper>
  );
};
