'use client'

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import DetailTitle from './DetailTitle'
import DetailGallery from './DetailGallery'
import DetailHostInfo from './DetailHostInfo'
import DetailSubTitle from './DetailSubTitle'
import DetailReview from './DetailReview'
import DetailCalendar from './DetailCalendar'
import DetailAccommodationInfo from './DetailAccommodation'
import ReservationComponent from './ReservationComponent'
import { fetchAccommodations } from '@/lib/fetchAccommodations'
import DetailHostProfile from './DetailHostProfile'
import FooterComponent from '@/app/components/FooterComponent'

const AccommodationDetailPage = () => {
  const { accommodationId } = useParams()
  const [accommodationData, setAccommodationData] = useState(null)
  const [error, setError] = useState(null)
  const [checkInDate, setCheckInDate] = useState(null)
  const [checkOutDate, setCheckOutDate] = useState(null)
  const [currentMonth, setCurrentMonth] = useState(new Date())

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAccommodations(accommodationId)
        setAccommodationData(data)
      } catch (err) {
        setError(err.message)
      }
    }

    if (accommodationId) {
      fetchData()
    }
  }, [accommodationId])

  const onDateClick = (day) => {
    if (!checkInDate || (checkInDate && checkOutDate)) {
      setCheckInDate(day)
      setCheckOutDate(null)
    } else if (day < checkInDate) {
      setCheckInDate(day)
    } else {
      setCheckOutDate(day)
    }
  }

  const clearDates = () => {
    setCheckInDate(null)
    setCheckOutDate(null)
  }

  if (error) {
    return <div>{error}</div>
  }

  if (!accommodationData) {
    return <div>Loading...</div>
  }

  const {
    accommodationName,
    locationName,
    reviewCount,
    accommodationPrice,
    locationAlias,
    hosts,
    // hostSince,
    images,
    amenities,
    desc,
    reviews,
  } = accommodationData
  return (
    <>
      <div className='main-padding-detail'>
        <div className='max-w-full xl:w-[1120px] mx-auto'>
          <DetailTitle accommodationName={accommodationName} />
          <DetailGallery images={images} />
          <div className='flex flex-wrap'>
            <div className='flex-1'>
              <div className='mb-8'>
                <DetailSubTitle locationName={locationName} reviewCount={reviewCount} />
              </div>
              <hr></hr>
              <div className='my-8'>
                <DetailHostInfo hostName={hosts.hostName} hostSince={hosts.hostSince} />
              </div>
              <hr></hr>
              <div className='my-8'>{/* <DetailFeatures amenities={amenities} /> */}</div>
            </div>
            <div className='flex justify-center md:justify-end w-full md:w-auto'>
              <ReservationComponent
                pricePerDay={accommodationPrice}
                checkInDate={checkInDate}
                checkOutDate={checkOutDate}
                onDateClick={onDateClick}
                clearDates={clearDates}
                currentMonth={currentMonth}
                setCurrentMonth={setCurrentMonth}
                locationAlias={locationAlias}
              />
            </div>
          </div>
          <div className=''>
            <DetailCalendar
              py='py-12'
              locationAlias={locationAlias}
              checkInDate={checkInDate}
              checkOutDate={checkOutDate}
              onDateClick={onDateClick}
              clearDates={clearDates}
              currentMonth={currentMonth}
              setCurrentMonth={setCurrentMonth}
            />
          </div>
          <div>
            <DetailHostProfile hosts={hosts} />
          </div>
          <hr />
          <DetailReview review={reviews} accommodationId={accommodationId} />
          <hr />
          <DetailAccommodationInfo desc={desc} accommodationId={accommodationId} />
        </div>
      </div>
    </>
  )
}

export default AccommodationDetailPage
