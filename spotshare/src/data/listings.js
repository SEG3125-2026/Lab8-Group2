export const LISTINGS = [
  {
    id: 1,
    type: 'Driveway',
    name: 'Private Driveway — Oak Street',
    host: 'Sarah M.',
    hostAvatar: 'SM',
    price: 4.5,
    rating: 4.5,
    reviews: 47,
    walk: '3 min walk',
    area: 'University District',
    address: '31 Oak St',
    rules: ['No overnight parking', 'Max 1 vehicle', 'Do not block garage door'],
    description:
      'Convenient private driveway located just minutes from campus. Clean, well-lit space suitable for standard-sized vehicles. Easy street access with no tight turns. Host is responsive and available for any questions about access or parking instructions.',
  },
  {
    id: 2,
    type: 'Carport',
    name: 'Shaded Carport — Maple Ave',
    host: 'James T.',
    hostAvatar: 'JT',
    price: 3.0,
    rating: 4.7,
    reviews: 31,
    walk: '5 min walk',
    area: 'Eastgate',
    address: '47 Maple Ave',
    rules: ['No trucks', 'Max 2 vehicles', 'Keep driveway clear'],
    description:
      'Shaded carport with protection from the elements. Great value for commuters who want cover without paying garage prices. Close to the campus east entrance.',
  },
  {
    id: 3,
    type: 'Driveway',
    name: 'Open Driveway — Birch Lane',
    host: 'Sarah M.',
    hostAvatar: 'SM',
    price: 2.5,
    rating: 4.5,
    reviews: 78,
    walk: '9 min walk',
    area: 'Eastgate',
    address: '31 Birch Ln',
    rules: ['No overnight parking', 'Max 1 vehicle', 'Do not block garage door'],
    description:
      'Affordable open driveway in a quiet residential neighbourhood. A longer walk but the best value near campus. Perfect for students on a budget.',
  },
  {
    id: 4,
    type: 'Garage',
    name: 'Secure Garage Bay — Pine St',
    host: 'James T.',
    hostAvatar: 'JT',
    price: 6.0,
    rating: 5.0,
    reviews: 63,
    walk: '4 min walk',
    area: 'Westfield',
    address: '88 Pine St',
    rules: ['Key required', 'Max height 6.5ft', 'No motorcycles'],
    description:
      'Fully enclosed secure garage bay with keypad access. The safest and most protected option near campus. Ideal for students with newer or higher-value vehicles.',
  },
]

export const UPCOMING_BOOKINGS = [
  {
    id: 'SP-2031',
    listing: LISTINGS[0],
    date: 'Mon, Mar 16, 2026',
    start: '8:00 AM',
    end: '5:00 PM',
    hours: 9,
    total: 40.5,
    status: 'Confirmed',
  },
  {
    id: 'SP-2045',
    listing: LISTINGS[3],
    date: 'Wed, Mar 18, 2026',
    start: '9:00 AM',
    end: '3:00 PM',
    hours: 6,
    total: 36.0,
    status: 'Confirmed',
  },
]

export const PAST_BOOKINGS = [
  {
    id: 'SP-1987',
    listing: LISTINGS[1],
    date: 'Fri, Mar 7, 2026',
    start: '9:00 AM',
    end: '4:00 PM',
    hours: 7,
    total: 21.0,
    status: 'Completed',
  },
  {
    id: 'SP-1902',
    listing: LISTINGS[2],
    date: 'Mon, Mar 2, 2026',
    start: '8:00 AM',
    end: '5:00 PM',
    hours: 9,
    total: 22.5,
    status: 'Completed',
  },
]

export const FAQ_ITEMS = [
  {
    q: 'How does SpotShare work?',
    a: 'SpotShare connects commuter students with homeowners who have unused driveway space near campus. Students search for spots, book through the platform, and pay securely online. Hosts receive payment automatically after each booking.',
  },
  {
    q: 'Do I need an account to browse listings?',
    a: "No, you can browse available parking spots without an account. However, you'll need to create an account and log in to make a reservation or list your space.",
  },
  {
    q: 'Is SpotShare only for university students?',
    a: "SpotShare is primarily designed for commuter students, but anyone who needs parking near a university campus can use the platform. Hosts can be any homeowner or property owner with available parking space.",
  },
  {
    q: 'How do I cancel a booking?',
    a: 'You can cancel a booking up to 24 hours before your reservation for a full refund. Cancellations within 24 hours may be subject to a partial refund depending on the host\'s cancellation policy.',
  },
  {
    q: 'What payment methods are accepted?',
    a: 'SpotShare accepts all major credit and debit cards (Visa, Mastercard, American Express) as well as Apple Pay. All payments are processed securely through our payment partner.',
  },
  {
    q: 'What is the SpotShare Host Guarantee?',
    a: "The SpotShare Host Guarantee protects students if a spot is unavailable when they arrive. If this happens, you will receive a full refund and we'll help you find an alternative spot nearby.",
  },
]

export const COLORS = {
  green: '#10b981',
  darkGreen: '#064e3b',
  midGreen: '#065f46',
  lightGreen: '#d1fae5',
}
