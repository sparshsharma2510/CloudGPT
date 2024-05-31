import { ServerCog, Cloud, HandCoins } from "lucide-react";

const Suggestions = ({suggestion, type, onClick}) => {
    const icons = {
        "server": <ServerCog strokeWidth={1.5} size={40} color="#1a1a1a"/>,
        "cloud": <Cloud strokeWidth={1.5} size={40} color="#4879db"/>,
        "handcoins": <HandCoins strokeWidth={1.5} size={40} color="#6cc027"/>
    }

    return (  
        <div onClick={() => onClick(suggestion)} className="border cursor-pointer transition hover:bg-[#52525f] border-gray-400 p-6 bg-[#4c4c58] rounded-2xl flex flex-col">
            <div className="w-full flex justify-center mb-3">
                {icons[type]}
            </div>
            <p className="text-center text-sm font-medium">{suggestion}</p>
        </div>
    );
}
 
export default Suggestions;