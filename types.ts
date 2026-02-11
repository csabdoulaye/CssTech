
export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
}

export interface Skill {
  name: string;
  description?: string;
  category: 'soft' | 'hard';
  icon?: string;
}

export interface HardSkillGroup {
  category: string;
  skills: string[];
}
