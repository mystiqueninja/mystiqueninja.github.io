var React = require('react');
var jQuery = require('jquery');

class Footer extends React.Component {
  componentDidMount(){
    var footer = jQuery(this.refs.footer.getDOMNode());
    footer.show('slow');
  }
  render(){
    return (
      <footer style={{display: 'none'}} ref="footer" className="footer">
        <div className="container">
          <span className="copyright">&copy;{this.props.year} {this.props.companyName} - {this.props.tagline}</span>
        </div>
      </footer>
    );
  }
}
module.exports = Footer;