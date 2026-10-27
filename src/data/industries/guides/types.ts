import type { BusinessTypeGuideSeed } from '../types';
import { foodTypeGuides } from './types/food';
import { healthcareTypeGuides } from './types/healthcare';
import { professionalServicesTypeGuides } from './types/professional-services';
import { homeLocalServicesTypeGuides } from './types/home-local-services';
import { educationTrainingTypeGuides } from './types/education-training';
import { retailTypeGuides } from './types/retail';
import { automotiveTypeGuides } from './types/automotive';
import { realEstateConstructionTypeGuides } from './types/real-estate-construction';
import { beautyLifestyleTypeGuides } from './types/beauty-lifestyle';
import { travelTransportTypeGuides } from './types/travel-transport';
import { manufacturingB2bTypeGuides } from './types/manufacturing-b2b';
import { agricultureTypeGuides } from './types/agriculture';
import { technologyItTypeGuides } from './types/technology-it';
import { mediaMarketingCreativeTypeGuides } from './types/media-marketing-creative';
import { eventsEntertainmentTypeGuides } from './types/events-entertainment';
import { photographyVisualServicesTypeGuides } from './types/photography-visual-services';
import { printingPackagingSignageTypeGuides } from './types/printing-packaging-signage';
import { logisticsSupplyChainTypeGuides } from './types/logistics-supply-chain';
import { eCommerceOnlineBusinessTypeGuides } from './types/e-commerce-online-business';
import { energyEnvironmentalServicesTypeGuides } from './types/energy-environmental-services';
import { recruitmentEmploymentTypeGuides } from './types/recruitment-employment';
import { industrialCommercialServicesTypeGuides } from './types/industrial-commercial-services';
import { petsAnimalServicesTypeGuides } from './types/pets-animal-services';
import { securitySafetyTypeGuides } from './types/security-safety';
import { fashionLifestyleTypeGuides } from './types/fashion-lifestyle';
import { sportsRecreationTypeGuides } from './types/sports-recreation';
import { religiousSpiritualCulturalTypeGuides } from './types/religious-spiritual-cultural';
import { nonProfitSocialOrganisationsTypeGuides } from './types/non-profit-social-organisations';
import { b2bCorporateServicesTypeGuides } from './types/b2b-corporate-services';
import { luxuryPremiumServicesTypeGuides } from './types/luxury-premium-services';

/**
 * Every business-type guide, in category source order.
 *
 * The merge is validated in `../index.ts`: exact counts, unique
 * `category/group/type` keys, 4 ordered priorities and 2-4 valid service slugs.
 */
export const businessTypeGuides: BusinessTypeGuideSeed[] = [
  ...foodTypeGuides,
  ...healthcareTypeGuides,
  ...professionalServicesTypeGuides,
  ...homeLocalServicesTypeGuides,
  ...educationTrainingTypeGuides,
  ...retailTypeGuides,
  ...automotiveTypeGuides,
  ...realEstateConstructionTypeGuides,
  ...beautyLifestyleTypeGuides,
  ...travelTransportTypeGuides,
  ...manufacturingB2bTypeGuides,
  ...agricultureTypeGuides,
  ...technologyItTypeGuides,
  ...mediaMarketingCreativeTypeGuides,
  ...eventsEntertainmentTypeGuides,
  ...photographyVisualServicesTypeGuides,
  ...printingPackagingSignageTypeGuides,
  ...logisticsSupplyChainTypeGuides,
  ...eCommerceOnlineBusinessTypeGuides,
  ...energyEnvironmentalServicesTypeGuides,
  ...recruitmentEmploymentTypeGuides,
  ...industrialCommercialServicesTypeGuides,
  ...petsAnimalServicesTypeGuides,
  ...securitySafetyTypeGuides,
  ...fashionLifestyleTypeGuides,
  ...sportsRecreationTypeGuides,
  ...religiousSpiritualCulturalTypeGuides,
  ...nonProfitSocialOrganisationsTypeGuides,
  ...b2bCorporateServicesTypeGuides,
  ...luxuryPremiumServicesTypeGuides,
];
