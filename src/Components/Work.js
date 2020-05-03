import React, { Component } from "react";

class Work extends Component {
  render() {
    if (this.props.data && this.props.title) {
      var title = this.props.title.navwork;
      var work = this.props.data.map(function (work) {
        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <p className="info">
              {work.title}
              <span>&bull;</span> <em className="date">{work.years}</em>
            </p>
            <p>{work.description}</p>
          </div>
        );
      });
    }

    return (
      <section class="resume" id="work">
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>{title}</span>
            </h1>
          </div>
          <div className="nine columns main-col">{work}</div>
        </div>
      </section>
    );
  }
}

export default Work;
