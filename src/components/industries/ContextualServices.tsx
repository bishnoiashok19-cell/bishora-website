import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { serviceHref, services } from '../../data/services';
import type { Service } from '../../data/services';
import { cn } from '../../lib/utils';
import { IconTile } from '../ui/IconTile';

type ServiceCopy = {
  problem: string;
  helps: string;
  why: string;
};

/**
 * Plain-language explanation of what each service actually changes.
 *
 * The structure is deliberately problem → what Bishora can do → why it matters,
 * so a service is never recommended without a reason attached to it.
 */
const serviceCopy: Record<string, ServiceCopy> = {
  'google-business-profile': {
    problem:
      'Google par listing adhoori ho, timing galat ho ya photos purani hon to customer bina call kiye next option par chala jaata hai.',
    helps:
      'Bishora listing ko current, complete aur review-ready banata hai — category, timings, photos, address aur contact sahi jagah.',
    why:
      'Near-me searches mein sahi information hi call aur walk-in ka pehla source hoti hai.',
  },
  'website-development': {
    problem:
      'Agar customer ko website par 10 second mein samajh nahi aata ki aap kya karte hain, wo wapas search par chala jaata hai.',
    helps:
      'Bishora ek fast, mobile-first website banata hai jahan services, photos, process aur contact ek hi jagah clear hote hain.',
    why:
      'Website aapki 24x7 sales sheet hai — enquiry se pehle ka bharosa yahin banta hai.',
  },
  seo: {
    problem:
      'Aapki exact service search karne par competitor ka page dikhta hai, aapka nahi.',
    helps:
      'Bishora service-wise pages, clean structure aur local keywords par kaam karta hai — bina ranking guarantees ke.',
    why:
      'Jo customer problem-specific search karta hai, wo sabse serious enquiry hoti hai.',
  },
  aeo: {
    problem:
      'Customer ab Google aur AI answers se seedha jawab chahta hai, sirf links nahi.',
    helps:
      'Bishora content ko sawal-jawab format mein saaf likhta hai taaki answer boxes aur AI results mein aapki information cite ho sake.',
    why:
      'Clear answers se brand ka naam decision ke waqt dikhta hai, chahe customer click kare ya na kare.',
  },
  geo: {
    problem:
      'AI search tools tabhi suggest karte hain jab aapki information har jagah ek jaisi ho.',
    helps:
      'Bishora listings, content aur citations ko consistent rakhta hai taaki AI answers mein aapka naam sahi context ke saath aaye.',
    why:
      'Generative search ek naya discovery channel hai; consistency hi wahan visibility banati hai.',
  },
  'paid-advertising': {
    problem:
      'Organic reach slow hoti hai aur season ke waqt khaali slots reh jaate hain.',
    helps:
      'Bishora targeted Google aur Meta ads chalata hai — clear offer, sahi area aur conversion-focused landing page ke saath.',
    why:
      'Ads tabhi kaam karte hain jab landing page aur follow-up ready ho, isliye ise priority ke hisaab se lagaya jaata hai.',
  },
  'landing-page-design': {
    problem:
      'Ad ya Instagram se traffic aata hai, lekin page par confusion ke kaaran customer chala jaata hai.',
    helps:
      'Bishora ek single-goal landing page banata hai — offer, proof, pricing hint aur ek clear enquiry button.',
    why:
      'Same traffic par better conversion ka matlab kam ad spend aur zyada enquiries.',
  },
  'social-media-marketing': {
    problem:
      'Profile par purani photos hoti hain aur naye customer ko lagta hai business active nahi hai.',
    helps:
      'Bishora planned content, real photos aur timely replies se profile ko current aur bharosemand rakhta hai.',
    why:
      'Social profile aksar website se pehle dekha jaata hai — wahi first impression banta hai.',
  },
  'whatsapp-marketing': {
    problem:
      'Enquiries WhatsApp par aati hain, lekin reply late hota hai ya message kho jaata hai.',
    helps:
      'Bishora catalogue, quick replies, broadcast lists aur follow-up flow set karta hai.',
    why:
      'Fast aur clean WhatsApp response seedha booking aur repeat order mein badalta hai.',
  },
  'email-marketing': {
    problem:
      'Purane customers aapko yaad nahi rehte aur naya offer unhe pahunchta nahi.',
    helps:
      'Bishora simple newsletter aur offer emails design karta hai — bina spam kiye.',
    why:
      'Repeat business sabse sasta revenue hota hai, especially seasonal businesses mein.',
  },
  'content-creation': {
    problem:
      'Website aur social par wahi generic text baar-baar repeat hota hai.',
    helps:
      'Bishora aapke actual kaam ke hisaab se guides, service copy aur photo captions likhta hai.',
    why:
      'Specific content hi customer ko lagta hai ki ye uske kaam ka hai.',
  },
  'graphic-design': {
    problem:
      'Menu, price list aur offer posts har jagah alag style mein dikhte hain.',
    helps:
      'Bishora ek simple visual system banata hai — menu, posters, offer creatives aur profile assets.',
    why:
      'Consistent design chhoti business ko bhi organised aur trustworthy dikhata hai.',
  },
};

const serviceBySlug = new Map(services.map((service) => [service.slug, service]));

export type ContextualServicesProps = {
  serviceSlugs: string[];
  /** One honest sentence about scope, shown under the cards. */
  context?: string;
  className?: string;
};

/** Service cards with the problem, the practical help and the reason. */
export function ContextualServices({
  serviceSlugs,
  context,
  className,
}: ContextualServicesProps) {
  const relevant = serviceSlugs
    .map((slug) => serviceBySlug.get(slug))
    .filter((service): service is Service => Boolean(service));

  return (
    <div className={className}>
      <ul className="grid gap-4 lg:grid-cols-3">
        {relevant.map((service) => {
          const copy = serviceCopy[service.slug];
          const Icon = service.icon;

          return (
            <li key={service.slug}>
              <div className="flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-5 shadow-soft sm:p-6">
                <div className="flex items-center gap-3">
                  <IconTile tone="brand" size="sm">
                    <Icon aria-hidden="true" />
                  </IconTile>
                  <h3 className="font-display text-[1.0625rem] leading-snug font-bold text-ink-950">
                    {service.name}
                  </h3>
                </div>

                {copy ? (
                  <dl className="mt-4 space-y-3">
                    <div>
                      <dt className="text-[0.68rem] font-semibold tracking-[0.14em] text-ink-500 uppercase">
                        Problem
                      </dt>
                      <dd className="mt-1 text-sm leading-relaxed text-ink-600">
                        {copy.problem}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[0.68rem] font-semibold tracking-[0.14em] text-brand-600 uppercase">
                        Bishora kya kar sakta hai
                      </dt>
                      <dd className="mt-1 text-sm leading-relaxed text-ink-700">
                        {copy.helps}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[0.68rem] font-semibold tracking-[0.14em] text-ink-500 uppercase">
                        Kyun matter karta hai
                      </dt>
                      <dd className="mt-1 text-sm leading-relaxed text-ink-600">
                        {copy.why}
                      </dd>
                    </div>
                  </dl>
                ) : (
                  <p className="mt-4 text-sm leading-relaxed text-ink-600">
                    {service.summary}
                  </p>
                )}

                <Link
                  to={serviceHref(service.slug)}
                  className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800"
                >
                  Service details
                  <ArrowRight className="size-3.5" aria-hidden="true" />
                </Link>
              </div>
            </li>
          );
        })}
      </ul>

      {context ? (
        <p className={cn('mt-6 max-w-3xl text-sm leading-relaxed text-ink-500')}>
          {context}
        </p>
      ) : null}
    </div>
  );
}
