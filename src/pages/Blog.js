var React = require('react');
var Link = require('react-router').Link;
var Jumbotron = require('../components/Jumbotron.js');
var Header = require('../components/Header.js');
var articles = [
  {title: 'Blog comming soon', subtitle: 'to mystiqueNinja', meta: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio ex iusto odit, magni dignissimos asperiores vero cum excepturi nobis quisquam explicabo ipsam. Vel cumque eaque quod! Saepe architecto impedit tempore.', slug: 'welcome'},
  {title: 'Blog comming soon', subtitle: 'to mystiqueNinja', meta: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio ex iusto odit, magni dignissimos asperiores vero cum excepturi nobis quisquam explicabo ipsam. Vel cumque eaque quod! Saepe architecto impedit tempore.', slug: 'welcome'},
  {title: 'Blog comming soon', subtitle: 'to mystiqueNinja', meta: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio ex iusto odit, magni dignissimos asperiores vero cum excepturi nobis quisquam explicabo ipsam. Vel cumque eaque quod! Saepe architecto impedit tempore.', slug: 'welcome'},
  {title: 'Blog comming soon', subtitle: 'to mystiqueNinja', meta: 'this is just an intro blog post', slug: 'welcome'}
];
class Article extends React.Component{
  render() {
    return (
      <div className="post-preview">
          <a href={'#/blog/posts/' + this.props.slug}>
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
    var Articles = articles.map((article) => {
      return <Article {...article} />;
    });
    return (
      <div id="blog">
        <Header image="/images/bg3.jpg" shadow="white" color="black" content="Have a look through some of my posts, sure you will find something interesting" heading="Welcome to my blog! :)" parallax={true}/>
        <div className="container">
            <div className="row">
               <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                  {Articles}
               </div>
             </div>
          </div>
      </div>
    );
  }
}


module.exports = Home;