export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          role: 'advisor' | 'client'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          role: 'advisor' | 'client'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          role?: 'advisor' | 'client'
          created_at?: string
          updated_at?: string
        }
      }
      clients: {
        Row: {
          id: string
          advisor_id: string
          name: string
          email: string
          phone: string | null
          notes: string | null
          created_at: string
          updated_at: string
          archived: boolean
        }
        Insert: {
          id?: string
          advisor_id: string
          name: string
          email: string
          phone?: string | null
          notes?: string | null
          created_at?: string
          updated_at?: string
          archived?: boolean
        }
        Update: {
          id?: string
          advisor_id?: string
          name?: string
          email?: string
          phone?: string | null
          notes?: string | null
          created_at?: string
          updated_at?: string
          archived?: boolean
        }
      }
      documents: {
        Row: {
          id: string
          client_id: string
          uploaded_by: string
          filename: string
          file_type: string
          file_size: number
          storage_path: string
          status: 'uploading' | 'uploaded' | 'processing' | 'ready' | 'failed'
          category: string | null
          extracted_text: string | null
          structured_data: any | null
          error_message: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          client_id: string
          uploaded_by: string
          filename: string
          file_type: string
          file_size: number
          storage_path: string
          status?: 'uploading' | 'uploaded' | 'processing' | 'ready' | 'failed'
          category?: string | null
          extracted_text?: string | null
          structured_data?: any | null
          error_message?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          client_id?: string
          uploaded_by?: string
          filename?: string
          file_type?: string
          file_size?: number
          storage_path?: string
          status?: 'uploading' | 'uploaded' | 'processing' | 'ready' | 'failed'
          category?: string | null
          extracted_text?: string | null
          structured_data?: any | null
          error_message?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}
