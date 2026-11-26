import {StateSchema,MessageValue,StateGraph,START,END} from "@langchain/langraph"
 
 type JUDGEMENT = {
    winner:"solution_1" | "solution_2";
    solution_1_score:number;
    solution_2_score:number;
 }

 type AIBATTLESTATE = {
    messages:typeof MessageValue;
    solution_1:String;
    solution_2:String;
    judgement:JUDGEMENT;
 }
 const state = {
    messages:MessageValue,
    solution_1:"",
    solution_2:"",
    judgement:{
        winner:"solution_1",

        solution_1_score:0,

        solution_2_score:0
    }
 }