"use client"
import { useState } from "react"

export default function Home() {
  const [input, setInput] = useState("")
  const [tool, setTool] = useState("Shopify SEO")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState("")

  const generate = async () => {
    if(!input) return alert("Product ka naam likho!")
    setLoading(true)
    setResult("")
    
    // Yahan real AI call hogi, abhi ke liye professional template
    setTimeout(() => {
      setResult(`
🚀 ${tool} for: ${input}

**1. SEO Title:**
Best ${input} | Premium Quality 2025 - Free Shipping

**2. Shopify Description:**
Introducing the all-new ${input}. Crafted for performance and style. Perfect for your Shopify store. High conversion, SEO optimized.

**3. Tags:**
${input}, best ${input}, buy ${input}, ${input} 2025, premium ${input}

**4. Ad Copy (Facebook / TikTok):**
Stop scrolling! Get ${input} Today - 50% OFF. Limited Stock! 👉 Shop Now

**5. Amazon Bullets:**
✓ Premium Quality Material
✓ Fast Delivery
✓ 30-Day Return
      `)
      setLoading(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2">SellGenius Pro 🚀</h1>
        <p className="text-center text-gray-400 mb-8">Professional AI Seller Tool for Shopify & Amazon</p>
        
        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
          <label className="text-sm text-gray-400">Product Name</label>
          <input value={input} onChange={e=>setInput(e.target.value)} placeholder="e.g. Wireless Earbuds" className="w-full mt-2 p-3 rounded-lg bg-black border border-zinc-700 outline-none" />
          
          <label className="text-sm text-gray-400 mt-4 block">Tool</label>
          <select value={tool} onChange={e=>setTool(e.target.value)} className="w-full mt-2 p-3 rounded-lg bg-black border border-zinc-700">
            <option>Shopify SEO</option>
            <option>Amazon Listing</option>
            <option>Facebook Ad Copy</option>
            <option>Product Description</option>
          </select>

          <button onClick={generate} disabled={loading} className="w-full mt-6 bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-200">
            {loading ? "AI Soch Raha Hai..." : "Generate Copy ✨"}
          </button>

          {result && (
            <pre className="mt-6 p-4 bg-black border border-zinc-800 rounded-lg whitespace-pre-wrap text-sm leading-6">{result}</pre>
          )}
        </div>
      </div>
    </div>
  )
}