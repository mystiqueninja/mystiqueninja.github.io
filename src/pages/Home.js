var React = require('react');
var Jumbotron = require('../components/Jumbotron.js');
var Header = require('../components/Header.js');
var articles = [
  {title: 'Welcome', subtitle: 'to mystiqueNinja', meta: 'this is just an intro blog post'},
  {title: 'Welcome', subtitle: 'to mystiqueNinja', meta: 'this is just an intro blog post'},
  {title: 'Welcome', subtitle: 'to mystiqueNinja', meta: 'this is just an intro blog post'},
  {title: 'Welcome', subtitle: 'to mystiqueNinja', meta: 'this is just an intro blog post'}
];
class Article extends React.Component{
  render() {
    return (
      <div className="post-preview">
          <a href={this.props.url}>
              <h2 className="post-title">{this.props.title}</h2>
              <h3 className="post-subtitle">{this.props.subtitle}</h3>
          </a>
          <p className="post-meta">{this.props.meta}</p>
      </div>
    );
  }
}
class Home extends React.Component{
  render () {
    return (
      <div id="home">
        <Header image="/images/bg1.jpg" color="white" align="center" parallax={true} heading="Have a look at our greate websites" content="Contents"/>
      </div>
    );
  }
}
module.exports = Home;