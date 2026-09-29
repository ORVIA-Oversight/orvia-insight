const rounds=[
["01","First look","What do you actually see? Separate observation from claim, interpretation and assumption."],
["02","More evidence","New records and context arrive. Revisit your position and explain what changes — or why it does not."],
["03","Another human view","A perspective you have not yet heard enters the room."],
["04","Uncomfortable evidence","Contradictory information tests whether you protect your conclusion or remain evidence-led."],
["05","Act proportionately","Decide what should happen now, what should not happen yet and what would change your view again."]
] as const;
export function AssessmentJourney(){return <div className="journey">{rounds.map(([n,t,c],i)=><article key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p><small>{i===0?"Baseline reasoning":i===4?"Human decision point":"Evidence injection"}</small></article>)}</div>}
