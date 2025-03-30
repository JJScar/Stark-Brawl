import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import ShopPage from "./pages/shop"
import SocialPage from "./pages/social"
import EventsPage from "./pages/events"
import HomePage from "./pages/home"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/social" element={<SocialPage />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

