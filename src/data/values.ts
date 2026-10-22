import { Compass, Eye, Handshake, LineChart, ShieldCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type Value = {
  title: string;
  description: string;
  icon: LucideIcon;
};

/** The principles Bishora works by. */
export const values: Value[] = [
  {
    title: 'Clarity over jargon',
    description:
      'You should understand every recommendation and every line of the report. If we cannot explain it plainly, we have not thought it through.',
    icon: Eye,
  },
  {
    title: 'Local first',
    description:
      'Our advice is shaped by how people search in a local market — not by a generic template written for national brands.',
    icon: Compass,
  },
  {
    title: 'Measurable outcomes',
    description:
      'We define what success means before we start: enquiries, calls, bookings and sales. Everything we report connects back to that.',
    icon: LineChart,
  },
  {
    title: 'Hands-on partnership',
    description:
      'You get a real person who knows your business, not a queue of accounts or a rotating support team.',
    icon: Handshake,
  },
  {
    title: 'Honest recommendations',
    description:
      'If a channel will not work for you, or a service is not worth paying for, we will say so rather than sell it.',
    icon: ShieldCheck,
  },
];

/** What Bishora deliberately does not do — used to set clear expectations. */
export const notDoing = [
  'Guaranteed rankings or guaranteed leads',
  'Long lock-in contracts on every engagement',
  'Reports padded with metrics that do not affect revenue',
  'Tools, subscriptions or retainers you do not need',
  'Work on channels before the basics are in place',
];
