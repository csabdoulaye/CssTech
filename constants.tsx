
import { Project, HardSkillGroup, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Alba Massage",
    description: "Stratégie Social Media complète pour une marque de bien-être. Création de contenus engageants et gestion de communauté axée sur l'accompagnement à la maternité.",
    category: "Communication Digitale",
    image: "https://images.unsplash.com/photo-1544161515-4af6b1d462c2?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 2,
    title: "Airbnb Dakar",
    description: "Pilotage opérationnel et marketing d'appartements premium à Dakar. Optimisation du référencement des annonces et gestion de la relation client multicanale.",
    category: "Gestion de Projets",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 3,
    title: "Fight Industrie",
    description: "Partenariat social innovant : création de cours de boxe gratuits pour les collégiens en collaboration avec un centre social local. Coordination et impact terrain.",
    category: "Impact Social",
    image: "https://images.unsplash.com/photo-1591117207239-7ad59a057fd6?auto=format&fit=crop&q=80&w=1200"
  }
];

export const SOFT_SKILLS: Skill[] = [
  { name: "Communication", description: "Aisance relationnelle et adaptation aux interlocuteurs", category: 'soft' },
  { name: "Créativité", description: "Veille constante et propositions d'idées neuves", category: 'soft' },
  { name: "Adaptabilité", description: "Réactivité face aux imprévus et nouveaux outils", category: 'soft' },
  { name: "Esprit d'équipe", description: "Coopération active au sein de projets transverses", category: 'soft' },
  { name: "Autonomie", description: "Gestion proactive des tâches et des priorités", category: 'soft' },
  { name: "Rigueur", description: "Souci du détail et suivi méticuleux des livrables", category: 'soft' },
  { name: "Écoute", description: "Analyse fine des besoins et force de proposition", category: 'soft' },
  { name: "Persévérance", description: "Capacité à mener les projets jusqu'au bout", category: 'soft' }
];

export const HARD_SKILL_GROUPS: HardSkillGroup[] = [
  {
    category: "Social Media & Ads",
    skills: [
      "Gestion de planning éditorial (Instagram, TikTok, LinkedIn)",
      "Publicité payante (Meta Business Suite, TikTok Ads)",
      "Création visuelle (Canva, CapCut, Suite Adobe)",
      "Social Listening & Veille concurrentielle"
    ]
  },
  {
    category: "Gestion de Projet & Data",
    skills: [
      "Suivi de KPIs & Reporting (GA4, Looker Studio)",
      "Coordination de partenaires et prestataires",
      "Tracking (Google Tag Manager, Pixels)",
      "Gestion de budget publicitaire"
    ]
  },
  {
    category: "Outils & CRM",
    skills: [
      "WordPress & Shopify (Back-office)",
      "CRM : HubSpot, Salesforce",
      "Outils collaboratifs : Notion, Slack, Trello"
    ]
  }
];
