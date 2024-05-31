"use client"

import { Send } from "lucide-react";
import Output from "./components/Output";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [chat, setChat] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [inputPrompt, setInputPrompt] = useState("");
  const handlePromptSubmission = (promptData) => {
    setIsLoading(true);
    axios.post("/api/gpt", {prompt: promptData}).then((res) => {
      const gpt_response = res.data.content;
      setChat((prev) => {
        return [...prev, {prompt: promptData, response: gpt_response}]
      })
      setIsLoading(false);
    })
  }


  return (
    <div className="flex relative flex-col bg-[#353541] w-full h-screen px-10 py-7 items-center">
      <h1 className="text-3xl font-bold text-white">Welcome to CloudGPT</h1>
      {/* Output screen */}
      <div className="h-full w-full overflow-y-auto my-7 rounded-[20px] bg-[#393945]">
        <Output currChat={chat} handleSuggestion={(suggestion) => handlePromptSubmission(suggestion)}/>
      </div>
      {/* User prompt field */}
      <div className="w-full px-32 flex">
        <input 
          value={inputPrompt}
          onChange={(e) => setInputPrompt(e.target.value)}
          type="text"
          placeholder="Enter your query"
          className="bg-[#3f4150] text-white font-medium outline-none text-sm placeholder:text-gray-400 w-full py-3 rounded-xl px-4"
        ></input>
        <button onClick={() => {handlePromptSubmission(inputPrompt); setInputPrompt("");}} className="rounded-2xl transition hover:bg-[#454a71] bg-[#4d527c] py-3 px-7 ml-7 text-white font-medium flex items-center">
          Generate
          <Send className="ml-1" size={18}/>
        </button>
      </div>
      {isLoading && <div className="absolute flex items-center justify-center top-0 left-0 h-full w-full bg-[#00000069]">
        <h1 className="text-4xl font-bold">Loading...</h1>
      </div>}
    </div>
  );
}
