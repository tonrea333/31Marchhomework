import {Component} from "react"


export default class Byauthor extends Component{
    constructor(props) {
      super(props)
      this.state = {

              selectOptions : [],
              author: "",
            }
    }
    render(){
      return <div>
      <select>blogAuthor: {this.props.blogAuthor}</select>
      
      </div>
    }
  }

  // {this.state.blogsPosts.filter((blog, idx)=>{
  //   return (
  //     <div>
  //       <byauthor
  //         key={`byauthor-${idx}`}
  //         blogAuthor={blog.author}
  //         blogCreateAt={blog.createdAt}
  //         blogID={blog.id}
  //         blogText={blog.text}
  //         blogTitle={blog.title}
  //       /> 
  //     </div>
  //   )
      
    
  // })}