var React = require('react');
var Link = require('react-router').Link;
var Jumbotron = require('../components/Jumbotron');
var Header = require('../components/Header');
var AppStore = require('../flux/store/app-store');
var AppActions = require('../flux/actions/app-actions');

var Comments = React.createClass({

  render: function () {
    console.log(this.props)
    var Coms = this.props.data.map(function (comment){
      return (
        <li>
          {comment.text}
        </li>
      );
    });
    return <ul>{Coms}</ul>
  }
});
    
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
  handleCommentSubmit(e){
    e.preventDefault();
    var newComment = {
      text: this.refs.commentText.getDOMNode().value
    }
    AppActions.addComment(this.props.params.slug, newComment);
  }
  render(){
    console.log(this.state.article)
    return (
      <div id="single">
        <Header image="/images/bg3.jpg" shadow="white" color="black" content={this.state.article.subtitle} heading={this.state.article.title} parallax={false}/>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
              {this.state.article.meta}
              <hr />
              <b>Comments</b>
              { this.state.article.comments ? <Comments data={this.state.article.comments} /> : null}
              <form onSubmit={this.handleCommentSubmit.bind(this)}>
                <textarea ref="commentText" type="text"></textarea>
                <button className="btn btn-success btn-lg" type="submit">Post Comment</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


module.exports = SinglePost;