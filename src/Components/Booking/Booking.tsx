// import React from 'react'
import Header from '../../Layouts/Header'
import MobileHeaderSidebar from '../../Layouts/MobileHeader'
import Footer from '../../Layouts/Footer'
import BookingSection from '../Common/BookingSection'
import CtaSection from '../Common/CtaSection'
import PageHero from '../Common/PageHero'

const Booking = () => {
  return (
    <>
      <Header />
      <MobileHeaderSidebar />
      <PageHero
        className="about-header-area"
        title={"Booking"}
        breadcrumb={["Home", "Booking"]}
      />
      <BookingSection/>
      <CtaSection/>
      <Footer/>
    </>
  )
}

export default Booking