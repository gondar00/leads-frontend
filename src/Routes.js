import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Layout Blueprints
import { LeftSidebar, PresentationLayout } from './layout-blueprints';

// Example Pages
const DashboardDefault = lazy(() => import('./example-pages/DashboardDefault'));
const Checkout = lazy(() => import('./example-pages/Checkout'));
const MyLeads = lazy(() => import('./example-pages/MyLeads'));
const CreditsManagement = lazy(() => import('./example-pages/CreditsManagement'));
const LandingPage = lazy(() => import('./example-pages/LandingPage'));

const Routes = () => {
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.99
    },
    in: {
      opacity: 1,
      scale: 1
    },
    out: {
      opacity: 0,
      scale: 1.01
    }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.4
  };

  return (
    <AnimatePresence>
      <Suspense
        fallback={
          <div className="d-flex align-items-center vh-100 justify-content-center text-center font-weight-bold font-size-lg py-3">
            <div className="w-50 mx-auto">
              Please wait while we load the live preview examples
            </div>
          </div>
        }>
        <Switch>
          <Redirect exact from="/" to="/DashboardDefault" />
          <Route
            path={['/DashboardDefault', '/my-leads', '/credits-management', '/checkout']}>
            <LeftSidebar>
              <Switch location={location} key={location.pathname}>
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}>
                  <Route
                    path="/DashboardDefault"
                    component={DashboardDefault}
                  />
                  <Route path="/checkout" component={Checkout} />
                  <Route path="/my-leads" component={MyLeads} />
                  <Route path="/credits-management" component={CreditsManagement} />
                </motion.div>
              </Switch>
            </LeftSidebar>
          </Route>
        </Switch>
      </Suspense>
    </AnimatePresence>
  );
};

export default Routes;
