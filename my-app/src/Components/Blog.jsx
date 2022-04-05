
import {Component} from "react"


export default class Blog extends Component{
    constructor(props) {
      super(props);
    }
    render(){
      return <div>
      <select >blogAuthor: {this.props.blogAuthor}</select>
      <div>blogCreateAt: {this.props.blogCreateAt}</div>
      <div>blogId: {this.props.blogID}</div>
      <div>blogText: {this.props.blogText}</div>
      <div>blogTitle: {this.props.blogTitle}</div>
      </div>
    }
  }