/**
 * ============================================================================
 * BISHORA — INDUSTRY IMAGE SOURCE REGISTRY
 * ============================================================================
 * One central list of every photograph used by the industry directory.
 *
 * Rules for adding an image:
 * 1. Only use a legitimate free-stock source (Pexels or Unsplash).
 * 2. Record the exact asset URL and the source page URL.
 * 3. Never add an image whose licence cannot be verified.
 * 4. Keep the alt text factual — describe the photograph, do not stuff keywords.
 * 5. Add the id to at least one scene so it is actually used on a page.
 *
 * All current assets are Pexels photographs used under the Pexels License.
 * The direct CDN asset for each id was verified (HTTP 200, image/jpeg) on
 * 2026-10-27 before being converted to local WebP files.
 * ============================================================================
 */

export type ImageSceneId =
  | 'restaurant'
  | 'cafe'
  | 'bar'
  | 'bakery'
  | 'catering'
  | 'hotel'
  | 'hospital'
  | 'dental'
  | 'skin-clinic'
  | 'diagnostics'
  | 'wellness'
  | 'veterinary'
  | 'legal'
  | 'accounting'
  | 'consulting'
  | 'agency'
  | 'electrician'
  | 'plumbing'
  | 'carpentry'
  | 'painting'
  | 'cleaning'
  | 'security'
  | 'moving'
  | 'school'
  | 'coaching'
  | 'computer-training'
  | 'arts-education'
  | 'retail-fashion'
  | 'retail-home'
  | 'retail-daily'
  | 'retail-electronics'
  | 'auto-sales'
  | 'auto-service'
  | 'car-care'
  | 'real-estate'
  | 'construction'
  | 'interior'
  | 'salon'
  | 'spa'
  | 'gym'
  | 'yoga'
  | 'travel'
  | 'transport'
  | 'manufacturing'
  | 'warehouse'
  | 'agriculture'
  | 'horticulture'
  | 'technology'
  | 'media'
  | 'events'
  | 'photography'
  | 'printing'
  | 'logistics'
  | 'ecommerce'
  | 'energy'
  | 'environment'
  | 'recruitment'
  | 'industrial'
  | 'pets'
  | 'safety'
  | 'fashion-brand'
  | 'sports'
  | 'religious'
  | 'nonprofit'
  | 'corporate'
  | 'luxury';

export type ImageSource = {
  /** Stable asset id used by the scene registry and components. */
  id: string;
  /** Pexels photo id, used to build the CDN and source URLs. */
  pexels: number;
  /** Factual alt text describing the photograph. */
  alt: string;
  /** Scenes (page families) this photograph genuinely fits. */
  scenes: ImageSceneId[];
};

export const imageSources: ImageSource[] = [
  // Food & Hospitality -------------------------------------------------------
  { id: 'restaurant-interior', pexels: 67468, alt: 'Restaurant dining room with tables set for service', scenes: ['restaurant', 'catering'] },
  { id: 'restaurant-service', pexels: 262978, alt: 'Waiter carrying plated food to a restaurant table', scenes: ['restaurant', 'catering'] },
  { id: 'restaurant-indian-food', pexels: 958545, alt: 'Spread of Indian dishes served on a restaurant table', scenes: ['restaurant', 'catering'] },
  { id: 'restaurant-fine-dining', pexels: 941861, alt: 'Fine dining restaurant tables with wine glasses at night', scenes: ['restaurant', 'luxury', 'hotel'] },
  { id: 'fast-food-burger', pexels: 1639557, alt: 'Burger with cheese and fresh vegetables', scenes: ['restaurant', 'cafe'] },
  { id: 'fast-food-pizza', pexels: 315755, alt: 'Sliced pizza on a wooden board', scenes: ['restaurant', 'cafe'] },
  { id: 'cafe-latte', pexels: 312418, alt: 'Cup of coffee with latte art on a cafe table', scenes: ['cafe', 'bakery'] },
  { id: 'cafe-table', pexels: 904616, alt: 'Cafe table with tea, flowers and a menu', scenes: ['cafe'] },
  { id: 'cafe-pancakes', pexels: 376464, alt: 'Stack of pancakes with strawberries and syrup', scenes: ['cafe', 'bakery'] },
  { id: 'cafe-sandwich', pexels: 461198, alt: 'Wrap sandwich filled with fresh vegetables', scenes: ['cafe'] },
  { id: 'bar-interior', pexels: 1058277, alt: 'Bar counter with bottles and guests in the evening', scenes: ['bar'] },
  { id: 'bar-bottles', pexels: 1283219, alt: 'Backlit shelves of bottles behind a bar', scenes: ['bar'] },
  { id: 'bar-lounge', pexels: 260922, alt: 'Dimly lit restaurant and bar interior', scenes: ['bar', 'restaurant', 'luxury'] },
  { id: 'bakery-desserts', pexels: 587741, alt: 'Dessert table with cakes and pastries at an event', scenes: ['bakery', 'catering', 'events'] },
  { id: 'coffee-beans', pexels: 894695, alt: 'Coffee beans being roasted', scenes: ['cafe', 'bakery'] },
  { id: 'food-platter', pexels: 1132047, alt: 'Fruit platter with sliced fresh fruit', scenes: ['catering', 'restaurant'] },
  { id: 'hotel-room', pexels: 210604, alt: 'Bright hotel room with a neatly made bed', scenes: ['hotel'] },
  { id: 'hotel-suite', pexels: 1579253, alt: 'Hotel suite bed with a dessert tray and wine', scenes: ['hotel', 'luxury'] },
  { id: 'hotel-bed', pexels: 164595, alt: 'Hotel bedroom with white bedding and warm lighting', scenes: ['hotel'] },
  { id: 'hotel-lobby', pexels: 271624, alt: 'Modern hotel room interior with large windows', scenes: ['hotel'] },
  { id: 'hotel-door', pexels: 271639, alt: 'Hand opening a hotel room door', scenes: ['hotel'] },
  { id: 'resort-pool', pexels: 189296, alt: 'Resort swimming pool with umbrellas and loungers', scenes: ['hotel', 'luxury'] },
  { id: 'resort-palms', pexels: 338504, alt: 'Tropical resort pool surrounded by palm trees', scenes: ['hotel'] },
  { id: 'resort-evening', pexels: 258154, alt: 'Resort villas lit up beside a pool at dusk', scenes: ['hotel', 'luxury'] },
  { id: 'hotel-rooftop', pexels: 261102, alt: 'Rooftop swimming pool with a city view', scenes: ['hotel', 'luxury'] },
  { id: 'hotel-waterfront', pexels: 1450363, alt: 'Waterfront restaurant building at sunset', scenes: ['hotel', 'restaurant'] },

  // Healthcare ---------------------------------------------------------------
  { id: 'hospital-room', pexels: 236380, alt: 'Hospital room with a bed and medical equipment', scenes: ['hospital', 'diagnostics'] },
  { id: 'doctor-portrait', pexels: 5215024, alt: 'Doctor wearing a stethoscope and white coat', scenes: ['hospital', 'diagnostics'] },
  { id: 'doctor-consult', pexels: 7578803, alt: 'Doctor discussing notes with a patient', scenes: ['hospital', 'diagnostics'] },
  { id: 'doctor-stethoscope', pexels: 4021775, alt: 'Doctor with a stethoscope standing with arms crossed', scenes: ['hospital'] },
  { id: 'medical-flatlay', pexels: 4386466, alt: 'Stethoscope, face mask and heart shapes on a light background', scenes: ['hospital', 'diagnostics'] },
  { id: 'dental-chair', pexels: 305568, alt: 'Dental clinic chair and equipment', scenes: ['dental'] },
  { id: 'dental-treatment', pexels: 4269695, alt: 'Dentist examining a patient\'s teeth', scenes: ['dental'] },
  { id: 'dental-closeup', pexels: 6528907, alt: 'Close-up of a dental procedure', scenes: ['dental'] },
  { id: 'dental-consult', pexels: 3845983, alt: 'Dentist talking with a patient in the clinic', scenes: ['dental'] },
  { id: 'skin-treatment', pexels: 3738345, alt: 'Woman receiving a facial skin treatment', scenes: ['skin-clinic', 'spa', 'salon'] },
  { id: 'ultrasound', pexels: 6235660, alt: 'Ultrasound scan displayed on a medical monitor', scenes: ['diagnostics', 'hospital'] },
  { id: 'spa-oils', pexels: 3865676, alt: 'Essential oils and lavender arranged on a spa table', scenes: ['spa', 'wellness', 'luxury'] },
  { id: 'massage', pexels: 3997994, alt: 'Person receiving a back massage', scenes: ['spa', 'wellness'] },
  { id: 'foot-massage', pexels: 5240677, alt: 'Foot massage at a spa', scenes: ['spa', 'wellness'] },
  { id: 'vet-dog', pexels: 6235666, alt: 'Veterinarian holding a small dog', scenes: ['veterinary'] },
  { id: 'pets-dogs', pexels: 5731866, alt: 'Two dogs sitting beside a toy stethoscope', scenes: ['veterinary', 'pets'] },
  { id: 'cat', pexels: 1170986, alt: 'Orange cat looking at the camera', scenes: ['veterinary', 'pets'] },

  // Professional services ----------------------------------------------------
  { id: 'legal-gavel', pexels: 5668473, alt: 'Wooden gavel on a dark desk', scenes: ['legal'] },
  { id: 'legal-closeup', pexels: 6077326, alt: 'Gavel resting on a wooden stand', scenes: ['legal'] },
  { id: 'legal-statue', pexels: 8112199, alt: 'Statue of justice holding scales', scenes: ['legal'] },
  { id: 'document-signing', pexels: 3760067, alt: 'Advisor explaining a document to a client', scenes: ['legal', 'accounting', 'consulting'] },
  { id: 'accounting-desk', pexels: 6693661, alt: 'Person working with invoices and a calculator', scenes: ['accounting'] },
  { id: 'tax-forms', pexels: 6863254, alt: 'Tax forms and notes spread on a desk', scenes: ['accounting'] },
  { id: 'loan-document', pexels: 7841821, alt: 'Loan agreement document on a desk', scenes: ['accounting', 'legal'] },
  { id: 'cash-hands', pexels: 4386431, alt: 'Hands holding a stack of cash', scenes: ['accounting'] },
  { id: 'cards-payment', pexels: 259200, alt: 'Credit cards held in hand', scenes: ['accounting', 'ecommerce'] },
  { id: 'meeting-room', pexels: 1181406, alt: 'Business team meeting in a glass-walled office', scenes: ['consulting', 'corporate'] },
  { id: 'team-meeting', pexels: 3184339, alt: 'Colleagues discussing work around a table', scenes: ['consulting', 'agency', 'corporate'] },
  { id: 'office-team', pexels: 2422293, alt: 'Team working together at office desks', scenes: ['consulting', 'corporate', 'recruitment'] },
  { id: 'office-lobby', pexels: 2507010, alt: 'Modern office reception and lounge area', scenes: ['consulting', 'corporate'] },
  { id: 'strategy-hands', pexels: 3184292, alt: 'Hands reviewing charts and plans on a desk', scenes: ['consulting', 'agency'] },
  { id: 'consulting-notes', pexels: 5668858, alt: 'Consultant taking notes during a client meeting', scenes: ['consulting', 'recruitment'] },
  { id: 'handshake', pexels: 5439381, alt: 'Two people shaking hands in an office', scenes: ['consulting', 'corporate', 'recruitment'] },
  { id: 'handshake-deal', pexels: 3184465, alt: 'Business handshake across a desk', scenes: ['consulting', 'corporate'] },
  { id: 'team-celebrate', pexels: 3184419, alt: 'Team celebrating together in an office', scenes: ['corporate', 'recruitment'] },
  { id: 'laptop-analytics', pexels: 265087, alt: 'Laptop showing a marketing analytics dashboard', scenes: ['agency'] },
  { id: 'marketing-workshop', pexels: 7688460, alt: 'Team planning a marketing strategy with sticky notes', scenes: ['agency'] },
  { id: 'creative-neon', pexels: 1616403, alt: 'Abstract neon ink artwork', scenes: ['agency', 'media', 'printing'] },
  { id: 'phone-app', pexels: 5076516, alt: 'Hand using a mobile app on a smartphone', scenes: ['agency', 'ecommerce'] },
  { id: 'analytics-desk', pexels: 590016, alt: 'Printed analytics charts beside a laptop', scenes: ['agency'] },

  // Home & local services ----------------------------------------------------
  { id: 'electrician-panel', pexels: 257736, alt: 'Electrician working on a distribution board', scenes: ['electrician'] },
  { id: 'electrician-work', pexels: 8005368, alt: 'Electrician installing wiring in a wall', scenes: ['electrician'] },
  { id: 'worker-portrait', pexels: 8005398, alt: 'Tradesperson in a checked shirt standing with arms crossed', scenes: ['electrician', 'industrial', 'safety'] },
  { id: 'plumbing', pexels: 5691536, alt: 'Plumber repairing a radiator valve', scenes: ['plumbing'] },
  { id: 'carpentry-tools', pexels: 3637782, alt: 'Woodworking hand tools on a workbench', scenes: ['carpentry'] },
  { id: 'hammer', pexels: 209235, alt: 'Hammer and nails on a wooden surface', scenes: ['carpentry', 'construction'] },
  { id: 'drill', pexels: 1249611, alt: 'Person using a power drill on wood', scenes: ['carpentry', 'plumbing'] },
  { id: 'furniture-workshop', pexels: 6804583, alt: 'Craftsman working in a furniture workshop', scenes: ['carpentry', 'retail-home', 'interior'] },
  { id: 'paint-roller', pexels: 1669758, alt: 'Paint roller loaded with white paint', scenes: ['painting'] },
  { id: 'paint-brush', pexels: 6474479, alt: 'Hand holding a paint brush', scenes: ['painting'] },
  { id: 'painting-wall', pexels: 5691621, alt: 'Worker preparing a wall for painting', scenes: ['painting'] },
  { id: 'cleaning-team', pexels: 6195121, alt: 'Cleaning staff in uniforms with equipment', scenes: ['cleaning', 'industrial'] },
  { id: 'cleaning-office', pexels: 6195123, alt: 'Two cleaners working in an office', scenes: ['cleaning'] },
  { id: 'cleaning-kitchen', pexels: 6197122, alt: 'Person cleaning a kitchen counter', scenes: ['cleaning'] },
  { id: 'cleaning-tap', pexels: 4239130, alt: 'Gloved hand cleaning a bathroom tap', scenes: ['cleaning', 'plumbing'] },
  { id: 'cleaning-glass', pexels: 4239146, alt: 'Gloved hand cleaning a glass surface', scenes: ['cleaning'] },
  { id: 'cctv', pexels: 430208, alt: 'CCTV cameras mounted on a wall', scenes: ['security', 'safety'] },
  { id: 'cctv-side', pexels: 207574, alt: 'Security camera mounted on a building exterior', scenes: ['security', 'safety'] },
  { id: 'cctv-pole', pexels: 96612, alt: 'Outdoor surveillance camera on a pole', scenes: ['security', 'safety'] },
  { id: 'workers-uniform', pexels: 4483611, alt: 'Workers in uniforms sitting outside a site', scenes: ['security', 'industrial', 'safety'] },
  { id: 'moving-boxes', pexels: 6169051, alt: 'Worker loading boxes into a delivery van', scenes: ['moving', 'logistics'] },
  { id: 'courier-van', pexels: 5025669, alt: 'Courier carrying a parcel to a van', scenes: ['moving', 'logistics'] },
  { id: 'warehouse-workers', pexels: 4481259, alt: 'Workers moving boxes in a warehouse', scenes: ['warehouse', 'logistics', 'moving'] },

  // Education ----------------------------------------------------------------
  { id: 'classroom-kids', pexels: 5212345, alt: 'Teacher working with students in a classroom', scenes: ['school', 'coaching'] },
  { id: 'school-building', pexels: 668300, alt: 'Large brick school building', scenes: ['school'] },
  { id: 'classroom-empty', pexels: 5905445, alt: 'Empty classroom with desks and a whiteboard', scenes: ['school', 'coaching', 'computer-training'] },
  { id: 'library', pexels: 256541, alt: 'Shelves of books in a library', scenes: ['school'] },
  { id: 'graduation', pexels: 267885, alt: 'Graduates throwing caps in the air', scenes: ['school'] },
  { id: 'math-board', pexels: 3862130, alt: 'Teacher writing equations on a blackboard', scenes: ['coaching'] },
  { id: 'tutoring', pexels: 1720186, alt: 'Children studying with a tutor at a table', scenes: ['coaching'] },
  { id: 'online-class', pexels: 4144923, alt: 'Online class on a laptop beside handwritten notes', scenes: ['coaching', 'computer-training'] },
  { id: 'monitors-code', pexels: 1181675, alt: 'Programmer working with multiple monitors', scenes: ['computer-training', 'technology'] },
  { id: 'code-screen', pexels: 546819, alt: 'Lines of code on a laptop screen', scenes: ['computer-training', 'technology'] },
  { id: 'coding-laptop', pexels: 574071, alt: 'Hands typing code on a laptop', scenes: ['computer-training', 'technology'] },
  { id: 'music-woman', pexels: 1536619, alt: 'Woman listening to music against a yellow background', scenes: ['arts-education'] },
  { id: 'stage-band', pexels: 167636, alt: 'Band performing under stage lights', scenes: ['arts-education', 'events'] },
  { id: 'concert-crowd', pexels: 976866, alt: 'Concert crowd with hands raised', scenes: ['arts-education', 'events'] },

  // Retail -------------------------------------------------------------------
  { id: 'clothes-rack', pexels: 1884581, alt: 'Clothing folded on store shelves', scenes: ['retail-fashion', 'fashion-brand'] },
  { id: 'shoes-display', pexels: 298863, alt: 'Leather shoes and folded shirts on display', scenes: ['retail-fashion', 'fashion-brand'] },
  { id: 'hangers', pexels: 996329, alt: 'Clothes hanging on wooden hangers', scenes: ['retail-fashion', 'fashion-brand'] },
  { id: 'shopping-woman', pexels: 974911, alt: 'Woman carrying shopping bags inside a store', scenes: ['retail-fashion', 'fashion-brand', 'luxury'] },
  { id: 'fashion-woman', pexels: 1926769, alt: 'Woman modelling a neutral outfit', scenes: ['retail-fashion', 'fashion-brand'] },
  { id: 'folded-clothes', pexels: 934070, alt: 'Folded clothes with glasses placed on top', scenes: ['retail-fashion'] },
  { id: 'living-room', pexels: 1571460, alt: 'Modern living room with a sofa and staircase', scenes: ['retail-home', 'interior'] },
  { id: 'living-room-2', pexels: 1571468, alt: 'Bright living room with a blue rug', scenes: ['retail-home', 'interior'] },
  { id: 'kitchen-modern', pexels: 2724749, alt: 'White modern kitchen with an island', scenes: ['retail-home', 'interior'] },
  { id: 'supermarket', pexels: 1005638, alt: 'Supermarket aisle with stocked shelves', scenes: ['retail-daily'] },
  { id: 'mall', pexels: 264507, alt: 'Shopping mall interior with escalators', scenes: ['retail-daily', 'retail-fashion'] },
  { id: 'produce', pexels: 264636, alt: 'Fresh produce section in a supermarket', scenes: ['retail-daily'] },
  { id: 'veggies', pexels: 2252584, alt: 'Crates of fresh vegetables at a market', scenes: ['retail-daily', 'agriculture'] },
  { id: 'bike-screen', pexels: 3205730, alt: 'Motorcycle displayed on a large screen', scenes: ['retail-electronics', 'auto-sales'] },

  // Automotive ---------------------------------------------------------------
  { id: 'car-mercedes', pexels: 112460, alt: 'Silver Mercedes car parked outdoors', scenes: ['auto-sales'] },
  { id: 'car-blue', pexels: 170811, alt: 'Blue BMW sedan on a road', scenes: ['auto-sales'] },
  { id: 'car-audi', pexels: 244206, alt: 'Blue Audi sedan parked on a road', scenes: ['auto-sales'] },
  { id: 'car-sports', pexels: 3802510, alt: 'Grey sports car on a plain background', scenes: ['auto-sales', 'luxury'] },
  { id: 'car-range', pexels: 116675, alt: 'White Range Rover SUV', scenes: ['auto-sales', 'luxury'] },
  { id: 'pickup', pexels: 1149137, alt: 'Pickup truck parked on a mountain road', scenes: ['auto-sales'] },
  { id: 'car-red', pexels: 210019, alt: 'Red sports car driving on a road', scenes: ['auto-sales'] },
  { id: 'mechanic', pexels: 3807277, alt: 'Mechanic working under a car bonnet', scenes: ['auto-service'] },
  { id: 'mechanic-lift', pexels: 4489732, alt: 'Car raised on a workshop lift', scenes: ['auto-service'] },
  { id: 'car-wash', pexels: 3354648, alt: 'Car being washed with high-pressure water', scenes: ['car-care'] },
  { id: 'car-wash-2', pexels: 372810, alt: 'Car covered in soap foam at a wash bay', scenes: ['car-care'] },
  { id: 'car-detailing', pexels: 6872164, alt: 'Person polishing a car', scenes: ['car-care'] },

  // Real estate & construction -----------------------------------------------
  { id: 'house', pexels: 106399, alt: 'Suburban house with a driveway at dusk', scenes: ['real-estate'] },
  { id: 'house-2', pexels: 1396122, alt: 'Two-storey house with a lit porch', scenes: ['real-estate'] },
  { id: 'house-stone', pexels: 259588, alt: 'Stone house with a garden path', scenes: ['real-estate'] },
  { id: 'apartment', pexels: 323780, alt: 'Modern apartment building exterior', scenes: ['real-estate'] },
  { id: 'apartments', pexels: 439391, alt: 'Residential apartment towers', scenes: ['real-estate'] },
  { id: 'house-lawn', pexels: 280229, alt: 'House with a large green lawn', scenes: ['real-estate'] },
  { id: 'engineers', pexels: 1216589, alt: 'Two engineers in hard hats reviewing plans', scenes: ['construction', 'industrial'] },
  { id: 'construction-workers', pexels: 8486972, alt: 'Construction worker in a hard hat and safety vest', scenes: ['construction', 'industrial'] },
  { id: 'construction-site', pexels: 8961065, alt: 'Workers on a construction site with scaffolding', scenes: ['construction'] },
  { id: 'concrete', pexels: 2219024, alt: 'Worker smoothing concrete with a trowel', scenes: ['construction'] },
  { id: 'tiling', pexels: 5691622, alt: 'Worker laying tiles on a wall', scenes: ['construction', 'interior'] },
  { id: 'kitchen-white', pexels: 1080721, alt: 'White kitchen with pendant lights', scenes: ['interior', 'retail-home'] },
  { id: 'apartment-interior', pexels: 1643383, alt: 'Modern apartment living room', scenes: ['interior'] },
  { id: 'living-room-3', pexels: 1457842, alt: 'Contemporary living room with a television', scenes: ['interior'] },

  // Beauty & lifestyle -------------------------------------------------------
  { id: 'salon-hair', pexels: 3065171, alt: 'Hairdresser styling a client\'s hair', scenes: ['salon'] },
  { id: 'salon-wash', pexels: 3993449, alt: 'Client getting a hair wash at a salon', scenes: ['salon'] },
  { id: 'barber-tools', pexels: 1319460, alt: 'Barber scissors hanging on a wall', scenes: ['salon'] },
  { id: 'barber-tools-2', pexels: 3992874, alt: 'Clippers, scissors and combs on a barber station', scenes: ['salon'] },
  { id: 'barber-cut', pexels: 3998429, alt: 'Barber trimming a client\'s beard', scenes: ['salon'] },
  { id: 'gym-treadmill', pexels: 1954524, alt: 'Person running on a treadmill in a gym', scenes: ['gym'] },
  { id: 'gym-barbell', pexels: 2261477, alt: 'Person lifting a barbell in a gym', scenes: ['gym'] },
  { id: 'gym-deadlift', pexels: 841130, alt: 'Legs of a person lifting a barbell', scenes: ['gym'] },
  { id: 'gym-dumbbells', pexels: 1552252, alt: 'Dumbbells on a gym floor', scenes: ['gym'] },
  { id: 'gym-woman', pexels: 3757954, alt: 'Woman exercising on a gym machine', scenes: ['gym'] },
  { id: 'yoga-indoor', pexels: 3822906, alt: 'Woman practising yoga indoors', scenes: ['yoga'] },
  { id: 'yoga-stretch', pexels: 3823039, alt: 'Woman stretching in a yoga studio', scenes: ['yoga'] },
  { id: 'yoga-sunset', pexels: 1051838, alt: 'Silhouette of a person meditating at sunset', scenes: ['yoga', 'wellness'] },

  // Travel & transport -------------------------------------------------------
  { id: 'traveler', pexels: 1008155, alt: 'Traveller pulling a suitcase through an airport', scenes: ['travel', 'transport'] },
  { id: 'airplane', pexels: 210199, alt: 'Aircraft flying at sunset', scenes: ['travel'] },
  { id: 'airplane-front', pexels: 358319, alt: 'Aircraft on the runway in fog', scenes: ['travel', 'transport'] },
  { id: 'helicopter', pexels: 2866244, alt: 'Helicopter on a mountain at sunset', scenes: ['travel'] },
  { id: 'london', pexels: 672532, alt: 'London skyline with Big Ben', scenes: ['travel'] },
  { id: 'mountains', pexels: 772803, alt: 'Snow-covered mountain landscape', scenes: ['travel'] },
  { id: 'temple-bali', pexels: 2166553, alt: 'Temple gate in Bali', scenes: ['travel', 'religious'] },
  { id: 'heritage', pexels: 210017, alt: 'Stone heritage buildings along a lane', scenes: ['travel', 'religious'] },
  { id: 'highway', pexels: 210182, alt: 'Traffic on a city highway at sunset', scenes: ['transport'] },

  // Manufacturing & industry -------------------------------------------------
  { id: 'factory', pexels: 236705, alt: 'Factory floor with machinery and walkways', scenes: ['manufacturing', 'industrial'] },
  { id: 'factory-2', pexels: 236698, alt: 'Industrial factory interior with steel structures', scenes: ['manufacturing'] },
  { id: 'factory-3', pexels: 236709, alt: 'Empty factory hall with overhead cranes', scenes: ['manufacturing', 'warehouse'] },
  { id: 'bottling', pexels: 1148820, alt: 'Bottling line in a beverage factory', scenes: ['manufacturing'] },
  { id: 'turbine-worker', pexels: 2760241, alt: 'Worker inspecting a large industrial turbine', scenes: ['manufacturing', 'industrial'] },
  { id: 'refinery', pexels: 257700, alt: 'Industrial refinery towers', scenes: ['manufacturing', 'energy', 'industrial'] },
  { id: 'worker-watch', pexels: 5974336, alt: 'Craftsman working on a detailed task', scenes: ['manufacturing'] },
  { id: 'materials', pexels: 5691620, alt: 'Samples of coloured materials and fabric', scenes: ['printing', 'manufacturing'] },

  // Agriculture --------------------------------------------------------------
  { id: 'crops', pexels: 96715, alt: 'Green crop field at sunrise', scenes: ['agriculture'] },
  { id: 'tractor', pexels: 2933243, alt: 'Green tractor working in a field', scenes: ['agriculture'] },
  { id: 'oranges', pexels: 2135677, alt: 'Oranges growing on a tree', scenes: ['agriculture', 'horticulture'] },
  { id: 'drone-field', pexels: 442589, alt: 'Drone flying over a field', scenes: ['agriculture'] },
  { id: 'plants', pexels: 207003, alt: 'Close-up of seed heads in a field', scenes: ['agriculture', 'horticulture'] },
  { id: 'plants-2', pexels: 207037, alt: 'Thistle plants growing in a field', scenes: ['horticulture'] },
  { id: 'forest', pexels: 1488195, alt: 'Sunlight through a forest', scenes: ['environment', 'horticulture'] },

  // Technology & media -------------------------------------------------------
  { id: 'digital-face', pexels: 3861969, alt: 'Digital portrait made of data and light', scenes: ['technology'] },
  { id: 'binary-face', pexels: 5473955, alt: 'Woman\'s face overlaid with binary code', scenes: ['technology'] },
  { id: 'creator-desk', pexels: 4491461, alt: 'Creator working at a desk with a camera', scenes: ['technology', 'media', 'photography'] },
  { id: 'video-camera', pexels: 3062541, alt: 'Film crew operating a cinema camera', scenes: ['media', 'photography'] },
  { id: 'cinema-camera', pexels: 9220963, alt: 'Videographer operating a camera rig', scenes: ['media', 'photography'] },
  { id: 'photographer', pexels: 1264210, alt: 'Photographer holding a camera', scenes: ['photography'] },
  { id: 'camera-tripod', pexels: 212372, alt: 'Camera on a tripod overlooking mountains', scenes: ['photography'] },

  // Events -------------------------------------------------------------------
  { id: 'wedding-table', pexels: 2306281, alt: 'Wedding reception table with floral decor', scenes: ['events'] },
  { id: 'event-crowd', pexels: 2747448, alt: 'Crowd at a concert with stage lights', scenes: ['events'] },
  { id: 'event-audience', pexels: 2774556, alt: 'Audience watching a stage event', scenes: ['events'] },
  { id: 'concert-lights', pexels: 1190297, alt: 'Concert stage with lights and fireworks', scenes: ['events'] },

  // Printing & packaging -----------------------------------------------------
  { id: 'packaging-box', pexels: 4498152, alt: 'Open cardboard packaging box', scenes: ['printing', 'ecommerce'] },
  { id: 'ecommerce-desk', pexels: 4145190, alt: 'Laptop on a desk with packaging and stationery', scenes: ['printing', 'ecommerce'] },

  // Logistics ----------------------------------------------------------------
  { id: 'port-cranes', pexels: 1427541, alt: 'Container port with cranes and stacked containers', scenes: ['logistics'] },
  { id: 'containers', pexels: 906494, alt: 'Stacked shipping containers', scenes: ['logistics'] },
  { id: 'port-sunset', pexels: 3057960, alt: 'Container port at sunset', scenes: ['logistics'] },
  { id: 'trucks', pexels: 2199293, alt: 'Trucks driving on a highway', scenes: ['logistics', 'transport'] },
  { id: 'port-night', pexels: 753331, alt: 'Container terminal lit at night', scenes: ['logistics'] },
  { id: 'industrial-warehouse', pexels: 209251, alt: 'Warehouse loading bay with roller doors', scenes: ['warehouse'] },
  { id: 'warehouse-racks', pexels: 4483610, alt: 'Tall storage racks inside a warehouse', scenes: ['warehouse', 'logistics'] },
  { id: 'warehouse-empty', pexels: 325229, alt: 'Empty indoor parking area', scenes: ['warehouse'] },

  // E-commerce ---------------------------------------------------------------
  { id: 'shopping-laptop', pexels: 4968391, alt: 'Person shopping online with a payment card and laptop', scenes: ['ecommerce'] },
  { id: 'online-shopping', pexels: 6214476, alt: 'Tablet showing an online store with shipping boxes', scenes: ['ecommerce'] },

  // Energy & environment -----------------------------------------------------
  { id: 'solar-field', pexels: 2800832, alt: 'Rows of solar panels in a field', scenes: ['energy'] },
  { id: 'solar-clouds', pexels: 356036, alt: 'Solar panels under a cloudy sky', scenes: ['energy'] },
  { id: 'solar-sunset', pexels: 371917, alt: 'Solar panels at sunset', scenes: ['energy'] },
  { id: 'solar-wind', pexels: 433308, alt: 'Solar panels and a wind turbine in snow', scenes: ['energy'] },
  { id: 'wind-turbine', pexels: 414837, alt: 'Wind turbine in a green landscape', scenes: ['energy', 'environment'] },
  { id: 'lake', pexels: 1914581, alt: 'Calm lake and trees in the morning', scenes: ['environment'] },

  // Recruitment --------------------------------------------------------------
  { id: 'interview', pexels: 1181605, alt: 'Two people in a job interview', scenes: ['recruitment'] },
  { id: 'interview-two', pexels: 1181712, alt: 'Two colleagues talking in an office', scenes: ['recruitment'] },
  { id: 'candidate', pexels: 1181690, alt: 'Professional woman sitting in an office', scenes: ['recruitment'] },
  { id: 'candidate-man', pexels: 1181391, alt: 'Professional man in a blazer', scenes: ['recruitment'] },

  // Pets ---------------------------------------------------------------------
  { id: 'puppies', pexels: 1108099, alt: 'Two golden retriever puppies in grass', scenes: ['pets'] },
  { id: 'dachshund', pexels: 2023384, alt: 'Dachshund puppy looking at the camera', scenes: ['pets'] },
  { id: 'frenchie', pexels: 4587996, alt: 'French bulldog puppy', scenes: ['pets'] },
  { id: 'cat-green', pexels: 617278, alt: 'Cat with green eyes in the dark', scenes: ['pets'] },
  { id: 'dog-adopt', pexels: 6568501, alt: 'Dog beside a take-me-home sign', scenes: ['pets', 'nonprofit'] },
  { id: 'white-dog', pexels: 6994990, alt: 'White dog sitting outdoors', scenes: ['pets'] },

  // Sports -------------------------------------------------------------------
  { id: 'swimming', pexels: 1263349, alt: 'Swimmers racing in a pool', scenes: ['sports'] },
  { id: 'swimmer', pexels: 863988, alt: 'Swimmer doing laps in a pool', scenes: ['sports'] },
  { id: 'basketball', pexels: 1752757, alt: 'Basketball falling through a hoop', scenes: ['sports'] },
  { id: 'hoop', pexels: 358042, alt: 'Basketball above a hoop', scenes: ['sports'] },
  { id: 'cycling', pexels: 248547, alt: 'Cyclists racing on a road', scenes: ['sports'] },
  { id: 'athletes', pexels: 1812964, alt: 'Athlete stretching outdoors', scenes: ['sports'] },

  // Religious & non-profit ---------------------------------------------------
  { id: 'temple-statue', pexels: 7363109, alt: 'Statue at a temple entrance', scenes: ['religious'] },
  { id: 'volunteers', pexels: 6646918, alt: 'Volunteers packing donation boxes', scenes: ['nonprofit'] },
  { id: 'volunteers-2', pexels: 6646914, alt: 'Volunteers distributing supplies', scenes: ['nonprofit'] },
  { id: 'donation', pexels: 6994985, alt: 'Volunteers sorting donated items', scenes: ['nonprofit'] },
];

/** Three to five photographs per scene, used to rotate imagery between pages. */
export const imageSceneIds: Record<ImageSceneId, string[]> = {
  restaurant: ['restaurant-interior', 'restaurant-service', 'restaurant-indian-food', 'restaurant-fine-dining'],
  cafe: ['cafe-latte', 'cafe-table', 'cafe-pancakes', 'cafe-sandwich'],
  bar: ['bar-interior', 'bar-bottles', 'bar-lounge'],
  bakery: ['bakery-desserts', 'cafe-pancakes', 'coffee-beans'],
  catering: ['restaurant-service', 'restaurant-indian-food', 'bakery-desserts', 'food-platter'],
  hotel: ['hotel-room', 'hotel-suite', 'hotel-bed', 'resort-pool', 'resort-evening', 'hotel-lobby'],
  hospital: ['hospital-room', 'doctor-consult', 'doctor-portrait', 'doctor-stethoscope', 'medical-flatlay'],
  dental: ['dental-chair', 'dental-treatment', 'dental-closeup', 'dental-consult'],
  'skin-clinic': ['skin-treatment', 'doctor-consult', 'spa-oils'],
  diagnostics: ['ultrasound', 'hospital-room', 'doctor-consult', 'medical-flatlay'],
  wellness: ['spa-oils', 'massage', 'foot-massage', 'yoga-sunset'],
  veterinary: ['vet-dog', 'pets-dogs', 'cat'],
  legal: ['legal-gavel', 'legal-closeup', 'legal-statue', 'document-signing'],
  accounting: ['accounting-desk', 'tax-forms', 'loan-document', 'cash-hands'],
  consulting: ['meeting-room', 'team-meeting', 'strategy-hands', 'consulting-notes', 'handshake'],
  agency: ['laptop-analytics', 'marketing-workshop', 'team-meeting', 'analytics-desk', 'phone-app'],
  electrician: ['electrician-panel', 'electrician-work', 'worker-portrait'],
  plumbing: ['plumbing', 'drill', 'cleaning-tap'],
  carpentry: ['carpentry-tools', 'hammer', 'drill', 'furniture-workshop'],
  painting: ['paint-roller', 'paint-brush', 'painting-wall'],
  cleaning: ['cleaning-team', 'cleaning-office', 'cleaning-kitchen', 'cleaning-glass'],
  security: ['cctv', 'cctv-side', 'cctv-pole', 'workers-uniform'],
  moving: ['moving-boxes', 'courier-van', 'warehouse-workers'],
  school: ['classroom-kids', 'school-building', 'classroom-empty', 'library', 'graduation'],
  coaching: ['math-board', 'tutoring', 'online-class', 'classroom-kids'],
  'computer-training': ['monitors-code', 'code-screen', 'coding-laptop', 'online-class'],
  'arts-education': ['music-woman', 'stage-band', 'concert-crowd'],
  'retail-fashion': ['clothes-rack', 'shoes-display', 'hangers', 'shopping-woman', 'fashion-woman'],
  'retail-home': ['living-room', 'living-room-2', 'furniture-workshop', 'kitchen-modern'],
  'retail-daily': ['supermarket', 'produce', 'mall', 'veggies'],
  'retail-electronics': ['bike-screen', 'code-screen', 'monitors-code'],
  'auto-sales': ['car-mercedes', 'car-blue', 'car-audi', 'car-sports', 'pickup'],
  'auto-service': ['mechanic', 'mechanic-lift', 'car-wash'],
  'car-care': ['car-wash', 'car-wash-2', 'car-detailing'],
  'real-estate': ['house', 'house-2', 'apartment', 'apartments', 'house-lawn'],
  construction: ['engineers', 'construction-workers', 'construction-site', 'concrete', 'tiling'],
  interior: ['living-room', 'apartment-interior', 'living-room-3', 'kitchen-white', 'tiling'],
  salon: ['salon-hair', 'salon-wash', 'barber-tools-2', 'barber-cut'],
  spa: ['spa-oils', 'massage', 'foot-massage', 'skin-treatment'],
  gym: ['gym-treadmill', 'gym-barbell', 'gym-deadlift', 'gym-woman', 'gym-dumbbells'],
  yoga: ['yoga-indoor', 'yoga-stretch', 'yoga-sunset'],
  travel: ['traveler', 'airplane', 'london', 'mountains', 'temple-bali', 'helicopter'],
  transport: ['highway', 'airplane-front', 'traveler', 'trucks'],
  manufacturing: ['factory', 'factory-2', 'bottling', 'turbine-worker', 'worker-watch'],
  warehouse: ['industrial-warehouse', 'warehouse-racks', 'warehouse-empty', 'warehouse-workers'],
  agriculture: ['crops', 'tractor', 'oranges', 'drone-field', 'veggies'],
  horticulture: ['plants', 'plants-2', 'oranges', 'forest'],
  technology: ['monitors-code', 'code-screen', 'digital-face', 'binary-face', 'creator-desk'],
  media: ['video-camera', 'cinema-camera', 'creator-desk', 'creative-neon'],
  events: ['wedding-table', 'event-crowd', 'event-audience', 'concert-lights', 'stage-band'],
  photography: ['photographer', 'camera-tripod', 'video-camera', 'cinema-camera', 'creator-desk'],
  printing: ['packaging-box', 'ecommerce-desk', 'materials', 'creative-neon'],
  logistics: ['port-cranes', 'containers', 'trucks', 'port-sunset', 'warehouse-racks'],
  ecommerce: ['shopping-laptop', 'online-shopping', 'phone-app', 'packaging-box', 'ecommerce-desk'],
  energy: ['solar-field', 'solar-clouds', 'solar-sunset', 'wind-turbine', 'solar-wind'],
  environment: ['lake', 'forest', 'wind-turbine', 'crops'],
  recruitment: ['interview', 'interview-two', 'candidate', 'handshake', 'team-celebrate'],
  industrial: ['factory', 'engineers', 'turbine-worker', 'workers-uniform', 'construction-workers'],
  pets: ['puppies', 'cat', 'dachshund', 'frenchie', 'cat-green', 'dog-adopt'],
  safety: ['cctv', 'cctv-side', 'workers-uniform', 'worker-portrait'],
  'fashion-brand': ['fashion-woman', 'hangers', 'shopping-woman', 'shoes-display', 'clothes-rack'],
  sports: ['swimming', 'basketball', 'cycling', 'athletes', 'hoop', 'swimmer'],
  religious: ['temple-statue', 'temple-bali', 'heritage'],
  nonprofit: ['volunteers', 'volunteers-2', 'donation', 'dog-adopt'],
  corporate: ['meeting-room', 'office-lobby', 'team-meeting', 'handshake', 'team-celebrate'],
  luxury: ['car-sports', 'car-range', 'hotel-rooftop', 'restaurant-fine-dining', 'resort-pool', 'spa-oils'],
};
