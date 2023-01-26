import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const {data: blogs, loading, error} = useFetch('http://localhost:8000/blogs')
    return (
    <div className="home">
        { /* Conditional Templates */ }
        { /*JS evalua la primera parte y si es falsa no continua con la siguiente condición, es un if modo react i guess*/ }
        { error && <div>{ error }</div> }
        { loading && <div>Loading....</div> }
        { blogs && <BlogList blogs ={ blogs } title="All Blogs!" /> }

        { /* <BlogList blogs ={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs!"/> */ }
    </div>
    );
}
 
export default Home;