import { useParams } from "react-router-dom";
import ListPosts from "../components/listPost";

const SubCategoria = () => {
    const { subCategoria } = useParams()
    return (
        <ListPosts url={`/posts?subcategoria=${subCategoria}`} />
    )
} 

export default SubCategoria 