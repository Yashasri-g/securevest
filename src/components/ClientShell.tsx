'use client';

import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import BookingModal from './BookingModal';

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header onOpenBooking={() => setIsBookingOpen(true)} />
      <main id="main-content">{children}</main>
      <Footer />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
}
