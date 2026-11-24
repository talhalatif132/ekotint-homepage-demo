export type ShowroomDealer = {
  id: number;
  name: string;
  address: string;
  contactName?: string;
  latitude: number;
  longitude: number;
  phones: string[];
};

// Snapshot of the public dealer feed used by ekotintpaint.com/showroom-2/.
export const showroomDealers: ShowroomDealer[] = [
  {
    id: 13082,
    name: "Modern Multicolor Centre",
    address: "Shop # 9, 10, Saadin Arcade, Opp. Dubai Islamic Bank, Safoora Goth, Karachi.",
    contactName: "M. Zafar",
    latitude: 24.9250922,
    longitude: 67.1063885,
    phones: ["0312-2883573", "0331-2125033"],
  },
  {
    id: 13081,
    name: "Khan Multicolor Centre",
    address: "Shop # 2, Amir Khusro Road, Block B Shabbirabad, Karachi, Pakistan",
    contactName: "Sajad",
    latitude: 24.8786086,
    longitude: 67.0791803,
    phones: ["0305-2285255", "0342-2252053"],
  },
  {
    id: 13080,
    name: "Ishtiaq -1 Multicolor Centre",
    address: "Cattle Colony, Road # 6, Near Baber Kanta. Bhains Colony",
    contactName: "Ishtiaq",
    latitude: 24.8225962,
    longitude: 67.306945,
    phones: ["0300-2349115"],
  },
  {
    id: 13078,
    name: "Haidery Multicolor Centre",
    address: "W2QR+4P4, N Nazimabad Pedestrian Bridge, North Nazimabad Town, Karachi, Pakistan",
    contactName: "Talha",
    latitude: 24.9488317,
    longitude: 67.0532365,
    phones: ["0321-2062441"],
  },
  {
    id: 13077,
    name: "Imran Multicolor Centre",
    address: "Shop # 1 Allama Shabbir Ahmed Usmani Rd, Block 1 Gulshan-e-Iqbal, Karachi, Pakistan",
    contactName: "Imran",
    latitude: 24.9170289,
    longitude: 67.0819837,
    phones: ["0315-2825518", "0300-2412664"],
  },
  {
    id: 13076,
    name: "Bismillah Multicolor Centre shop 2",
    address: "Plot 22 Gulberg Town St, Federal B Area Block 16 Gulberg Town, Karachi, Pakistan",
    contactName: "M Zubair",
    latitude: 24.940617,
    longitude: 67.0826725,
    phones: ["0302-2697756", "0312-2333133"],
  },
  {
    id: 13075,
    name: "Asda Multicolor Centre",
    address: "V267+WPH, Bohrapir St, Boharpir, Karachi, Pakistan",
    contactName: "Abdul Sami",
    latitude: 24.8622385,
    longitude: 67.0145676,
    phones: ["0300-2143038"],
  },
  {
    id: 13074,
    name: "Ansar Multicolor Centre",
    address: "D1 / D2, Malir, Tanki Stop, Saudabad Karachi, Pakistan",
    contactName: "M. Ansar, Afsar",
    latitude: 24.8978381,
    longitude: 67.1937078,
    phones: ["0345-2509872", "0311-2903434"],
  },
  {
    id: 13073,
    name: "Aamir Multicolor Centre",
    address: "Shop # B-50, KDA Link Rd, Sector 4 B Surjani Town, Karachi, Pakistan",
    contactName: "Zikriya",
    latitude: 25.0150803,
    longitude: 67.0656026,
    phones: ["0321-9248928"],
  },
  {
    id: 13072,
    name: "K & S Multicolor Centre",
    address: "6th Ln, Sector Z 6 Sector Z Gulshan-e-Maymar, Karachi, Pakistan",
    contactName: "M Ameer Hamza, M khuwaja",
    latitude: 25.0146536,
    longitude: 67.1286067,
    phones: ["0333-3637073", "0332-3778813"],
  },
  {
    id: 13071,
    name: "Saify (Tauheed Comm.) Multicolor Centre",
    address: "25th Commercial St, DHA Phase 5 Tauheed Commercial Area Defence V Defence Housing Authority, Karachi, 75500, Pakistan",
    contactName: "Mr. Moiz, Huzaifa",
    latitude: 24.8087696,
    longitude: 67.038384,
    phones: ["0345-2690372", "0310-1161651"],
  },
  {
    id: 13070,
    name: "Saify Gizri Multicolor Centre",
    address: "Gizri Rd, Navy Housing Society, Karachi, Pakistan",
    contactName: "Moiz",
    latitude: 24.8235058,
    longitude: 67.0450041,
    phones: ["0320-8279216"],
  },
  {
    id: 13065,
    name: "Color Expert MultiColor Centre",
    address: "12-C Sunset Lane 3, D.H.A Phase II Extension Phase 2 Commercial Area Defence Housing Authority, Karachi, 75500, Pakistan",
    contactName: "Aqeel Ahmed",
    latitude: 24.8318522,
    longitude: 67.0666459,
    phones: ["0321-2834321"],
  },
  {
    id: 13062,
    name: "Saify (Bader Comm.) Multicolor Centre",
    address: "St 7, Badar Commercial Area Defence V Defence Housing Authority, Karachi, 75500, Pakistan",
    latitude: 24.7999784,
    longitude: 67.045037,
    phones: ["0345-2690372", "0333-3477490"],
  },
  {
    id: 13061,
    name: "Ezzy Multicolor Centre",
    address: "11 B, Sector 11-B Sector 11 B North Karachi, Karachi, Pakistan",
    contactName: "Shabir Ali Bhai, Ali Akbar",
    latitude: 24.9732894,
    longitude: 67.0639858,
    phones: ["0301-2744652", "0322-3254152"],
  },
  {
    id: 13058,
    name: "Arsalan Multicolor Centre",
    address: "Kehkashan Homes Main Road, Kehkashan Homes Sadaf CHS Gulzar E Hijri Scheme 33, Karachi, Pakistan",
    contactName: "Arsalaan Ahmed, Adnan Ahmed",
    latitude: 24.9504375,
    longitude: 67.1046394,
    phones: ["0331-4647454", "0341-2342249"],
  },
  {
    id: 13056,
    name: "Saadi Multicolor Centre",
    address: "Lane - 33, Block 3 Saadi Town, Karachi, Pakistan",
    contactName: "M Noman Khan",
    latitude: 24.9656765,
    longitude: 67.1715496,
    phones: ["0321-2321642"],
  },
  {
    id: 13045,
    name: "Noman Multicolor Centre",
    address: "Shop # 10, Shehbaz Super Complex, White Hall, Nazimabad, Karachi, Pakistan",
    contactName: "Noman",
    latitude: 24.9567,
    longitude: 67.0234,
    phones: ["0301-2622688"],
  },
  {
    id: 13046,
    name: "Paint Station Multicolor Center",
    address: "Link Chappal Sun City, New Karachi, University Road, Karachi, Pakistan",
    contactName: "M Mutabir",
    latitude: 24.9123,
    longitude: 67.1789,
    phones: ["0312-2073414"],
  },
  {
    id: 13047,
    name: "Royal Multicolor Centre",
    address: "Shop no 2, Street Number 31, Block 9, Mehmoodabad, Karachi, Pakistan",
    contactName: "Yahiya",
    latitude: 24.8456,
    longitude: 67.0123,
    phones: ["0322-8290010"],
  },
];

export function getDealerDirectionsHref(dealer: ShowroomDealer) {
  const destination = encodeURIComponent(`${dealer.latitude},${dealer.longitude}`);
  return `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
}

export function getDealerPhoneHref(phone: string) {
  return `tel:${phone.replace(/-/g, "").replace(/^0/, "+92")}`;
}
