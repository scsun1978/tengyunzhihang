export interface Database {
  public: {
    Tables: {
      contacts: {
        Row: {
          id: string;
          name: string;
          company: string;
          email: string;
          phone: string;
          message: string;
          created_at: string;
          processed: boolean;
        };
        Insert: Omit<Database['public']['Tables']['contacts']['Row'], 'id' | 'created_at' | 'processed'>;
      };
      news_posts: {
        Row: {
          id: string;
          title: string;
          content: string;
          image: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['news_posts']['Row'], 'id' | 'created_at' | 'updated_at'>;
      };
    };
  };
}