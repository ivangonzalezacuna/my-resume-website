import React, { Component } from "react";
import ReactGA from "react-ga";
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
    //const load = document.getElementById('siteLoading')
    $.ajax({
      url: "/en.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        $('#siteLoading').show();
        this.setState({ resumeData: data, classEN: "selected", classES: "" });
        //if (init === "init") {
          setTimeout(()=>{ 
            //load.outerHTML='';
            $('#siteLoading').fadeOut();
          },500)
        //}
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  getResumeDataES() {
    $.ajax({
      url: "/es.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        $('#siteLoading').show();
        this.setState({ resumeData: data, classEN: "", classES: "selected"  });
        setTimeout(()=>{ 
          $('#siteLoading').fadeOut();
        },500)
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  componentDidMount() {
    this.getResumeDataEN("init");
  }

  render() {
    return (
      <div className="App">
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
      </div>
    );
  }
}
export default App;
