import Downshift from 'downshift'
import {
    useQuery,
    useQueryClient
  } from 'react-query'
  import axios from 'axios'
import { useState } from 'react'

const topicList = ({onSelectionItemsChange}) => {
  const queryClient = useQueryClient()
  const [selectedItems , setSelectedItems] = useState([])
  const Topic = async () =>{ 
    let res = await axios.get(`http://127.0.0.1:8080/api/v1/topics`)
    return res.data
  }
  const {data,status} = useQuery('topics',Topic) 
  if(status==='loading'){
    return <div>Loading...</div>
  }
  const items = data.data.map(topic => ({
      id:topic.id,
      name:topic.name
  }))
  const itemToString = item => (item? item.id : '')
  return (
    <>
        <Downshift itemToString={itemToString} onChange={changeHandler(selectedItems,setSelectedItems,onSelectionItemsChange)}>
            {
                ({
                    getLabelProps,
                    getMenuProps,
                    getItemProps,
                    getToggleButtonProps,
                    isOpen,
                    inputValue
                })=>(
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" {...getLabelProps()}>Topics</label>
                        <button {...getToggleButtonProps()} className='bg-slate-600 rounded-md text-white px-3 py-1'>{isOpen?'close':'open'}</button>
                        <ul {...getMenuProps()}>
                            {isOpen
                                ? items
                                .filter(
                                  item =>
                                    !selectedItems.find(({ id }) => id === item.id) &&
                                    item.name.includes(inputValue)
                                ).map(item=>(<li {...getItemProps({item,key:item.id})}>{item.name}</li>))
                                : null
                            }
                        </ul>
                        <div className='pt-2'>
                            {selectedItems.map((value, i) => {
                            return (
                                <div key={value.id} className='flex items-center pt-2'>
                                    <span className='mr-1 bg-slate-800 text-white px-8 py-1 rounded-md'>
                                        {value.name}
                                    </span>
                                    <button
                                        onClick={() =>
                                            removeSelectedItemByIndex(
                                                i,
                                                selectedItems,
                                                setSelectedItems,
                                                onSelectionItemsChange
                                            )
                                        }
                                        className='bg-slate-300 text-white rounded-md px-1 py-1 hover:bg-slate-600'
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            );
                            })}
                        </div>
                    </div>
                )
            }
        </Downshift>
    </>
  )
}
const changeHandler = (
    selectedItems,
    setSelectedItems,
    onSelectionItemsChange
  ) => {
    return (selectedItem, downshift) => {
      if (!selectedItem) return;
      const i = selectedItems.findIndex(item => item.id === selectedItem.id);
      if (i === -1) setSelectedItems([...selectedItems, selectedItem]);
      onSelectionItemsChange([...selectedItems, selectedItem]);
      downshift.clearSelection();
    };
  }
  
 const removeSelectedItemByIndex = (
    i,
    selectedItems,
    setSelectedItems,
    onSelectionItemsChange
  ) => {
    const temp = [...selectedItems];
    temp.splice(i, 1);
    setSelectedItems(temp);
    onSelectionItemsChange(temp);
  }
export default topicList