import React, { Component, Fragment, Suspense } from "react";
import ReactGA from "react-ga";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Education from "./Components/Education";
import Work from "./Components/Work";
import Skills from "./Components/Skills";
//import Portfolio from "./Components/Portfolio";
//import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import StaticImage from "./Components/StaticImage";
import NotFoundPage from "./Components/NotFoundPage";

class App extends Component {
  constructor(props) {
    super(props);
    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  componentDidMount() {
    var timeout = 800;
    setTimeout(()=>{ 
      $('#siteLoading').fadeOut(0);
    },timeout)
  }

  render() {
    return (
      <Suspense fallback="loading">
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" render={() => 
                <Fragment>
                  <Header/>
                  <About/>
                  <Work/>
                  <Education/>
                  <Skills/>
                  {/*<Portfolio/>
                  <Testimonials/>*/}
                  <StaticImage/>
                  <Contact/>
                  <Footer/>
                </Fragment>
              }/>
              <Route path="*" component={NotFoundPage} />
            </Switch>
          </BrowserRouter>
        </div>
      </Suspense>
    );
  }
}
export default App;
