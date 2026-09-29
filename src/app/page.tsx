"use client"
import { useState } from "react"
export default function Home() {
  const [input, setInput] = useState("")
  const [result, setResult] = useState("")
  const gen = async () => {
    setResult("wait")
    const r = await fetch("/api/generate", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ input }) })
    const d = await r.json()
    setResult(d.result)
  }
  return (
    <div style={{padding:20, background:"black", color:"white", minHeight:"100vh"}}>
      <input value={input} onChange={e=>setInput(e.target.value)} placeholder="wireless earbug" style={{width:"100%", padding:10}} />
      <button onClick={gen} style={{width:"100%", padding:10, marginTop:10, background:"white", color:"black"}}>Generate</button>
      <div style={{marginTop:20, padding:10, background:"#222"}}>{result}</div>
    </div>
  )
}