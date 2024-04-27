import { useState } from "react"

export const Random = ()=>{

    const [postInputs, setPostInputs] = useState({
        username: " "
    })
    return(
        <div >
            {JSON.stringify(postInputs)}
            <InputEvent onChange={(e)=>{
                setPostInputs(()=>({
                        username: e.target.value
    
                }))
            }}/>
            
        </div>
    )
}

//@ts-ignore
function InputEvent({name, onChange}){
    return(
        <div>
            <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{name}</label>
            <input onChange={onChange} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
        </div>
        </div>
    )


}