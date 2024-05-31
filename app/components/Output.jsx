import { Fragment } from "react";
import Prompt from "./Prompt";
import Response from "./Response";
import Suggestions from "./Suggestion";

const Output = ({currChat, handleSuggestion}) => {

    return (  
        <div className="w-full h-full flex flex-col">
            {currChat.length === 0?  
                <div className="flex h-full flex-col px-20 pb-32 justify-end">
                    <h3 className="font-semibold text-2xl text-center mb-8">Start by asking something...</h3>

                    <div className="w-full grid grid-cols-3 gap-x-40">
                        <Suggestions onClick={handleSuggestion} type={"server"} suggestion={"How to setup server on a cloud based VM using Nginx?"}/>
                        <Suggestions onClick={handleSuggestion} type={"cloud"} suggestion={"Compare all the cloud options available in terms of features they provide."}/>
                        <Suggestions onClick={handleSuggestion} type={"handcoins"} suggestion={"Which is the cheapest and affordable cloud platform and how to use it?"}/>
                    </div>
                </div>
                :
                <div className="flex h-full flex-col p-20">
                    {currChat.map((item, idx) => {
                        return (
                            <Fragment key={`prompt${idx}`}>
                                <Prompt prompt={item.prompt}/>
                                <Response response={item.response}/>
                            </Fragment>
                        );
                    })}
                </div>
            }
        </div>
    );
}
 
export default Output;