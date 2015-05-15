var React = require('react');
var Link = require('react-router').Link;
var Jumbotron = require('../components/Jumbotron.js');
var Header = require('../components/Header.js');
var AppStore = require('../flux/store/app-store');


class SinglePost extends React.Component{
  constructor(){
    super();
    this.state = {
      article: {}
    }
  }
  componentDidMount() {
    this.setState({
      article: AppStore.getSinglePost(this.props.params.slug)
    });
  }
  render(){
    return (
      <div id="single">
        <Header image="/images/bg3.jpg" shadow="white" color="black" content={this.state.article.subtitle} heading={this.state.article.title} parallax={false}/>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
              {this.state.article.meta}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


module.exports = SinglePost;