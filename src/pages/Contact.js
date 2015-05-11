var React = require('react');
var ContactForm = require('../components/ContactForm.js');
var Header = require('../components/Header.js');
class Contact extends React.Component{
  render() {
    return (
      <div id="contact">
        <Header image="/images/bg2.jpg" color="white" content="Hit us up on our contact form" heading="Need a website or a quote?" parallax={true}/>
        <div className="container">
          <div className="jumbotron">
            <h3>Contact us</h3>
            <div className="row">
              <div className="col-md-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>  
    );
  }
}
module.exports = Contact;