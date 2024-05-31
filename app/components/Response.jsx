import { CloudCog } from "lucide-react";

const Response = ({response}) => {
    const renderContent = (content) => {
        const lines = content.split('\n');
        return lines.map((line, index) => {
            if (line.startsWith('```')) {
                const language = line.replace(/```/g, '');
                const code = [];
                let i = index + 1;
                while (i < lines.length && !lines[i].startsWith('```')) {
                    code.push(lines[i]);
                    i++;
                }
                return <pre key={index} className={`language-${language}`}><code>{code.join('\n')}</code></pre>;
            }
            if (line.trim() === '') {
                return <br key={index} />;
            }
            return <p key={index}>{line}</p>;
        });
    };  

    return (  
        <div className="flex items-start mt-12">
            <div className="rounded-full p-3 mr-7 flex bg-[#353541] items-center justify-center">
                <CloudCog size={28}/>
            </div>
            <div className="flex flex-col">
                <h1 className="font-semibold mb-3 text-xl">Cloud GPT</h1>
                {response.split('\n\n').map((res,idx) => (
                    <div key={idx}>
                        {renderContent(response)}
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default Response;