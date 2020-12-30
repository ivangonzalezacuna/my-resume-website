import React, { Component } from "react";

class Header extends Component {
  render() {
    if (this.props.data) {
      var navhome = this.props.data.navhome;
      var navabout = this.props.data.navabout;
      var naveducation = this.props.data.naveducation;
      var navwork = this.props.data.navwork;
      var navskills = this.props.data.navskills;
      //var navportfolio = this.props.data.navportfolio;
      //var navtestimonials = this.props.data.navtestimonials;
      var navcontact = this.props.data.navcontact;
      var titleintro = this.props.data.titleintro;
      var desc1 = this.props.data.desc1;
      var desc2 = this.props.data.desc2;
      var desc3 = this.props.data.desc3;
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var company = this.props.data.company;
      var city = this.props.data.address.city;
      var country = this.props.data.address.state;
      var headerKey=this.props.data.key;
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                {navhome}
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                {navabout}
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#work">
                {navwork}
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#education">
                {naveducation}
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#skills">
                {navskills}
              </a>
            </li>
            {/*<li>
              <a className="smoothscroll" href="#portfolio">
                {navportfolio}
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#testimonials">
                {navtestimonials}
              </a>
            </li>*/}
            <li>
              <a className="smoothscroll" href="#contact">
                {navcontact}
              </a>
            </li>
            <li className="lang">
              <a type="button" className="smoothscroll" id={this.props.classLangEN} class="btn" href="#en" onClick={this.props.en}>
                <span>
                  <img className="langImg" alt="Select english" src="images/reino-unido.png"></img>
                </span>
              </a>
              <a type="button" className="smoothscroll" id={this.props.classLangES} class="btn" href="#es" onClick={this.props.es}>
                <span>
                  <img className="langImg" alt="Select spanish" src="images/espana.png"></img>
                </span>
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div key={headerKey} className="banner-text">
            <h1 className="responsive-headline">
              {titleintro} {name}
            </h1>
            <h3>
              {desc1} {city} ({country}), {desc2} <span>{occupation}</span>{" "}
              {desc3} <span>{company}</span>
            </h3>
            <hr />
            <ul className="social">{networks}</ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;