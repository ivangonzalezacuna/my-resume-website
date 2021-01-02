import React, { Component, Fragment } from "react";
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
    this.state = {
      foo: "bar",
      resumeData: {},
      classEN: "",
      classES: "",
    };
    this.getResumeDataEN = this.getResumeDataEN.bind(this);
    this.getResumeDataES = this.getResumeDataES.bind(this);

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeDataEN(init) {
    if (this.state.classEN === "selected") {
      return false;
    }
    if (init === "404") {
      $('#siteLoading').hide();
    } else if (init !== "404") {
      $('#siteLoading').show();
    }
    $.ajax({
      url: "/en.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data, classEN: "selected", classES: "" });
        var timeout = 500;
        if (init === "404") {
          timeout = 0;
        }
        setTimeout(()=>{ 
          $('#siteLoading').hide();
        },timeout)
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  getResumeDataES(init) {
    if (this.state.classES === "selected") {
      return false;
    }
    if (init === "404") {
      $('#siteLoading').hide();
    } else if (init !== "404") {
      $('#siteLoading').show();
    }
    $.ajax({
      url: "/es.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data, classEN: "", classES: "selected" });
        var timeout = 500;
        if (init === "404") {
          timeout = 0;
        }
        setTimeout(()=>{ 
          $('#siteLoading').hide();
        },timeout)
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  componentDidMount() {
    if (window.location.pathname === "/") {
      this.getResumeDataEN("init");
    } else {
      this.getResumeDataEN("404");
    }
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => 
            <Fragment>
              <Header
                classLangEN={this.state.classEN}
                classLangES={this.state.classES}
                en={this.getResumeDataEN}
                es={this.getResumeDataES}
                data={this.state.resumeData.main}
              />
              <About data={this.state.resumeData.about} />
              <Work
                title={this.state.resumeData.main}
                data={this.state.resumeData.work}
              />
              <Education
                title={this.state.resumeData.main}
                data={this.state.resumeData.education}
              />
              <Skills
                title={this.state.resumeData.main}
                data={this.state.resumeData.skills}
              />
              {/*<Portfolio
                data={this.state.resumeData.portfolio}
              />
              <Testimonials
                data={this.state.resumeData.testimonials}
              />*/}
              <StaticImage data={this.state.resumeData.main} />
              <Contact data={this.state.resumeData.main} />
              <Footer data={this.state.resumeData.main} />
            </Fragment>
            } />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
