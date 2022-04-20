import BlogItem from '../../components/blogItems'
// Package
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='px-4 mt-10'>
            <BlogItem title="Title"/>
            <BlogItem title="Title"/>
            <BlogItem title="Title"/>
            <BlogItem title="Title"/>
            <BlogItem title="Title"/>
        </div>
    )
}
export default Home