import { useForm } from "react-hook-form"
import axios from "axios"
const addTopics = () => {
    const {register,handleSubmit} = useForm()
    const submitData = data =>{
        axios.post(`https://6023-2001-448a-5122-3fdb-94a1-f799-294-6cfd.ngrok.io/api/v1/topics`,
        data,
        {
            headers:{
                "content-type":"application/json"
            }
        })
        .then(res=>{
            console.log(res)
        })
    }
    return (
        <div className="w-full mt-12 px-3">
            <form onSubmit={handleSubmit(submitData)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Topic
                    </label>
                    <input {...register("name")} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="categories" type="text" placeholder="categories"/>
                </div>
                <div className="flex items-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="submit">
                        Add
                    </button>
                </div>
            </form>
        </div>
    )
}
export default addTopics