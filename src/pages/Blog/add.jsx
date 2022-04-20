import { useState } from "react"
import { useForm } from "react-hook-form"
import axios from "axios"
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

// Component
import MenuBar from "../../components/tipTap"
import TopicList from "../../components/topicList"

const addBlog = () => {
    const {register,handleSubmit} = useForm()
    const [selectedTopics,setSelectedTopics] = useState([])
    const editor = useEditor({
        extensions: [
            StarterKit,
        ],
        content:``,
    })
    const submitData = data =>{
        let formData = {
            'title':data.title,
            'summary':data.summary,
            'content':editor.getHTML(),
            'topic_ids':selectedTopics
        }
        axios.post(`http://127.0.0.1:8080/api/v1/posts`,
        formData,
        {
            headers:{
                "content-type":"application/json"
            }
        })
        .then(res=>{
            if(res.data.status === 'success'){
                alert("Berhasil Input")
                location.reload()
            }else{
                alert("Gagal Input")
                location.reload()
            }
        })
    }
    const getTopicsSelected = (selectedItem) => {
        const temp = selectedItem.map((item)=> item.id)
        setSelectedTopics(temp)
    }
    return (
        <div className="w-full mt-12 px-3">
            <form onSubmit={handleSubmit(submitData)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 dark:bg-slate-100">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Title
                    </label>
                    <input {...register("title")} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="categories" type="text" placeholder="Title..."/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Title
                    </label>
                    <input {...register("summary")} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="categories" type="text" placeholder="Summary..."/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Content
                    </label>
                    <MenuBar editor={editor} />
                    <br/>
                    <br/>
                    <EditorContent {...register('content')} editor={editor}/>
                </div>
                <div className="mb-4">
                    <TopicList onSelectionItemsChange={getTopicsSelected}/>
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
export default addBlog