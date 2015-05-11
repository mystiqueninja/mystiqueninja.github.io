var React = require('react');
var jQuery = require('jquery');
class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      
    }
  }
  componentDidMount() {
    if (this.props.parallax) {
      var header = jQuery(this.refs.header.getDOMNode());
      var win = jQuery(window);
      win.on('scroll', function (e) {
        var scrollTop = win.scrollTop();
        header.css({
          'backgroundPosition': '0px ' + (Math.floor(scrollTop*0.3)) + 'px'
        });
      });
    }
  }
  render(){
    var style = {
      header: {
        backgroundImage: 'url(' + this.props.image + ')',
        backgroundPosition: '0px 0px'
      },
      text: {
        color: this.props.color + ' !important',
        textShadow: '0px 0px 4px ' + this.props.shadow
      }
    }
    return (
      <header ref="header" className="intro-header" style={style.header}>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                    <div className="site-heading">
                        <h1 style={style.text}>{this.props.heading}</h1>
                        <hr className="small" />
                        <h3 style={style.text} className="subheading">{this.props.content}</h3>
                    </div>
                </div>
            </div>
        </div>
    </header>
    );
  }
}
module.exports = Header;