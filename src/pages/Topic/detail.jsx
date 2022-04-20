import {
    useQuery,
    useMutation,
    useQueryClient
  } from 'react-query'
import axios from 'axios'
import { useParams } from 'react-router-dom'  

const detailTopic = () => {
    let {id} = useParams()
    const dataTopic = async () => {
        const res = await axios.get(`http://127.0.0.1:8080/api/v1/topics/${id}`)
        return res.data
    }
    const {data,status} = useQuery('topic',dataTopic)
    if(status==='loading'){
        return <div>Loading...</div>
    }
    return (
        <div className="p-4 md:w-1/3">
            <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{data.data.name}</h2>
                </div>
            </div>
        </div>
    )
}
export default detailTopic