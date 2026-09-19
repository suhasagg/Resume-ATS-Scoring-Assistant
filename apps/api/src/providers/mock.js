const KNOWN=["java","python","go","rust","javascript","typescript","react","node.js","mongodb","aws","kafka","kubernetes","docker","distributed systems","machine learning","langchain"];
export async function extractMock(text){
 const low=text.toLowerCase();
 const skills=KNOWN.filter(s=>low.includes(s));
 const years=[...low.matchAll(/(\d{1,2})\+?\s+years?/g)].map(m=>Number(m[1]));
 return {skills,yearsExperience:years.length?Math.max(...years):0,evidence:skills.map(s=>({claim:s,source:"resume-text"})),provider:"mock",model:"deterministic-demo"};
}
