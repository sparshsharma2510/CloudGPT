import { CloudCog, UserRound } from "lucide-react";

const Prompt = ({prompt}) => {
    return (  
        <div className="flex items-start">
            <div className="rounded-full p-3 mr-7 flex bg-[#353541] items-center justify-center">
                <UserRound size={28}/>
            </div>
            <div className="flex flex-col">
                <h1 className="font-semibold mb-3 text-xl">You</h1>
                <p>{prompt}</p>
            </div>
        </div>
    );
}
 
export default Prompt;