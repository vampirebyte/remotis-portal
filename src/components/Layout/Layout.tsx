import type { PropsWithChildren } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthenticatedRoutesWrapper } from 'components/sdkDappComponents';
import { RouteNamesEnum } from 'localConstants/routes';
import { routes } from 'routes/routes';
import { Footer } from './Footer';
import './Layout.css';

export const Layout = ({ children }: PropsWithChildren) => {
  const { search } = useLocation();
  return (
    <div className='main-page-container'>
      <main>
        <AuthenticatedRoutesWrapper
          routes={routes}
          unlockRoute={`${RouteNamesEnum.unlock}${search}`}
        >
          {children}
        </AuthenticatedRoutesWrapper>
      </main>
      {/* <Footer /> */}
    </div>
  );
};
