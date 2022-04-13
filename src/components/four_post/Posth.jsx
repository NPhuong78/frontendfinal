import { Link } from "react-router-dom";
import { useEffect , useState } from "react";
import { useHistory } from "react-router-dom";
import SinglePost from "../singlePost/SinglePost";
import { getSidePost } from "../../service/postApi";
import "./posth.css";

export default function Posth({img}) {
  let history = useHistory();
  
   const [listPost,setListPost]=useState([]);

   useEffect(() => {
      const getListPost = async() => {
        const res = await getSidePost()
        setListPost(res.data)
        console.log("check four post : ",res.data)


      }
   getListPost()
    },[])

   const handleClick = (x,postId ) =>{

      history.push(`post/${postId}`)
      console.log("check")

   }
  
  return (
    
    <div className="list-user-container">

              
                <div className="list-user-content">
                    {listPost.length > 0 &&
                        listPost.map((item) => {
                            return (

                            <div className="post">
                              <img
                                className="postImg"
                                src={item.image}
                                alt=""
                              />
                              <div className="postInfo">
                                <div className="postCats">
                                  <span className="postCat">
                                    <Link className="link" to="/posts?cat=Music">
                                      Music
                                    </Link>
                                  </span>
                                  <span className="postCat">
                                    <Link className="link" to="/posts?cat=Life">
                                      Life
                                    </Link>
                                  </span>
                                </div>
                                <div className="postTitle">
                                  <div className="link" onClick={e=>handleClick(e,item.id)}>
                                    {item.title}
                                  </div>
                                  <br/>
                                    <span className="postDate">1 hour ago</span>            
                                </div>
                              </div>
                            </div>

                            )
                        })
                    }

                </div>

            </div>



  );
}
