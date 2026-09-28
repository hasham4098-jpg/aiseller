"use client"
import { useState } from "react"

export default function Home() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [tool, setTool] = useState("Shopify")

  const generate = () => {
    setOutput("AI soch raha hai... 2 second...")
    setTimeout(() => {
      setOutput(`${tool} Tool Result for: ${input}

1. SEO Title: Best ${input} - Premium Quality 2025
2. Description: This ${input} is perfect for Shopify/Amazon store. High quality, fast shipping, best for customers.
3. Tags: ${input}, buy ${input}, best ${input}
4. Ad Copy: Get Your ${input} Today! 50% OFF - Limited Stock!

[Abhi ye demo hai, agle step me isko free AI se connect karenge]`)
    }, 1000)
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center">AISeller.com</h1>
      <p className="text-center mt-2">5 Free AI Tools for Sellers</p>

      <div className="flex gap-2 mt-6 justify-center flex-wrap">
        {["Shopify","Amazon","TikTok","Facebook","Etsy"].map(t => (
          <button key={t} onClick={()=>setTool(t)} className={`px-4 py-2 rounded ${tool===t? 'bg-black text-white' : 'bg-gray-200'}`}>{t}</button>
        ))}
      </div>

      <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="Product naam likho jaise 'black shoes'" className="w-full border p-3 mt-6 rounded h-24"></textarea>
      <button onClick={generate} className="w-full bg-black text-white p-3 mt-3 rounded">Generate with AI</button>
      <pre className="w-full border p-3 mt-3 rounded bg-gray-50 whitespace-pre-wrap min-h-">{output}</pre>
    </div>
  )
}