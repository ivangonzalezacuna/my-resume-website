import React, { Component } from "react";
import {withTranslation} from "react-i18next";

class Education extends Component {
  render() {
    const { t } = this.props;
    var education = t('education', { returnObjects: true }).map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="resume-sec-title"><i className="fas fa-user-graduate"></i>{education.degree}</p>
          <p className="date"><i className="fas fa-calendar-alt"></i>{education.graduated}</p>
          <p className="description">{education.description}</p>
        </div>
      );
    });

    return (
      <section className="resume" id="education">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>{t('main.naveducation')}</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Education = withTranslation('common')(Education);
