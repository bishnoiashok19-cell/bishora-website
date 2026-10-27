import type { SubcategoryGuideSeed } from '../../types';

/** Group guides: Manufacturing & B2B. */
export const manufacturingB2bGroupGuides: SubcategoryGuideSeed[] = [
  {
    category: 'manufacturing-b2b',
    name: 'General Manufacturing',
    scene: 'manufacturing',
    tagline:
      'Manufacturer aur industrial company — dono production karte hain, lekin buyer ka sawal ek jagah product spec hota hai aur doosri jagah plant capability.',
    intro: [
      'Is group mein wo businesses hain jo apna product ya process dusre businesses ko dete hain. Buyer pehle specification, capacity aur delivery schedule match karta hai, phir sample ya plant visit ki baat karta hai.',
      'Manufacturer ka case product-led hota hai: range, MOQ, drawing aur sample. Industrial company ka case plant aur project-led hota hai: process, machinery, inspection aur documentation.',
    ],
    does: [
      'Client requirement ke hisaab se production aur batch planning',
      'Raw material sourcing, machining, assembly aur finishing',
      'Quality check aur dispatch se pehle inspection',
      'Bulk order, job work aur repeat supply coordination',
    ],
    expect: [
      'Product ya process ki clear specification',
      'MOQ, lead time aur dispatch location',
      'Sample, test report ya inspection ka process',
      'RFQ ka seedha contact aur reply time',
    ],
    priorities: [
      { title: 'Specification-led product pages banayein', why: 'B2B buyer material, size aur tolerance se hi vendor compare karta hai.' },
      { title: 'RFQ route simple rakhein', why: 'Quantity, drawing aur delivery location ek jagah milne se quote fast banta hai.' },
      { title: 'Capability ka proof dikhayein', why: 'Plant photos aur machinery list buyer ke shortlist karne ka main filter hai.' },
    ],
    mistakes: [
      'Har product ke liye "all types available" likhna.',
      'Capacity ya certification ka overclaim karna.',
      'RFQ ka reply bina timeline ke chhod dena.',
    ],
    check: [
      'Product range specifications ke saath website par hai?',
      'RFQ form ya email ka reply time kya hai?',
      'MOQ aur lead time clearly likha hai?',
      'Plant photos aur address sahi hain?',
    ],
    services: ['website-development', 'seo', 'email-marketing'],
  },
  {
    category: 'manufacturing-b2b',
    name: 'Textile & Apparel Manufacturing',
    scene: 'manufacturing',
    tagline:
      'Textile aur garment manufacturing — ek fabric banata hai, doosra usse finished garment. Buyer ka check dono jagah alag hota hai.',
    intro: [
      'Textile manufacturer yarn, fabric aur material deta hai. Uska buyer composition, GSM, width aur shade match karta hai. Garment manufacturer kapda kat kar silta hai, jahan tech pack, fit aur size set decide karte hain.',
      'Dono mein sample pehla step hai. Farak yeh hai ki textile mein swatch aur lot consistency matter karti hai, garment mein fit approval aur final inspection.',
    ],
    does: [
      'Yarn, fabric ya finished garment ki production',
      'Weaving, knitting, dyeing aur finishing',
      'Pattern making, grading aur fit sample development',
      'Packing, lot marking aur bulk dispatch',
    ],
    expect: [
      'Composition, GSM, width ya size range ki detail',
      'MOQ meters, kg ya per style ke hisaab se',
      'Sample timeline aur approval process',
      'Shade, fit aur packing ka clear standard',
    ],
    priorities: [
      { title: 'Specs ko standard format mein rakhein', why: 'Fabric aur garment buyer dono technical detail se hi compare karte hain.' },
      { title: 'Sample process explain karein', why: 'Order swatch ya fit approval ke baad hi confirm hota hai.' },
      { title: 'Portfolio sach dikhayein', why: 'Doosre brand ke designs dikhana buyer ke liye deal-breaker hai.' },
    ],
    mistakes: [
      'Photo aur actual shade ya fit ka farak.',
      'MOQ aur sampling charge hidden rakhna.',
      'Approval ke bina bulk production shuru karna.',
    ],
    check: [
      'Fabric ya garment specs website par hain?',
      'Sample request ka reply time kya hai?',
      'MOQ aur lead time likha hai?',
      'Portfolio mein actual produced work hai?',
    ],
    services: ['website-development', 'seo', 'email-marketing'],
  },
  {
    category: 'manufacturing-b2b',
    name: 'Industrial Production',
    scene: 'industrial',
    tagline:
      'Machinery, metal, plastic, electrical aur electronics — sab production hain, par buyer ka specification check bilkul alag hota hai.',
    intro: [
      'Is group mein component aur equipment banane wale businesses hain. Buyer pehle technical fit check karta hai: machine output, metal grade, plastic material, electrical rating ya electronics BOM.',
      'Isliye generic catalogue se kaam nahi chalta. Har category ke liye spec sheet, drawing ya file upload ka route chahiye, aur service ya spares ka scope bhi clear hona chahiye.',
    ],
    does: [
      'Client specification ke hisaab se machine, component ya equipment production',
      'Fabrication, moulding, assembly aur wiring',
      'Testing, inspection aur trial run',
      'Dispatch, installation aur after-sales support',
    ],
    expect: [
      'Model ya component wise technical specification',
      'Drawing, BOM ya BOQ ke basis par quote',
      'MOQ, lead time aur testing scope',
      'Spare, service aur installation ka process',
    ],
    priorities: [
      { title: 'Technical document ko page par rakhein', why: 'Spec sheet ya datasheet ke bina buyer enquiry nahi karta.' },
      { title: 'Application-wise page banayein', why: 'Har buyer apne use case ke hisaab se product dhoondhta hai.' },
      { title: 'Testing aur service scope likhein', why: 'Downtime aur failure ka risk hi purchase decision badalta hai.' },
    ],
    mistakes: [
      'Capacity ya rating ko maximum jaisa dikhana.',
      'Testing aur spare ka scope vague rakhna.',
      'Sirf PDF catalogue dena, page par detail nahi.',
    ],
    check: [
      'Spec sheet ya datasheet download hoti hai?',
      'Drawing ya BOM upload ka option hai?',
      'Testing aur service scope likha hai?',
      'Technical enquiry ka reply time kya hai?',
    ],
    services: ['website-development', 'seo', 'email-marketing'],
  },
  {
    category: 'manufacturing-b2b',
    name: 'Industrial Supply Chain',
    scene: 'warehouse',
    tagline:
      'Distributor, wholesaler, supplier, exporter aur equipment supplier — sab supply karte hain, par buyer ka sawal territory, stock ya terms par hota hai.',
    intro: [
      'Supply chain businesses product banate nahi, pahunchate hain. Buyer ko availability, rate basis, delivery area aur replacement ka bharosa chahiye hota hai.',
      'Distributor territory aur brand dekhta hai, wholesaler lot size aur pickup, supplier vendor registration, exporter Incoterms, aur equipment supplier demo aur service. Isliye ek jaisa content paanchon par nahi chalega.',
    ],
    does: [
      'Manufacturer product ya material ki bulk supply',
      'Stock planning, godown aur dispatch management',
      'Retailer, dealer aur business buyer coordination',
      'Transport, documentation aur replacement handling',
    ],
    expect: [
      'Product categories aur brands ki clear list',
      'MOQ, rate basis aur delivery area',
      'Stock availability aur dispatch time',
      'Replacement, return ya documentation policy',
    ],
    priorities: [
      { title: 'Territory aur availability clear likhein', why: 'Buyer pehle check karta hai aap uske area mein supply karte hain ya nahi.' },
      { title: 'Rate basis aur MOQ batayein', why: 'Piece, dozen, carton ya kg ka farak quote ko rok deta hai.' },
      { title: 'Order ka ek route fix karein', why: 'WhatsApp, phone aur form sab jagah se order aane par galti hoti hai.' },
    ],
    mistakes: [
      'Stock ko hamesha available dikhana.',
      'Authorisation ya network ka jhootha claim.',
      'Delivery area aur charges hidden rakhna.',
    ],
    check: [
      'Category list aur MOQ website par hai?',
      'Delivery area clearly likha hai?',
      'Price list ya rate basis milta hai?',
      'Order ka reply time kya hai?',
    ],
    services: ['website-development', 'seo', 'email-marketing'],
  },
  {
    category: 'manufacturing-b2b',
    name: 'Packaging',
    scene: 'printing',
    tagline:
      'Packaging company ka buyer size, material aur printing dekh kar sample maangta hai — dieline aur MOQ ke bina quote nahi banta.',
    intro: [
      'Packaging buyers mostly brands, manufacturers aur ecommerce sellers hote hain. Unhe material strength, size, printing quality aur delivery timeline ka clear idea chahiye.',
      'Ek printed sample hazar words se zyada kaam karta hai. Isliye sample gallery, material options aur MOQ ki jankari website par honi chahiye.',
    ],
    does: [
      'Corrugated, carton ya flexible packaging production',
      'Custom size, printing aur branding',
      'Dieline, sample aur prototype development',
      'Bulk supply aur repeat order planning',
    ],
    expect: [
      'Packaging type aur material options',
      'Size range, ply/GSM aur printing detail',
      'MOQ aur sample charge',
      'Delivery time aur transport terms',
    ],
    priorities: [
      { title: 'Material aur ply explain karein', why: 'Strength aur cost material se hi decide hoti hai.' },
      { title: 'Printed samples dikhayein', why: 'Print quality dekhe bina buyer order nahi karta.' },
      { title: 'Dieline ka process batayein', why: 'Custom size bina dieline ke quote nahi hota.' },
    ],
    mistakes: [
      'Sirf stock packaging photos dikhana.',
      'Sample charge aur MOQ hidden rakhna.',
      'Delivery time ko har order par badalna.',
    ],
    check: [
      'Packaging types aur material listed hain?',
      'Printed sample gallery hai?',
      'MOQ aur sample charge clear hai?',
      'Delivery time likha hai?',
    ],
    services: ['website-development', 'seo', 'email-marketing'],
  },
];
