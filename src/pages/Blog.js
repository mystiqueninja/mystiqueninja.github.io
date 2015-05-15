var React = require('react');
var Link = require('react-router').Link;
var Jumbotron = require('../components/Jumbotron.js');
var Header = require('../components/Header.js');
var actions = require('../flux/actions/app-actions');
var AppStore = require('../flux/store/app-store');
class Post extends React.Component{
  render() {
    return (
      <div className="post-preview">
          <a href={'#/post/' + this.props.id}>
              <h2 className="post-title">{this.props.title}</h2>
              <h3 className="post-subtitle">{this.props.subtitle}</h3>
          </a>
          <p className="post-meta">{this.props.meta}</p>
          <p><small>Comments: {this.props.comments.length} | Likes: | Shares:</small></p>
      </div>
    );
  }
}
class Blog extends React.Component{
  constructor(){
    super();
//    AppStore.addChangeListener()
    this.state ={
      posts: AppStore.getAllPosts()
    };
  }
  render () {
    var Posts = this.state.posts.map((post) => {
      return <Post {...post} />;
    });
    return (
      <div id="blog">
        <Header image="/images/bg3.jpg" shadow="white" color="black" content="Have a look through some of my posts, sure you will find something interesting" heading="Welcome to my blog! :)" parallax={true}/>
        <div className="container">
            <div className="row">
               <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                  {Posts}
               </div>
             </div>
          </div>
      </div>
    );
  }
}
module.exports = Blog;