var React = require('react');
var Link = require('react-router-active-component')("li"); 


class ContactForm extends React.Component {
  constructor() {
    super();
    this.state = {
      
    }
  }
  render(){
    return (
      <form className="form">
        <div className="input-group form-group">
          <span className="input-group-addon" id="email-addon"><span className="glyphicon glyphicon-envelope"></span></span>
          <input type="email" id="email" className="form-control" aria-describedby="email-addon" placeholder="Email Address"/>
        </div>
        <div className="input-group form-group">
          <span className="input-group-addon" id="number-addon"><span className="glyphicon glyphicon-phone"></span></span>
          <input type="text" id="number" className="form-control" aria-describedby="number-addon" placeholder="Contact Number"/>
        </div>
        <div className="input-group form-group">
          <span className="input-group-addon" id="name-addon"><span className="glyphicon glyphicon-user"></span></span>
          <input type="text" id="name" className="form-control" aria-describedby="name-addon" placeholder="Enter your name"/>
        </div>
        <div className="input-group form-group">
          <span className="input-group-addon" id="message-addon"><span className="glyphicon glyphicon-pencil"></span></span>
          <textarea rows="10" type="text" id="message" className="form-control" aria-describedby="message-addon" placeholder="Type your message...."></textarea>
        </div>
        <button type="submit" style={{width: '100%'}} className="btn btn-primary btn-lg">Send message</button>
      </form>
    );
  }
}
module.exports = ContactForm;