import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import HomePage from './pages/homepage.jsx'
import SearchPage from './pages/SearchPage.jsx'
import ListingPage from './pages/ListingPage.jsx'
import BookingPage from './pages/BookingPage.jsx'
import ConfirmationPage from './pages/ConfirmationPage.jsx'
import StudentDashboard from './pages/StudentDashboard.jsx'
import HostDashboard from './pages/hostdashboard.jsx'
import FAQPage from './pages/FAQPage.jsx'
import { LISTINGS } from './data/listings.js'

export default function App() {
  const [page, setPage] = useState('home')
  const [selectedListing, setSelectedListing] = useState(LISTINGS[2])
  const [savedListings, setSavedListings] = useState([1])
  const [messages, setMessages] = useState([
    { from: 'host', text: 'Hi! The driveway is on the left side of the house. The gate code is 4521.', time: '9:02 AM' },
    { from: 'student', text: "Perfect, thank you! I'll be arriving around 8:15.", time: '9:15 AM' },
  ])

  const nav = (p, listing = null) => {
    if (listing) setSelectedListing(listing)
    setPage(p)
    window.scrollTo(0, 0)
  }

  const toggleSave = (id) =>
    setSavedListings((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )

  const sharedProps = { nav, selectedListing, savedListings, toggleSave, messages, setMessages }

  return (
    <>
      {page === 'home' && <HomePage {...sharedProps} />}
      {page === 'search' && <SearchPage {...sharedProps} />}
      {page === 'listing' && <ListingPage {...sharedProps} />}
      {page === 'booking' && <BookingPage {...sharedProps} />}
      {page === 'confirmation' && <ConfirmationPage {...sharedProps} />}
      {page === 'student-dashboard' && <StudentDashboard {...sharedProps} />}
      {page === 'host-dashboard' && <HostDashboard {...sharedProps} />}
      {page === 'faq' && <FAQPage {...sharedProps} />}
    </>
  )
}
