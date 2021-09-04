import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { NavBar } from "../components/ui/Navbar";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { HeroScreen } from "../components/heroes/HeroScreen";
import { DcScreen } from "../components/dc/DcScreen";
import { SearchScreen } from "../components/search/SearchScreen";

export const DashboardRoutes = () => {
  return (
    <Fragment>
      <NavBar />
      <div className="container mt-2">
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />

          <Route exact path="/hero/:heroeid" component={HeroScreen} />

          <Route exact path="/dc" component={DcScreen} />

          <Route exact path="/search" component={SearchScreen} />

          <Redirect to="/marvel" />
        </Switch>
      </div>
    </Fragment>
  );
};
