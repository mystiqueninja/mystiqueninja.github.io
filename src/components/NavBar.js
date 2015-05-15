var React = require('react');
var Link = require('react-router-active-component')("li"); 

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      
    }
  }
  componentDidMount(){
    window.addEventListener('scroll', this.onScrollHandle.bind(this), false);
  }
  onScrollHandle(e){
    var navbar = this.refs.navbar.getDOMNode();
    var navbarHeight = navbar.height;
  }
  componentWillUnount(){
     window.removeEventListener('scroll', this.onScrollHandle.bind(this), false);
  }
  render(){
    return (
    <nav ref="navbar" className="navbar navbar-default navbar-custom navbar-fixed-top">
        <div className="container-fluid">
            <div className="navbar-header page-scroll">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="index.html">{this.props.title}</a>
            </div>
            <div className = "collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <Link to="home">Home</Link>
                    <Link to="blog">Blog</Link>
                    <Link to="contact">Contact</Link>
                </ul>
            </div>
        </div>
    </nav>
    );
  }
}
module.exports = NavBar;