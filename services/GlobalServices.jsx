import axios from "axios";
import OpenAI from "openai";
import { CoachingOptions } from "./options";

export const getToken = async () =>
{
    const result = await axios.get('/api/gettoken');
    return result.data
}

const openai = new OpenAI({

    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.NEXT_AI_OPENROUTER,  
  })
  

export const AIModel=async(topic, coachingOptions,msg) =>{
    const option=CoachingOptions.find((item)=>item.name==coachingOptions)
    const PROMPT=(option.prompt).replace('{user_topic}',topic) 
    
        const completion = await openai.chat.completions.create({
      
          model: "google/gemini-2.0-pro-exp-02-05:free",
      
          messages: [
            {role:'assistant',content:PROMPT},
      
            { role: "user", content: msg }
      
          ],
      
        })
      
        console.log(completion.choices[0].message)
      
      }
