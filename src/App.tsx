import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import {
  AxiosInterceptorContext, // using this is optional
  DappProvider,
  Layout,
  TransactionsToastList,
  NotificationModal,
  SignTransactionsModals
  // uncomment this to use the custom transaction tracker
  // TransactionsTracker
} from 'components';

import {
  apiTimeout,
  walletConnectV2ProjectId,
  environment,
  sampleAuthenticatedDomains
} from 'config';
import { RouteNamesEnum } from 'localConstants';
import { PageNotFound, Unlock } from 'pages';
import { routes } from 'routes';
import { BatchTransactionsContextProvider } from 'wrappers';
import { RequireAuth } from "RequireAuth"
import { Dashboard, Success } from 'pages';

const AppContent = () => {
  return (
    <DappProvider
      environment={environment}
      customNetworkConfig={{
        name: 'customConfig',
        apiTimeout,
        walletConnectV2ProjectId
      }}
      dappConfig={{
        shouldUseWebViewProvider: true,
        logoutRoute: RouteNamesEnum.unlock
      }}
      customComponents={{
        transactionTracker: {
          // uncomment this to use the custom transaction tracker
          // component: TransactionsTracker,
          props: {
            onSuccess: (sessionId: string) => {
              console.log(`Session ${sessionId} successfully completed`);
            },
            onFail: (sessionId: string, errorMessage: string) => {
              console.log(`Session ${sessionId} failed. ${errorMessage ?? ''}`);
            }
          }
        }
      }}
    >
      <AxiosInterceptorContext.Listener>
        <Layout>
          <TransactionsToastList />
          <NotificationModal />
          <SignTransactionsModals />
          <Routes>
            <Route element={<RequireAuth />} >/
            <Route
              element={<Dashboard />}
            >
              {routes.map((route) => (
                <Route
                  path={route.path}
                  key={`route-key-'${route.path}`}
                  element={<route.component />}
                />
              ))}
              <Route
                path={RouteNamesEnum.success}
                element={<Success />}
              />
            </Route>
            </Route>
            <Route path={RouteNamesEnum.unlock} element={<Unlock />} />
            <Route path="/" element={<Navigate to="/dashboard/shop" />}/>
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </Layout>
      </AxiosInterceptorContext.Listener>
    </DappProvider>
  );
};

export const App = () => {
  return (
    <AxiosInterceptorContext.Provider>
      <AxiosInterceptorContext.Interceptor
        authenticatedDomanis={sampleAuthenticatedDomains}
      >
        <Router>
          <BatchTransactionsContextProvider>
            <AppContent />
          </BatchTransactionsContextProvider>
        </Router>
      </AxiosInterceptorContext.Interceptor>
    </AxiosInterceptorContext.Provider>
  );
};
