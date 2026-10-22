import {
  ClipboardList,
  Search,
  LayoutTemplate,
  Rocket,
  LineChart,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type ProcessStep = {
  /** Step number, displayed as "01", "02" and so on. */
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand Your Business',
    description:
      'We start by learning what you sell, who buys it, what the competition looks like and what a good customer is actually worth to you.',
    icon: ClipboardList,
  },
  {
    number: '02',
    title: 'Find the Opportunities',
    description:
      'We research the searches, the map results, the ad landscape and the gaps in your current online presence to find where the quickest wins are.',
    icon: Search,
  },
  {
    number: '03',
    title: 'Build the Strategy',
    description:
      'You get a clear plan with priorities, channels, timelines and a realistic budget — written so you understand exactly what will happen and why.',
    icon: LayoutTemplate,
  },
  {
    number: '04',
    title: 'Launch & Optimize',
    description:
      'We set everything up, launch it properly and keep improving it. Nothing is left running without someone watching the numbers and making changes.',
    icon: Rocket,
  },
  {
    number: '05',
    title: 'Measure & Grow',
    description:
      'We track the metrics that connect to revenue — calls, enquiries, bookings and sales — and scale what works while cutting what does not.',
    icon: LineChart,
  },
];
