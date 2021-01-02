import React, { Component } from "react";

class Contact extends Component {
  render() {
    if (this.props.data) {
      var contactdetails = this.props.data.contactdetails;
      var contactaddress = this.props.data.contactaddress;
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var mailto = "mailto:" + email;
      var contactmessage = this.props.data.contactmessage;
      var formname = this.props.data.contact.formName;
      var formmail = this.props.data.contact.formEmail;
      var formsubject = this.props.data.contact.formSubject;
      var formmessage = this.props.data.contact.formMessage;
      var formsubmit = this.props.data.contact.formSubmit;
      var formsuccess = this.props.data.contact.formSuccess;
      var formerror = this.props.data.contact.formError;
      var formmissingname = this.props.data.contact.formMissingName;
      var formmissingemail = this.props.data.contact.formMissingEmail;
      var formmissingmessage = this.props.data.contact.formMissingMessage;
    }

    return (
    <section id="contact">
      <div className="row section-head">
        <div className="four columns header-col" id="contactFormTitle">
          <h2><span>{contactmessage}</span></h2>
        </div>
      </div>
      <div className="row">
        <div className="eight columns">
          <form action="" method="post" id="contactForm" name="contactForm">
            <fieldset>
              <div>
                <label htmlFor="contactName">{formname} <span className="required">*</span></label>
                <input type="text" size="35" id="contactName" name="contactName" onChange={this.handleChange}/>
              </div>
              <div id="message-missing-name"><i className="fas fa-exclamation-circle"></i>{formmissingname}</div>
              <div>
                <label htmlFor="contactEmail">{formmail} <span className="required">*</span></label>
                <input type="email" size="35" id="contactEmail" name="contactEmail" onChange={this.handleChange}/>
              </div>
              <div id="message-missing-email"><i className="fas fa-exclamation-circle"></i>{formmissingemail}</div>
              <div>
                <label htmlFor="contactSubject">{formsubject}</label>
                <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange}/>
              </div>
              <div>
                <label htmlFor="contactMessage">{formmessage} <span className="required">*</span></label>
                <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
              </div>
              <div id="message-missing-message"><i className="fas fa-exclamation-circle"></i>{formmissingmessage}</div>
              <div>
                <button className="submit">{formsubmit}</button>
                <span id="image-loader">
                  <img alt="" src="images/loader.svg"/>
                </span>
              </div>
            </fieldset>
          </form>
          <div id="message-warning">
            <i className="fas fa-exclamation-circle"></i>{formerror}
          </div>
          <div id="message-success">
            <i className="fas fa-check-circle"></i>{formsuccess}<br />
          </div>
        </div>
        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h2>{contactdetails}</h2>
            <div className="address">
              <span className="contact-info"><i className="icon fas fa-user fa-lg"></i>{name}</span>
              <br />
              <span className="contact-info"><i className="icon fas fa-phone fa-lg"></i>{phone}</span>
              <br />
              <span className="contact-info"><i className="icon fas fa-envelope fa-lg"></i><a href={mailto}>{email}</a></span>
            </div>
				  </div>
          <div className="widget widget_contact">
            <h2>{contactaddress}</h2>
            <p className="address">
              <span className="contact-info"><i className="icon fas fa-home fa-lg"></i>{street}</span>
              <br />
              <span className="contact-info"><i className="icon fas fa-globe-europe fa-lg"></i>{zip} {city} - {state}</span>
            </p>
				  </div>
        </aside>
      </div>
    </section>
    );
  }
}

export default Contact;
