import User from "../user/User"
import { useState } from "react"
const Users=(props)=>{
    const {users}=props
    const[isOpenId,setIsOpenId]=useState()
    return(
        <div className="users">
            {users.map(item=>{
                return (
                    <User
                    key={item.id}
                    title={item.title}
                    content={item.content}
                    id={item.id}
                    isOpenId={{isOpenId,setIsOpenId}}
                    />
                )
            })}
        </div>
    )
}
export default Users