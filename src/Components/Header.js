import React, { Component } from "react";
import {withTranslation} from "react-i18next";

class Header extends Component {
  render() {
    const { t, i18n } = this.props;
    var networks = t('main.social', { returnObjects: true }).map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url} target="_blank" rel="noopener noreferrer">
            <i className={network.className}></i>
          </a>
        </li>
      );
    });

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
                {t('main.navhome')}
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                {t('main.navabout')}
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#work">
                {t('main.navwork')}
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#education">
                {t('main.naveducation')}
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#skills">
                {t('main.navskills')}
              </a>
            </li>
            {/*<li>
              <a className="smoothscroll" href="#portfolio">
                {t('main.navportfolio')}
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#testimonials">
                {t('main.navtestimonials')}
              </a>
            </li>*/}
            <li>
              <a className="smoothscroll" href="#contact">
                {t('main.navcontact')}
              </a>
            </li>
            <li className="lang">
              <a type="button" className="smoothscroll" id={this.props.classLangEN} class="btn" href="#en" onClick={() => i18n.changeLanguage('en')}>
                <span>
                  <img className="langImg" alt="Select english" src="images/reino-unido.png"></img>
                </span>
              </a>
              <a type="button" className="smoothscroll" id={this.props.classLangES} class="btn" href="#es" onClick={() => i18n.changeLanguage('es')}>
                <span>
                  <img className="langImg" alt="Select spanish" src="images/espana.png"></img>
                </span>
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div key={t('main.key')} className="banner-text">
            <h1 className="responsive-headline">
              {t('main.titleintro')} {t('main.name')}
            </h1>
            <h3>
              {t('main.desc1')} {t('main.address.city')} ({t('main.address.state')}), {t('main.desc2')} <span>{t('main.occupation')}</span>{" "}
              {t('main.desc3')} <span>{t('main.company')}</span>
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

export default Header = withTranslation('common')(Header);