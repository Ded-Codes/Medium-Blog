import { Auth } from "../components/Auth"
import { Quotes } from "../components/Quotes"


export const Signup = () =>{
    return (
        <div className="grid grid-cols-2">
            <div>
                <Auth/>
            </div>
            <div className="invisible lg:visible">
                <Quotes/>
            </div>
           
        </div>
    )
}