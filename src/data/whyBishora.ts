import { MapPin, Compass, MessageSquareText, Target } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type WhyItem = {
  title: string;
  description: string;
  points: string[];
  icon: LucideIcon;
};

export const whyBishora: WhyItem[] = [
  {
    title: 'Local Business Focus',
    description:
      'We work almost entirely with small and local businesses, so we understand how customers in your area search, compare and choose.',
    points: [
      'Built for local intent, not national vanity metrics',
      'Service-area and map visibility treated as a priority',
      'Advice that fits a local budget',
    ],
    icon: MapPin,
  },
  {
    title: 'Practical Marketing Strategy',
    description:
      'Every recommendation is tied to a real channel and a realistic outcome. If something will not work for your business, we say so.',
    points: [
      'Plans tied to leads, calls and sales',
      'Prioritised by impact and effort',
      'No unnecessary tools or subscriptions',
    ],
    icon: Compass,
  },
  {
    title: 'Transparent Communication',
    description:
      'You always know what we are doing, why we are doing it and what it is costing. Reports are written in plain language, not jargon.',
    points: [
      'Clear reporting you can act on',
      'Regular updates without chasing',
      'A single point of contact',
    ],
    icon: MessageSquareText,
  },
  {
    title: 'Lead-Focused Approach',
    description:
      'We measure success by enquiries that turn into customers, not by impressions, likes or follower counts that do not pay your bills.',
    points: [
      'Conversion tracking built in from day one',
      'Landing pages and offers designed to convert',
      'Budget moved towards what produces results',
    ],
    icon: Target,
  },
];
