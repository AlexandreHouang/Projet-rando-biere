// == Import npm
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import components & containers
import Footer from 'src/components/Footer';
import Banner from 'src/components/Banner';
import HikingContainer from 'src/containers/HikingContainer';
import BreweriesSearch from 'src/containers/BreweriesSearch';
import Nav from 'src/containers/Nav';
import HomepageArticles from 'src/components/HomepageArticles';
import BreweryContainer from 'src/containers/BreweryContainer';
import AdminDashboard from 'src/containers/AdminDashboard';
import AdminAddBrewery from 'src/containers/AdminAddBrewery';
import AdminEditBrewery from 'src/containers/AdminEditBrewery';
import LoginForm from 'src/containers/LoginForm';
import LegalNotice from 'src/components/LegalNotice';
import Notfound from 'src/components/NotFound';

// == Import
import './styles.scss';
// == Component
const RandoBiere = ({ logged }) => (
  <div className="randoBiere">
    <Switch>

      <Route path="/" exact>
        <Banner />
        <HomepageArticles />
      </Route>

      <Route path="/brasseries" exact>
        {/* Every Brewery Page (unfiltered) */}
        <Nav />
        <BreweriesSearch />
      </Route>

      <Route path="/brasseries?region=:id">
        {/* Every Brewery Page (filtered) */}
        <Nav />
        <BreweriesSearch />
      </Route>

      <Route path="/brasseries/:id">
        {/* Brewery Details Page */}
        <Nav />
        <BreweryContainer />
      </Route>

      <Route path="/randonnees/:id">
        <Nav />
        <HikingContainer />
      </Route>
      <Route path="/mentions-legales">
        <Nav />
        <LegalNotice />
      </Route>

      <Route path="/login">
        <Nav signOutHide="signOutHide" />
        <LoginForm />
        {(logged === true) && <Redirect from="/login" to="/admin" />}
      </Route>

      <Route path="/admin" exact>
        {/* if not connected, goes to login page. Otherwise, displays Nav and Dashboard */}
        {(logged === false) && <Redirect from="/admin" to="/login" />}
        {(logged === true) && (
          <>
            <Nav logged={logged} />
            <AdminDashboard />
          </>
        )}
      </Route>
      <Route path="/admin/brasserie" exact>
        {/* if not connected, goes to login page. Otherwise, displays Nav and the Form for adding a Brewery */}
        {(logged === false) && <Redirect from="/admin" to="/login" />}
        {(logged === true) && (
          <>
            <Nav />
            <AdminAddBrewery />
          </>
        )}

      </Route>

      <Route path="/admin/brasserie-edit">
        {/* if not connected, goes to login page. Otherwise, displays Nav and the Form to edit a Brewery */}

        {(logged === false) && <Redirect from="/admin" to="/login" />}
        {(logged === true) && (
          <>
            <Nav />
            <AdminEditBrewery />
          </>
        )}
      </Route>

      <Route>
        <Nav />
        <Notfound />
      </Route>

    </Switch>
    <Footer />
  </div>
);

RandoBiere.propTypes = {
  logged: PropTypes.bool.isRequired,
};

// == Export
export default RandoBiere;
