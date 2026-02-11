
import { Project, HardSkillGroup, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Alba Massage",
    description: "Gestion intégrale de la communication et des réseaux sociaux pour une entreprise de bien-être spécialisée dans l'accompagnement des femmes enceintes.",
    category: "Social Media & Communication",
    image: "https://picsum.photos/seed/massage/800/600"
  },
  {
    id: 2,
    title: "Gestion Airbnb Dakar",
    description: "Optimisation et gestion stratégique d'annonces d'appartements sur Airbnb situés à Dakar, maximisant la visibilité et le taux d'occupation.",
    category: "Real Estate Management",
    image: "https://picsum.photos/seed/dakar/800/600"
  },
  {
    id: 3,
    title: "Impact Social : Boxe & Jeunesse",
    description: "Mise en relation réussie entre un club de boxe et un centre social pour l'instauration de cours de boxe gratuits destinés aux collégiens.",
    category: "Social Impact & Partnership",
    image: "https://picsum.photos/seed/boxing/800/600"
  }
];

export const SOFT_SKILLS: Skill[] = [
  { name: "Communication", description: "S'adapter à différents publics (clients, équipes, direction)", category: 'soft' },
  { name: "Créativité", description: "Proposer des idées originales et pertinentes", category: 'soft' },
  { name: "Adaptabilité", description: "S'ajuster rapidement aux changements", category: 'soft' },
  { name: "Esprit d'équipe", description: "Collaborer efficacement avec divers profils", category: 'soft' },
  { name: "Autonomie", description: "Prendre des initiatives et gérer ses priorités", category: 'soft' },
  { name: "Rigueur", description: "Fiabilité dans l'exécution et le suivi", category: 'soft' },
  { name: "Écoute", description: "Comprendre les besoins avant d'agir", category: 'soft' },
  { name: "Persévérance", description: "Tenir face aux obstacles", category: 'soft' }
];

export const HARD_SKILL_GROUPS: HardSkillGroup[] = [
  {
    category: "Social Media & Ads",
    skills: [
      "Création de contenu (Reels/TikTok, Stories, carrousels)",
      "Publicités sociales (Meta Ads, TikTok Ads, LinkedIn Ads)",
      "Social listening (Brandwatch, Talkwalker)",
      "Google Ads (Search, Display, PMax)"
    ]
  },
  {
    category: "Analyse & Tracking",
    skills: [
      "Google Analytics 4 / Looker Studio",
      "Tracking (GTM, pixels, UTM)",
      "Analyse d'audience & insights plateformes",
      "KPIs (ROAS, CAC, Engagement, Conversion)"
    ]
  },
  {
    category: "Outils & Plateformes",
    skills: [
      "CMS : WordPress, Shopify",
      "Créa : Canva, Adobe Creative Suite, CapCut",
      "CRM : HubSpot, Salesforce"
    ]
  }
];
