export interface User {
  id: string
  email: string
  role: 'advisor' | 'client'
  created_at: string
  updated_at: string
}

export interface Client {
  id: string
  advisor_id: string
  name: string
  email: string
  phone?: string
  notes?: string
  created_at: string
  updated_at: string
  archived: boolean
}

export interface Document {
  id: string
  client_id: string
  uploaded_by: string
  filename: string
  file_type: string
  file_size: number
  storage_path: string
  status: 'uploading' | 'uploaded' | 'processing' | 'ready' | 'failed'
  category?: 'tax_return' | 'investment_statement' | 'insurance_policy' | 'estate_document' | 'bank_statement' | 'other'
  extracted_text?: string
  structured_data?: Record<string, any>
  error_message?: string
  created_at: string
  updated_at: string
}

export interface Insight {
  id: string
  client_id: string
  type: 'summary' | 'opportunities' | 'proposal'
  content: string
  version: number
  status: 'generating' | 'ready' | 'failed'
  error_message?: string
  created_at: string
  updated_at: string
}

export interface ChatMessage {
  id: string
  client_id: string
  role: 'user' | 'assistant'
  content: string
  mode: 'personal' | 'general'
  sources?: string[]
  created_at: string
}

export interface VectorRecord {
  id: string
  client_id: string
  document_id: string
  chunk_text: string
  chunk_index: number
  document_category?: string
  embedding: number[]
  created_at: string
}

export type InsightStatus = 'needs_documents' | 'processing' | 'ready' | 'failed'

export interface ClientWithStatus extends Client {
  document_count: number
  insight_status: InsightStatus
  last_updated: string
}
