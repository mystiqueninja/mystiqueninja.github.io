var React = require('react');
var Link = require('react-router').Link;
var Jumbotron = require('../components/Jumbotron.js');
var Header = require('../components/Header.js');
var articles = [
  {title: 'Blog comming soon', subtitle: 'to mystiqueNinja', meta: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio ex iusto odit, magni dignissimos asperiores vero cum excepturi nobis quisquam explicabo ipsam. Vel cumque eaque quod! Saepe architecto impedit tempore.', slug: 'welcome2'},
  {title: 'Blog comming soon', subtitle: 'to mystiqueNinja', meta: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio ex iusto odit, magni dignissimos asperiores vero cum excepturi nobis quisquam explicabo ipsam. Vel cumque eaque quod! Saepe architecto impedit tempore.', slug: 'welcome3'},
  {title: 'Blog comming soon', subtitle: 'to mystiqueNinja', meta: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio ex iusto odit, magni dignissimos asperiores vero cum excepturi nobis quisquam explicabo ipsam. Vel cumque eaque quod! Saepe architecto impedit tempore.', slug: 'welcome4'},
  {title: 'Blog comming soon', subtitle: 'to mystiqueNinja', meta: 'this is just an intro blog post', slug: 'welcome1'}
];

class SinglePost extends React.Component{
  render(){
    for (let i in articles) {
      let single = articles[i];
      if (single.slug === this.props.params.slug) var article = single;
    }
    return (
      <div id="single">
        <Header image="/images/bg3.jpg" shadow="white" color="black" content={article.subtitle} heading={article.title} parallax={true}/>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
              {article.meta}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


module.exports = SinglePost;