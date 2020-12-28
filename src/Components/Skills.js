import React, { Component } from "react";

class Skills extends Component {
  render() {
    if (this.props.data && this.props.title) {
      var title = this.props.title.navskills;
      var skilltext = this.props.data.skilltext;
      var skills1 = this.props.data.skills1.map(function(skills1) {
        var className = "bar-expand " + skills1.id.toLowerCase();
        var keyName = skills1.id.toLowerCase();
        return (
          <div className="bar" key={keyName}>
            <div className="skill-info">
              <em className="name">{skills1.name}</em>
              <em className="subname">{skills1.subname}</em>
              <span style={{ width: skills1.level }} className={className}></span>
            </div>
            <div className="progress-line"><span style={{ width: skills1.level }}></span><p>{skills1.level}</p></div>
          </div>
        );
      });
      var skills2 = this.props.data.skills2.map(function (skills2) {
        var className = "bar-expand " + skills2.id.toLowerCase();
        var keyName = skills2.id.toLowerCase();
        return (
          <div className="bar" key={keyName}>
            <div className="skill-info">
              <em className="name">{skills2.name}</em>
              <em className="subname">{skills2.subname}</em>
              <span style={{ width: skills2.level }} className={className}></span>
            </div>
            <div className="progress-line"><span style={{ width: skills2.level }}></span><p>{skills2.level}</p></div>
          </div>
        );
      });
    }

    return (
      <section className="resume" id="skills">
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>{title}</span>
            </h1>
          </div>
        </div>
        <br />
        <div className="row skill">
          <div className="six columns">
            <div className="skills-bar">
              {skills1}
            </div>
          </div>
          <div className="six columns">
            <div className="skills-bar">
              {skills2}
            </div>
          </div>
        </div>
        <div className="row skilltext">
          <div className="twelve columns">
            <p>{skilltext}</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
