import {extractMock} from "./mock.js"; import {extractOpenAI} from "./openai.js"; import {extractGemini} from "./gemini.js";
export async function extract(text){ const p=process.env.LLM_PROVIDER||"mock"; if(p==="openai")return extractOpenAI(text); if(p==="gemini")return extractGemini(text); return extractMock(text); }
