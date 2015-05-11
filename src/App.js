var React        = require('react');
var TransitionGroup = require('react/lib/ReactCSSTransitionGroup');

var Router       = require('react-router'), 
    Route        = Router.Route,
    DefaultRoute = Router.DefaultRoute, 
    RouteHandler = Router.RouteHandler;

var NavBar = require('./components/NavBar.js');
var Header = require('./components/Header.js')

var Home = require('./pages/Home.js');
var Contact = require('./pages/Contact.js');
var Blog = require('./pages/Blog.js');

////var Jumbotron = require('./components/Jumbotron.js');
//var Header = require('./components/Header.js');
var Footer = require('./components/Footer.js');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      
    }
  }
  render(){
    console.log(name);
    return (
      <div id="App">
        <NavBar title="MystiqueNinja"/>
        <TransitionGroup transitionName="page">
          <RouteHandler key={this.context.router.getCurrentPath()} />
          <Footer tagline="Designing a better future" companyName="MystiqueNinja" year="2015" />
        </TransitionGroup>
        
      </div>
    );
  }
}
App.contextTypes = {
  router: React.PropTypes.func
};
var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="home" path="/home" handler={Home} />
    <Route name="contact" path="/contact-us" handler={Contact} />
    <Route name="blog" path="/blog" handler={Blog} />
    <DefaultRoute handler={Home} />
  </Route>
);
Router.run(routes, function (Handle) {
  React.render(<Handle />, document.body);
});


jQuery(function ($){
  $('#no-js').css({display: 'none'});
}(jQuery));