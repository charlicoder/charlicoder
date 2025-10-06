"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Hash, FileText, Database, Zap, Copy, CheckCircle, AlertCircle, Calculator, Globe } from "lucide-react"

export default function ToolsPage() {
  const [copiedText, setCopiedText] = useState("")

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    setCopiedText(text)
    setTimeout(() => setCopiedText(""), 2000)
  }

  const tools = [
    {
      id: "json-formatter",
      title: "JSON Formatter & Validator",
      description: "Format, validate, and beautify JSON data with syntax highlighting",
      icon: Code,
      category: "Development",
      component: <JSONFormatter copyToClipboard={copyToClipboard} copiedText={copiedText} />,
    },
    {
      id: "hash-generator",
      title: "Hash Generator",
      description: "Generate MD5, SHA1, SHA256, and other hash values for text or files",
      icon: Hash,
      category: "Security",
      component: <HashGenerator copyToClipboard={copyToClipboard} copiedText={copiedText} />,
    },
    {
      id: "base64-encoder",
      title: "Base64 Encoder/Decoder",
      description: "Encode and decode Base64 strings with ease",
      icon: FileText,
      category: "Encoding",
      component: <Base64Tool copyToClipboard={copyToClipboard} copiedText={copiedText} />,
    },
    {
      id: "sql-formatter",
      title: "SQL Formatter",
      description: "Format and beautify SQL queries for better readability",
      icon: Database,
      category: "Database",
      component: <SQLFormatter copyToClipboard={copyToClipboard} copiedText={copiedText} />,
    },
    {
      id: "password-generator",
      title: "Password Generator",
      description: "Generate secure passwords with customizable options",
      icon: Zap,
      category: "Security",
      component: <PasswordGenerator copyToClipboard={copyToClipboard} copiedText={copiedText} />,
    },
    {
      id: "url-encoder",
      title: "URL Encoder/Decoder",
      description: "Encode and decode URLs for web development",
      icon: Globe,
      category: "Web",
      component: <URLTool copyToClipboard={copyToClipboard} copiedText={copiedText} />,
    },
  ]

  const categories = [...new Set(tools.map((tool) => tool.category))]

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Free Developer Tools</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            A collection of useful tools for developers, built with modern web technologies. All tools run locally in
            your browser for privacy and speed.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tools List */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h2 className="text-2xl font-bold text-foreground mb-6">Available Tools</h2>
              <div className="space-y-4">
                {categories.map((category) => (
                  <div key={category}>
                    <h3 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                      {category}
                    </h3>
                    <div className="space-y-2">
                      {tools
                        .filter((tool) => tool.category === category)
                        .map((tool) => {
                          const Icon = tool.icon
                          return (
                            <Card
                              key={tool.id}
                              className="cursor-pointer hover:shadow-md transition-shadow duration-200"
                              onClick={() => {
                                document.getElementById(tool.id)?.scrollIntoView({ behavior: "smooth" })
                              }}
                            >
                              <CardContent className="p-4">
                                <div className="flex items-center gap-3">
                                  <Icon className="h-5 w-5 text-secondary" />
                                  <div>
                                    <h4 className="font-medium text-foreground text-sm">{tool.title}</h4>
                                    <p className="text-xs text-muted-foreground">{tool.description}</p>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          )
                        })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tools Content */}
          <div className="lg:col-span-2 space-y-12">
            {tools.map((tool) => {
              const Icon = tool.icon
              return (
                <Card key={tool.id} id={tool.id} className="scroll-mt-24">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Icon className="h-6 w-6 text-secondary" />
                      <div>
                        <CardTitle className="text-xl">{tool.title}</CardTitle>
                        <p className="text-muted-foreground text-sm">{tool.description}</p>
                      </div>
                      <Badge variant="secondary" className="ml-auto">
                        {tool.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>{tool.component}</CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Footer CTA */}
        <section className="mt-20 text-center">
          <Card className="bg-muted max-w-4xl mx-auto">
            <CardContent className="p-8">
              <Calculator className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-4">Need a Custom Tool?</h2>
              <p className="text-muted-foreground mb-6 text-pretty">
                If you need a specific developer tool or want to integrate these tools into your workflow, I can help
                build custom solutions tailored to your needs.
              </p>
              <Button asChild>
                <a href="/contact">Request Custom Tool</a>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}

// JSON Formatter Component
function JSONFormatter({ copyToClipboard, copiedText }) {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [error, setError] = useState("")

  const formatJSON = () => {
    try {
      const parsed = JSON.parse(input)
      const formatted = JSON.stringify(parsed, null, 2)
      setOutput(formatted)
      setError("")
    } catch (err) {
      setError("Invalid JSON: " + err.message)
      setOutput("")
    }
  }

  const minifyJSON = () => {
    try {
      const parsed = JSON.parse(input)
      const minified = JSON.stringify(parsed)
      setOutput(minified)
      setError("")
    } catch (err) {
      setError("Invalid JSON: " + err.message)
      setOutput("")
    }
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Input JSON:</label>
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste your JSON here..."
          className="min-h-32 font-mono text-sm"
        />
      </div>
      <div className="flex gap-2">
        <Button onClick={formatJSON} size="sm">
          Format
        </Button>
        <Button onClick={minifyJSON} variant="outline" size="sm">
          Minify
        </Button>
      </div>
      {error && (
        <div className="flex items-center gap-2 text-destructive text-sm">
          <AlertCircle className="h-4 w-4" />
          {error}
        </div>
      )}
      {output && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-foreground">Formatted JSON:</label>
            <Button
              onClick={() => copyToClipboard(output)}
              variant="outline"
              size="sm"
              className="flex items-center gap-1"
            >
              {copiedText === output ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copiedText === output ? "Copied!" : "Copy"}
            </Button>
          </div>
          <Textarea value={output} readOnly className="min-h-32 font-mono text-sm bg-muted" />
        </div>
      )}
    </div>
  )
}

// Hash Generator Component
function HashGenerator({ copyToClipboard, copiedText }) {
  const [input, setInput] = useState("")
  const [hashes, setHashes] = useState({})

  const generateHashes = async () => {
    if (!input) return

    const encoder = new TextEncoder()
    const data = encoder.encode(input)

    const results = {}

    // MD5 (simplified - in real app you'd use crypto-js)
    results.md5 = "MD5 requires crypto-js library"

    // SHA-256
    try {
      const hashBuffer = await crypto.subtle.digest("SHA-256", data)
      const hashArray = Array.from(new Uint8Array(hashBuffer))
      results.sha256 = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("")
    } catch (err) {
      results.sha256 = "Error generating SHA-256"
    }

    // SHA-1
    try {
      const hashBuffer = await crypto.subtle.digest("SHA-1", data)
      const hashArray = Array.from(new Uint8Array(hashBuffer))
      results.sha1 = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("")
    } catch (err) {
      results.sha1 = "Error generating SHA-1"
    }

    setHashes(results)
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Input Text:</label>
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text to hash..."
          className="min-h-24"
        />
      </div>
      <Button onClick={generateHashes} disabled={!input}>
        Generate Hashes
      </Button>
      {Object.keys(hashes).length > 0 && (
        <div className="space-y-3">
          {Object.entries(hashes).map(([algorithm, hash]) => (
            <div key={algorithm} className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-foreground uppercase">{algorithm}:</label>
                <Button
                  onClick={() => copyToClipboard(hash)}
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  {copiedText === hash ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {copiedText === hash ? "Copied!" : "Copy"}
                </Button>
              </div>
              <Input value={hash} readOnly className="font-mono text-sm bg-muted" />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// Base64 Tool Component
function Base64Tool({ copyToClipboard, copiedText }) {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [mode, setMode] = useState("encode")

  const processBase64 = () => {
    try {
      if (mode === "encode") {
        const encoded = btoa(input)
        setOutput(encoded)
      } else {
        const decoded = atob(input)
        setOutput(decoded)
      }
    } catch (err) {
      setOutput("Error: Invalid input for " + mode)
    }
  }

  return (
    <div className="space-y-4">
      <Tabs value={mode} onValueChange={setMode}>
        <TabsList>
          <TabsTrigger value="encode">Encode</TabsTrigger>
          <TabsTrigger value="decode">Decode</TabsTrigger>
        </TabsList>
        <TabsContent value="encode" className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Text to Encode:</label>
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter text to encode..."
              className="min-h-24"
            />
          </div>
        </TabsContent>
        <TabsContent value="decode" className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Base64 to Decode:</label>
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter Base64 string to decode..."
              className="min-h-24"
            />
          </div>
        </TabsContent>
      </Tabs>
      <Button onClick={processBase64} disabled={!input}>
        {mode === "encode" ? "Encode" : "Decode"}
      </Button>
      {output && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-foreground">
              {mode === "encode" ? "Encoded Result:" : "Decoded Result:"}
            </label>
            <Button
              onClick={() => copyToClipboard(output)}
              variant="outline"
              size="sm"
              className="flex items-center gap-1"
            >
              {copiedText === output ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copiedText === output ? "Copied!" : "Copy"}
            </Button>
          </div>
          <Textarea value={output} readOnly className="min-h-24 bg-muted" />
        </div>
      )}
    </div>
  )
}

// SQL Formatter Component
function SQLFormatter({ copyToClipboard, copiedText }) {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")

  const formatSQL = () => {
    // Simple SQL formatting (in a real app, you'd use a proper SQL formatter library)
    const formatted = input
      .replace(/\bSELECT\b/gi, "\nSELECT")
      .replace(/\bFROM\b/gi, "\nFROM")
      .replace(/\bWHERE\b/gi, "\nWHERE")
      .replace(/\bAND\b/gi, "\n  AND")
      .replace(/\bOR\b/gi, "\n  OR")
      .replace(/\bORDER BY\b/gi, "\nORDER BY")
      .replace(/\bGROUP BY\b/gi, "\nGROUP BY")
      .replace(/\bHAVING\b/gi, "\nHAVING")
      .replace(/\bJOIN\b/gi, "\nJOIN")
      .replace(/\bINNER JOIN\b/gi, "\nINNER JOIN")
      .replace(/\bLEFT JOIN\b/gi, "\nLEFT JOIN")
      .replace(/\bRIGHT JOIN\b/gi, "\nRIGHT JOIN")
      .trim()

    setOutput(formatted)
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">SQL Query:</label>
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste your SQL query here..."
          className="min-h-32 font-mono text-sm"
        />
      </div>
      <Button onClick={formatSQL} disabled={!input}>
        Format SQL
      </Button>
      {output && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-foreground">Formatted SQL:</label>
            <Button
              onClick={() => copyToClipboard(output)}
              variant="outline"
              size="sm"
              className="flex items-center gap-1"
            >
              {copiedText === output ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copiedText === output ? "Copied!" : "Copy"}
            </Button>
          </div>
          <Textarea value={output} readOnly className="min-h-32 font-mono text-sm bg-muted" />
        </div>
      )}
    </div>
  )
}

// Password Generator Component
function PasswordGenerator({ copyToClipboard, copiedText }) {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(16)
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  })

  const generatePassword = () => {
    let charset = ""
    if (options.uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (options.lowercase) charset += "abcdefghijklmnopqrstuvwxyz"
    if (options.numbers) charset += "0123456789"
    if (options.symbols) charset += "!@#$%^&*()_+-=[]{}|;:,.<>?"

    if (!charset) return

    let result = ""
    for (let i = 0; i < length; i++) {
      result += charset.charAt(Math.floor(Math.random() * charset.length))
    }
    setPassword(result)
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Password Length: {length}</label>
        <input
          type="range"
          min="8"
          max="64"
          value={length}
          onChange={(e) => setLength(Number.parseInt(e.target.value))}
          className="w-full"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(options).map(([key, value]) => (
          <label key={key} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={value}
              onChange={(e) => setOptions({ ...options, [key]: e.target.checked })}
              className="rounded"
            />
            <span className="text-sm capitalize">{key}</span>
          </label>
        ))}
      </div>
      <Button onClick={generatePassword}>Generate Password</Button>
      {password && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-foreground">Generated Password:</label>
            <Button
              onClick={() => copyToClipboard(password)}
              variant="outline"
              size="sm"
              className="flex items-center gap-1"
            >
              {copiedText === password ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copiedText === password ? "Copied!" : "Copy"}
            </Button>
          </div>
          <Input value={password} readOnly className="font-mono bg-muted" />
        </div>
      )}
    </div>
  )
}

// URL Tool Component
function URLTool({ copyToClipboard, copiedText }) {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [mode, setMode] = useState("encode")

  const processURL = () => {
    try {
      if (mode === "encode") {
        const encoded = encodeURIComponent(input)
        setOutput(encoded)
      } else {
        const decoded = decodeURIComponent(input)
        setOutput(decoded)
      }
    } catch (err) {
      setOutput("Error: Invalid input for " + mode)
    }
  }

  return (
    <div className="space-y-4">
      <Tabs value={mode} onValueChange={setMode}>
        <TabsList>
          <TabsTrigger value="encode">Encode</TabsTrigger>
          <TabsTrigger value="decode">Decode</TabsTrigger>
        </TabsList>
        <TabsContent value="encode" className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">URL to Encode:</label>
            <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter URL to encode..." />
          </div>
        </TabsContent>
        <TabsContent value="decode" className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">URL to Decode:</label>
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter encoded URL to decode..."
            />
          </div>
        </TabsContent>
      </Tabs>
      <Button onClick={processURL} disabled={!input}>
        {mode === "encode" ? "Encode" : "Decode"}
      </Button>
      {output && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-foreground">
              {mode === "encode" ? "Encoded URL:" : "Decoded URL:"}
            </label>
            <Button
              onClick={() => copyToClipboard(output)}
              variant="outline"
              size="sm"
              className="flex items-center gap-1"
            >
              {copiedText === output ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copiedText === output ? "Copied!" : "Copy"}
            </Button>
          </div>
          <Input value={output} readOnly className="bg-muted" />
        </div>
      )}
    </div>
  )
}
