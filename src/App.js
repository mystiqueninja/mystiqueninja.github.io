/* React */
var React        = require('react'), 
    TransitionGroup = require('react/lib/ReactCSSTransitionGroup');

/* ReactRouter */
var Router       = require('react-router'), 
    Route        = Router.Route,
    DefaultRoute = Router.DefaultRoute, 
    RouteHandler = Router.RouteHandler;

/* Components */
var NavBar = require('./components/NavBar.js'),
    Header = require('./components/Header.js'),
    Home = require('./pages/Home.js'),
    Contact = require('./pages/Contact.js'),
    Blog = require('./pages/Blog.js'),
    SinglePost = require('./pages/SinglePost.js'),
    Footer = require('./components/Footer.js');

/*
* Main app
*/
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      
    }
  }
  render(){
    return (
      <div id="App">
        <NavBar title="MystiqueNinja"/>
        <TransitionGroup transitionName="page">
          <RouteHandler params={this.context.router.getCurrentParams()} key={this.context.router.getCurrentPath()} />
          <Footer tagline="Designing a better future" companyName="MystiqueNinja" year="2015" />
        </TransitionGroup>
      </div>
    );
  }
}
App.contextTypes = {
  router: React.PropTypes.func
};
/* App routes */
var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="home" path="/home" handler={Home} />
    <Route name="contact" path="/contact-us" handler={Contact} />
    <Route name="blog" path="/blog" handler={Blog} />
    <Route name="post" path="/post/:slug" handler={SinglePost}/>
    <DefaultRoute handler={Home} />
  </Route>
);
Router.run(routes, function (Handle) {
  React.render(<Handle />, document.body);
});