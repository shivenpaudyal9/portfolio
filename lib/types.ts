export interface Booking {
  id?: string;
  name: string;
  email: string;
  message: string;
  created_at?: string;
}

export interface Message {
  id?: string;
  name: string;
  email: string;
  message: string;
  created_at?: string;
}

export interface AiChat {
  id?: string;
  visitor_message: string;
  agent_response: string;
  created_at?: string;
}

export interface Project {
  title: string;
  description: string;
  stack: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: "ml" | "cloud" | "languages" | "tools";
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  logo?: string;
}

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}
