import React, { Component } from "react";

class Skills extends Component {
  render() {
    if (this.props.data) {
      var skilltext = this.props.data.skilltext;
      var skills1 = this.props.data.skills1.map(function (skills1) {
        var className = "bar-expand " + skills1.name.toLowerCase();
        return (
          <li key={skills1.name}>
            <span style={{ width: skills1.level }} className={className}></span>
            <em>{skills1.name}</em>
          </li>
        );
      });
      var skills2 = this.props.data.skills2.map(function (skills2) {
        var className = "bar-expand " + skills2.name.toLowerCase();
        return (
          <li key={skills2.name}>
            <span style={{ width: skills2.level }} className={className}></span>
            <em>{skills2.name}</em>
          </li>
        );
      });
    }

    return (
      <section class="resume" id="skills">
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>
        </div>
        <br />
        <div className="row skill">
          <div className="six columns">
            <div className="bars">
              <ul className="skills">{skills1}</ul>
            </div>
          </div>
          <div className="six columns">
            <div className="bars">
              <ul className="skills">{skills2}</ul>
            </div>
          </div>
        </div>
        <div className="row skilltext">
          <div className="twelve columns header-col">
            <p>{skilltext}</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
