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
    }

    return (
      <section id="contact">
        <div className="row">
          <div className="twelve columns main-col">
            <div className="row">
              <div className="six columns">
                <h2>{contactdetails}</h2>
                <p className="address">
                  <span class="contact-info">
                    <i class="icon-name"></i>
                    {name}
                  </span>
                  <br />
                  <span class="contact-info">
                    <i class="icon-phone"></i>
                    {phone}
                  </span>
                  <br />
                  <span class="contact-info">
                    <i class="icon-mail"></i>
                    {email}
                  </span>
                </p>
              </div>
              <div className="six columns">
                <h2>{contactaddress}</h2>
                <p className="address">
                  <span class="contact-info">
                    <i class="icon icon-home"></i>
                    {street}
                  </span>
                  <br />
                  <span class="contact-info">
                    <i class="icon icon-earth"></i>
                    {zip} {city} - {state}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
