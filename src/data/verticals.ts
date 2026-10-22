import {
  UtensilsCrossed,
  Wrench,
  Sparkles,
  Store,
  BriefcaseBusiness,
  Dumbbell,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type BusinessVertical = {
  title: string;
  description: string;
  icon: LucideIcon;
};

/**
 * The types of local business Bishora focuses on. These describe the sectors
 * the agency works with — they are not client lists.
 */
export const businessVerticals: BusinessVertical[] = [
  {
    title: 'Restaurants & Cafés',
    description: 'Reservations, delivery enquiries and walk-in footfall.',
    icon: UtensilsCrossed,
  },
  {
    title: 'Home Services',
    description: 'Plumbers, electricians, cleaners, landscapers and repair specialists.',
    icon: Wrench,
  },
  {
    title: 'Beauty & Wellness',
    description: 'Salons, barbers, spas, clinics and studios with booked appointments.',
    icon: Sparkles,
  },
  {
    title: 'Retail & Local Shops',
    description: 'Boutiques, hardware stores, pharmacies and specialist retailers.',
    icon: Store,
  },
  {
    title: 'Professional Services',
    description: 'Accountants, solicitors, consultants, agencies and tradespeople.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Fitness & Coaching',
    description: 'Gyms, studios, personal trainers and online coaches.',
    icon: Dumbbell,
  },
];
