var React = require('react');

class Jumbotron extends React.Component {
  constructor() {
    super();
    this.state = {
      
    };
  }
  render(){
    return (
      <div className="jumbotron" style={{padding: '48px 38px', margin: '0px'}}>
        <h1>{this.props.heading}</h1>
        <p>{this.props.content}</p>
        <a className="btn btn-primary btn-lg" href="#">{this.props.button}</a>
      </div>
    );
  }
}
module.exports = Jumbotron;