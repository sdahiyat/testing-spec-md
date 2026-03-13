import OpenAI from 'openai'

if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing OpenAI API key')
}

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function generateEmbedding(text: string): Promise<number[]> {
  try {
    const response = await openai.embeddings.create({
      model: 'text-embedding-3-small',
      input: text,
    })
    
    return response.data[0].embedding
  } catch (error) {
    console.error('Error generating embedding:', error)
    throw new Error('Failed to generate embedding')
  }
}

export async function generateChatResponse(
  messages: Array<{ role: 'system' | 'user' | 'assistant'; content: string }>,
  model: string = 'gpt-4'
): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model,
      messages,
      temperature: 0.7,
      max_tokens: 2000,
    })
    
    return response.choices[0]?.message?.content || ''
  } catch (error) {
    console.error('Error generating chat response:', error)
    throw new Error('Failed to generate response')
  }
}

export function chunkText(text: string, maxTokens: number = 500, overlap: number = 100): string[] {
  const words = text.split(/\s+/)
  const chunks: string[] = []
  const wordsPerToken = 0.75 // Approximate ratio
  const maxWords = Math.floor(maxTokens / wordsPerToken)
  const overlapWords = Math.floor(overlap / wordsPerToken)
  
  for (let i = 0; i < words.length; i += maxWords - overlapWords) {
    const chunk = words.slice(i, i + maxWords).join(' ')
    chunks.push(chunk)
  }
  
  return chunks.filter(chunk => chunk.trim().length > 0)
}
