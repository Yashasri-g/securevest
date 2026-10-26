'use client';

import React, { createContext, useContext, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import BookingModal from './BookingModal';
import LeadPopup from './LeadPopup';

interface BookingContextType {
  openBooking: () => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextType>({
  openBooking: () => {},
  closeBooking: () => {},
});

export const useBookingModal = () => useContext(BookingContext);

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <BookingContext.Provider value={{ openBooking, closeBooking }}>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header onOpenBooking={openBooking} />
      <main id="main-content">{children}</main>
      <Footer />
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
      <LeadPopup />
    </BookingContext.Provider>
  );
}
