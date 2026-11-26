import {config} from "dotenv";
config();

type CONFIG = {
   readonly GOOGLE_API_KEY:String;
     readonly GROK_API_KEY:String;
     readonly NVIDIA_API_KEY:String;
}
const config:CONFIG={
    GOOGLE_API_KEY:process.env.GOOGLE_API_KEY || "",
    GROK_API_KEY:process.env.GROK_API_KEY || "",
    NVIDIA_API_KEY:process.env.NVIDIA_API_KEY || "",
}

export default config;
