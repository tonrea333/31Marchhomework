
import './App.css';
import React, { Component } from "react";
import Blog from "./Components/Blog.jsx"
import Byauthor from './Components/Byauthor';



const endpointURL = "https://6239ddb128bcd99f02763cfe.mockapi.io/blogs"
console.log(endpointURL)
const fetchBlogFromAPI = async () => {
  const getBlogs = {
    method: "GET",
  }

  const response = await fetch(`${endpointURL}`, getBlogs)
  // const  = await response.json();
  // console.log("fetched",await response.json() )
  console.log(response)
  return await response.json()



  // const blogResponse = await response;
  // console.log(response)
}







class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogsPosts: [{

        author: "Joe Smith",
        createdAt: "date",
        id: 2,
        text: "text",
        title: "title",
      }
      ]
    }
  }
// class
//   constructor (props){
//     super(props)
//     this.state = {

//       selectOptions : [],
//       author: "",
//     }
//   }

  // handleBlogInfo = async (event) => {
  //   const blogUs = await fill(this.state.author, this.state.createdAt, this.state.id, this.state.text, this.state.title)
  // }





  render() {

    //idx = current index of the element 

    return (
      <div>
        {this.state.blogsPosts.map((blog, idx) => {

          return (
            <div>
              <Blog
                key={`Blog-${idx}`}
                blogAuthor={blog.author}
                blogCreateAt={blog.createdAt}
                blogID={blog.id}
                blogText={blog.text}
                blogTitle={blog.title}
              />
            </div>
          )
        })}

        {this.state.blogsPosts.filter((blog,idx)=>{
          return blog.author (
           
          ).map(()=>{
            return (
              <div>
              <Byauthor
              key={`Byauthor-${idx}`}
              blogAuthor={blog.author}
              />
            </div>
            )
          })
        })}


        <button onClick={async () => {
          const blogInfo = await fetchBlogFromAPI()
          console.log("bloginfo", blogInfo)
          this.setState({
            blogsPosts: blogInfo
          })
        }}>Click</button>




        <button onClick={async () => {
          const blogInfo2 = await fetchBlogFromAPI()
          console.log("bloginfo", blogInfo2)
          console.log(blogInfo2)
          this.setState({
            selectOptions: blogInfo2
          })


        }}>Filter by Author</button>
      </div>


    );
  }
}

export default App;
