var React = require('react');

class Footer extends React.Component {
  componentDidMount(){

  }
  render(){
    return (
      <footer style={{display: 'block'}} ref="footer" className="footer">
        <div className="container">
          <span className="copyright">&copy;{this.props.year} {this.props.companyName} - {this.props.tagline}</span>
        </div>
      </footer>
    );
  }
}
module.exports = Footer;