import {
    useQuery,
    useQueryClient
} from 'react-query'
import BlogItem from '../../components/blogItems'
import axios from 'axios'
// Package
import { Link } from 'react-router-dom'

const Home = () => {
    const Blogs = async () => {
        const res = await axios.get(`http://127.0.0.1:8080/api/v1/posts`)
        return res.data
    }
    const {data,status} = useQuery('posts',Blogs) 
    if(status==='loading'){
      return <div>Loading...</div>
    }
    return (
        <div className='px-4 mt-10'>
            {
                data.data.map((post)=>(
                    <BlogItem 
                        key={post.id}
                        slug={post.slug}
                        title={post.title}
                        summary={post.summary}
                        topic={post.topics.map((topic)=>(
                            `${topic.name} `
                        ))}
                        date={post.created_at}
                    />
                ))
            }
        </div>
    )
}
export default Home