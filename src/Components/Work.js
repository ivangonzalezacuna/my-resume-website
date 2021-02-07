import React, { Component } from "react";
import {withTranslation} from "react-i18next";

class Work extends Component {
  render() {
    const { t } = this.props;
    var work = t('work', { returnObjects: true }).map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="resume-sec-title"><i className="fas fa-briefcase"></i>{work.title}</p>
          <p className="date"><i className="fas fa-calendar-alt"></i>{work.years}</p>
          <p className="description">{work.description}</p>
        </div>
      );
    });

    return (
      <section className="resume" id="work">
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>{t('main.navwork')}</span>
            </h1>
          </div>
          <div className="nine columns main-col">{work}</div>
        </div>
      </section>
    );
  }
}

export default Work =  withTranslation('common')(Work);
