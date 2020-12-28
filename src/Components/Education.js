import React, { Component } from "react";

class Education extends Component {
  render() {
    if (this.props.data && this.props.title) {
      var title = this.props.title.naveducation;
      var education = this.props.data.map(function (education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="resume-sec-title">
              {education.degree}<span>&bull;</span><span className="date">{education.graduated}</span>
            </p>
            <p className="description">{education.description}</p>
          </div>
        );
      });
    }

    return (
      <section className="resume" id="education">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>{title}</span>
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

export default Education;
