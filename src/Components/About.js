import React, { Component } from "react";
import {withTranslation} from "react-i18next";

class About extends Component {
  render() {
    const { t } = this.props;

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={"images/" + t('about.image')}
              alt="Iván González Profile Pic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>{t('about.title')}</h2>
            <p>{t('about.bio')}</p>
            <div className="row">
              <div className="columns download">
                <p>
                  <a href={t('about.resumedownload')} className="button" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-cloud-download-alt"></i>
                    {t('about.download')}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About = withTranslation('common')(About);
