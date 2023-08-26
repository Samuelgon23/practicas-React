import { useState, useEffect } from "react"
import "../assets/css/componentes/card.css"
import { buscar } from "../api/api"
import { Link } from "react-router-dom"


const ListPosts = ({ url }) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        buscar(url, setPosts)
    }, [url])  //los corchetes significan que ademas de esta funcion va a llevar un arreglos de dependencias y quiere decir que cada vez que se cambie de url se ejecute esta funcion, la de arriba

    return (
       <section className="posts container">
        {
            posts.map( post => {
          const { id, title, metadescription, categoria } = post;
            return <Link to={`/posts/${id}`} className={`post__card post-card--${categoria}`} key={id}>
             <article >
               <h3 className="post-card__title">
                    {title}
               </h3>
               <p className="post-card__meta">{metadescription}</p>
                </article>
                </Link>
                })
            }
       </section> 
    )
}

export default ListPosts