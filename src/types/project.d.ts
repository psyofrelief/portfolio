export interface Project {
  name: string;
  slug: string;
  colour: string;
  type: string;
  description: string;
  blueprint: string[];
  techStack: string[];
  category: string;
  client: string;
  year: string;
  link: string;
  source?: string;
  displayImg: string;
  dualScreenImg: string;
  phonesImg: string;
}
