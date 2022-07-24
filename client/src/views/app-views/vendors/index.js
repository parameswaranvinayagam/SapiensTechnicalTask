import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Loading from "components/shared-components/Loading";

const Dashboards = ({ match }) => {
  return (
    <Suspense fallback={<Loading cover="content" />}>
      <Switch>
        <Route
          path={`${match.url}/overView`}
          component={lazy(() => import(`./viewVendors`))}
        />
        <Route
          path={`${match.url}/addVendors`}
          component={lazy(() => import(`./VendorsForm`))}
        />
        <Route
          path={`${match.url}/addNewVendorLocations`}
          component={lazy(() => import(`./VendorsForm`))}
        />
      </Switch>
    </Suspense>
  );
};

export default Dashboards;
