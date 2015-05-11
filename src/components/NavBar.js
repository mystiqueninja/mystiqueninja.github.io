var React = require('react');
var Link = require('react-router-active-component')("li"); 
var jQuery = require('jquery');

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      
    }
  }
  componentDidMount(){
    var $ = jQuery;
    var MQL = 1140;
    if ($(window).width() > MQL) {
    var headerHeight = $(this.refs.navbar.getDOMNode()).height();
    $(window).on('scroll', {
            previousTop: 0
        },
        () => {
            var currentTop = $(window).scrollTop();
            //check if user is scrolling up
            if (currentTop < this.previousTop) {
                //if scrolling up...
                if (currentTop > 0 && $(this.refs.navbar.getDOMNode()).hasClass('is-fixed')) {
                    $(this.refs.navbar.getDOMNode()).addClass('is-visible');
                } else {
                    $(this.refs.navbar.getDOMNode()).removeClass('is-visible is-fixed');
                }
            } else {
                //if scrolling down...
                $(this.refs.navbar.getDOMNode()).removeClass('is-visible');
                if (currentTop > headerHeight && !$(this.refs.navbar.getDOMNode()).hasClass('is-fixed')) $(this.refs.navbar.getDOMNode()).addClass('is-fixed');
            }
            this.previousTop = currentTop;
        });
    }
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