import React, { Component } from "react";
import {withTranslation} from "react-i18next";

class Footer extends Component {
  render() {
    const { t } = this.props;
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
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">{networks}</ul>
            <ul className="copyright">
              <li>&copy; {t('main.copyright')}</li>
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer = withTranslation('common')(Footer);
