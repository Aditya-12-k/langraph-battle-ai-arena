import { ChatGoogle} from "@langchain/google";
import config = require("../config/config.js");

export const geminiModel = new ChatGoogle({
    model:"gemini-flash-latest",
    apiKey:config.GOOGLE_API_KEY
});

export const grokModel = new ChatOpenAI({
    model: "grok-4.3", // console.x.ai ke Models page se current id check karo
    apiKey: config.GROK_API_KEY,
    configuration: { baseURL: "https://api.x.ai/v1" },
});
export const nvidiaModel = new ChatOpenAI({
    model: "meta/llama-3.3-70b-instruct", // build.nvidia.com/models se id copy karo
    apiKey: config.NVIDIA_API_KEY,
    configuration: { baseURL: "https://integrate.api.nvidia.com/v1" },
});

