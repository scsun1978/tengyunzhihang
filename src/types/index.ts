export interface ContactForm {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
}

export interface NewsPost {
  id: string;
  title: string;
  content: string;
  image?: string;
  createdAt: string;
  updatedAt: string;
}