import { AssemblyAI } from "assemblyai"

const AssemblyAi= new AssemblyAI({apiKey:process.env.ASSEMBLY_API_KEY})

export async function GET(ref){
    const token = await AssemblyAi.realtime.createTemporaryToken({expires_in:3600})
    return NextREsponse.json(token);
}