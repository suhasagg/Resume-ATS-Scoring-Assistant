const norm=s=>String(s||"").trim().toLowerCase();
export function scoreProfile(profile, job) {
  const skills=new Set((profile.skills||[]).map(norm));
  const required=(job.requiredSkills||[]).map(norm);
  const preferred=(job.preferredSkills||[]).map(norm);
  const matchedRequired=required.filter(x=>skills.has(x));
  const matchedPreferred=preferred.filter(x=>skills.has(x));
  const req=required.length?matchedRequired.length/required.length:1;
  const pref=preferred.length?matchedPreferred.length/preferred.length:1;
  const min=Number(job.minimumYears||0), years=Number(profile.yearsExperience||0);
  const exp=min?Math.min(years/min,1):1;
  const w=job.weights||{required:.55,preferred:.20,experience:.25};
  const raw=(req*w.required+pref*w.preferred+exp*w.experience)*100;
  return {score:Number(raw.toFixed(2)),components:{required:Number((req*100).toFixed(1)),preferred:Number((pref*100).toFixed(1)),experience:Number((exp*100).toFixed(1))},matchedRequired,matchedPreferred,notEstablishedRequired:required.filter(x=>!skills.has(x)),humanReviewRequired:true};
}
