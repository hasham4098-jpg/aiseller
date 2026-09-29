"use client"
import { useState } from "react"

export default function Home() {
  const [input, setInput] = useState("")
  const [tool, setTool] = useState("Shopify SEO")
  const [result, setResult] = useState("")
  const [loading, setLoading] = useState(false)

  const generate = async () => {
    if(!input) return alert("Product naam likho")
    setLoading(true)
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input, tool })
    })
    const data = await res.json()
    setResult(data.result)
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center">SellGenius Pro</h1>
        <p className="text-center text-gray-400">4 Tools - Real AI - 29 Languages</p>

        <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Product likho - Urdu me bhi" className="w-full mt-6 p-3 rounded bg-zinc-900 border border-zinc-700" />

        <select value={tool} onChange={e=>setTool(e.target.value)} className="w-full mt-3 p-3 rounded bg-zinc-900 border border-zinc-700">
          <option>Shopify SEO</option>
          <option>Amazon Listing</option>
          <option>Facebook Ad Copy</option>
          <option>TikTok Ad Copy</option>
        </select>

        <button onClick={generate} className="w-full mt-4 bg-white text-black py-3 rounded font-bold">
          {loading? "AI Soch Raha Hai..." : "Generate Real AI"}
        </button>

        {result && <div className="mt-4 p-4 bg-zinc-900 rounded border border-zinc-800 whitespace-pre-wrap">{result}</div>}
      </div>
    </div>
  )
}