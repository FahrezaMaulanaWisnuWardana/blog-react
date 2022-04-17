import {
  useQuery,
  useMutation,
  useQueryClient
} from 'react-query'
import axios from 'axios'
import { Link } from 'react-router-dom'

const topic = () =>{
    const queryClient = useQueryClient()
    const dataTopic = async () => {
        let res = await axios.get(`https://6023-2001-448a-5122-3fdb-94a1-f799-294-6cfd.ngrok.io/api/v1/topics`)
        return res.data
    }
    const {data,status} = useQuery('topics',dataTopic)
    if(status==='loading'){
        return <div>Loading...</div>
    }
    return (
        <>
        
            {
                data.data.map((topic) => (
                    <Link to={`/topic/detail/${topic.id}`} key={topic.id} className="p-4 md:w-1/3">
                        <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{topic.name}</h2>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </>
    )
}
export default topic