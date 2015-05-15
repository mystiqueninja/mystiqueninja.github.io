var React = require('react');
class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      scrollTop: 0
    }
  }
  parallax(e) {
    this.setState({scrollTop: window.scrollY});
  }
  componentDidMount() {
    if (this.props.parallax) 
      window.addEventListener('scroll', this.parallax.bind(this), false);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.parallax, false)
  }
  render(){
    var style = {
      header: {
        backgroundImage: 'url(' + this.props.image + ')',
        'backgroundPosition': '0px ' + (Math.floor(this.state.scrollTop*0.3)) + 'px'
      },
      text: {
        color: this.props.color + ' !important',
        textShadow: '0px 0px 4px ' + this.props.shadow
      },
      hr: {
        borderColor: this.props.color + ' !important',
      }
    }
    return (
      <header ref="header" className="intro-header" style={style.header}>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                    <div className="site-heading">
                        <h1 style={style.text}>{this.props.heading}</h1>
                        <hr style={style.hr} className="small" />
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