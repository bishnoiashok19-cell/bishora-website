import type { SubcategoryGuideSeed } from '../types';
import { groupGuidesPartA } from './groups/part-a';
import { homeLocalServicesGroupGuides } from './groups/home-local-services';
import { educationTrainingGroupGuides } from './groups/education-training';
import { retailGroupGuides } from './groups/retail';
import { automotiveGroupGuides } from './groups/automotive';
import { realEstateConstructionGroupGuides } from './groups/real-estate-construction';
import { beautyLifestyleGroupGuides } from './groups/beauty-lifestyle';
import { travelTransportGroupGuides } from './groups/travel-transport';
import { manufacturingB2bGroupGuides } from './groups/manufacturing-b2b';
import { agricultureGroupGuides } from './groups/agriculture';
import { technologyItGroupGuides } from './groups/technology-it';
import { mediaMarketingCreativeGroupGuides } from './groups/media-marketing-creative';
import { eventsEntertainmentGroupGuides } from './groups/events-entertainment';
import { photographyVisualServicesGroupGuides } from './groups/photography-visual-services';
import { printingPackagingSignageGroupGuides } from './groups/printing-packaging-signage';
import { logisticsSupplyChainGroupGuides } from './groups/logistics-supply-chain';
import { eCommerceOnlineBusinessGroupGuides } from './groups/e-commerce-online-business';
import { energyEnvironmentalServicesGroupGuides } from './groups/energy-environmental-services';
import { recruitmentEmploymentGroupGuides } from './groups/recruitment-employment';
import { industrialCommercialServicesGroupGuides } from './groups/industrial-commercial-services';
import { petsAnimalServicesGroupGuides } from './groups/pets-animal-services';
import { securitySafetyGroupGuides } from './groups/security-safety';
import { fashionLifestyleGroupGuides } from './groups/fashion-lifestyle';
import { sportsRecreationGroupGuides } from './groups/sports-recreation';
import { religiousSpiritualCulturalGroupGuides } from './groups/religious-spiritual-cultural';
import { nonProfitSocialOrganisationsGroupGuides } from './groups/non-profit-social-organisations';
import { b2bCorporateServicesGroupGuides } from './groups/b2b-corporate-services';
import { luxuryPremiumServicesGroupGuides } from './groups/luxury-premium-services';

/**
 * Every group guide, in category source order.
 *
 * `part-a.ts` covers Food & Hospitality, Healthcare and Professional Services.
 * The rest follow the same schema and are validated in `../index.ts`.
 */
export const groupGuides: SubcategoryGuideSeed[] = [
  ...groupGuidesPartA,
  ...homeLocalServicesGroupGuides,
  ...educationTrainingGroupGuides,
  ...retailGroupGuides,
  ...automotiveGroupGuides,
  ...realEstateConstructionGroupGuides,
  ...beautyLifestyleGroupGuides,
  ...travelTransportGroupGuides,
  ...manufacturingB2bGroupGuides,
  ...agricultureGroupGuides,
  ...technologyItGroupGuides,
  ...mediaMarketingCreativeGroupGuides,
  ...eventsEntertainmentGroupGuides,
  ...photographyVisualServicesGroupGuides,
  ...printingPackagingSignageGroupGuides,
  ...logisticsSupplyChainGroupGuides,
  ...eCommerceOnlineBusinessGroupGuides,
  ...energyEnvironmentalServicesGroupGuides,
  ...recruitmentEmploymentGroupGuides,
  ...industrialCommercialServicesGroupGuides,
  ...petsAnimalServicesGroupGuides,
  ...securitySafetyGroupGuides,
  ...fashionLifestyleGroupGuides,
  ...sportsRecreationGroupGuides,
  ...religiousSpiritualCulturalGroupGuides,
  ...nonProfitSocialOrganisationsGroupGuides,
  ...b2bCorporateServicesGroupGuides,
  ...luxuryPremiumServicesGroupGuides,
];
