import React, { Component } from "react";
import {withTranslation} from "react-i18next";

class Contact extends Component {
  render() {
    const { t } = this.props;

    return (
    <section id="contact">
      <div className="row section-head">
        <div className="four columns header-col" id="contactFormTitle">
          <h2><span>{t('main.contactmessage')}</span></h2>
        </div>
      </div>
      <div className="row">
        <div className="eight columns">
          <form action="" method="post" id="contactForm" name="contactForm">
            <fieldset>
              <div>
                <label htmlFor="contactName">{t('main.contact.formName')} <span className="required">*</span></label>
                <input type="text" size="35" id="contactName" name="contactName" onChange={this.handleChange}/>
              </div>
              <div id="message-missing-name"><i className="fas fa-exclamation-circle"></i>{t('main.contact.formMissingName')}</div>
              <div>
                <label htmlFor="contactEmail">{t('main.contact.formEmail')} <span className="required">*</span></label>
                <input type="email" size="35" id="contactEmail" name="contactEmail" onChange={this.handleChange}/>
              </div>
              <div id="message-missing-email"><i className="fas fa-exclamation-circle"></i>{t('main.contact.formMissingEmail')}</div>
              <div>
                <label htmlFor="contactSubject">{t('main.contact.formSubject')}</label>
                <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange}/>
              </div>
              <div>
                <label htmlFor="contactMessage">{t('main.contact.formMessage')} <span className="required">*</span></label>
                <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
              </div>
              <div id="message-missing-message"><i className="fas fa-exclamation-circle"></i>{t('main.contact.formMissingMessage')}</div>
              <div>
                <button className="submit">{t('main.contact.formSubmit')}</button>
                <span id="image-loader">
                  <img alt="" src="images/loader.svg"/>
                </span>
              </div>
            </fieldset>
          </form>
          <div id="message-warning">
            <i className="fas fa-exclamation-circle"></i>{t('main.contact.formError')}
          </div>
          <div id="message-success">
            <i className="fas fa-check-circle"></i>{t('main.contact.formSuccess')}<br />
          </div>
        </div>
        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h2>{t('main.contactdetails')}</h2>
            <div className="address">
              <span className="contact-info"><i className="icon fas fa-user fa-lg"></i>{t('main.name')}</span>
              <br />
              <span className="contact-info"><i className="icon fas fa-phone fa-lg"></i>{t('main.phone')}</span>
              <br />
              <span className="contact-info"><i className="icon fas fa-envelope fa-lg"></i><a href={"mailto:" + t('main.email')}>{t('main.email')}</a></span>
            </div>
				  </div>
          <div className="widget widget_contact">
            <h2>{t('main.contactaddress')}</h2>
            <p className="address">
              <span className="contact-info"><i className="icon fas fa-home fa-lg"></i>{t('main.address.street')}</span>
              <br />
              <span className="contact-info"><i className="icon fas fa-globe-europe fa-lg"></i>{t('main.address.zip')} {t('main.address.city')} - {t('main.address.state')}</span>
            </p>
				  </div>
        </aside>
      </div>
    </section>
    );
  }
}

export default Contact = withTranslation('common')(Contact);
