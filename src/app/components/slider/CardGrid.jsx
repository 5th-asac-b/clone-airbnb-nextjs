'use client'

import React, { useEffect, useState } from 'react'
import CardUI from './CardUI'
import { fetchAccommodation } from '@/lib/fetchAccommodations'

const CardGrid = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAccommodation()
        setData(data)
      } catch (err) {
        setError(err.message)
      }
    }

    fetchData()
  }, [])

  if (error) {
    return <div>{error}</div>
  }

  if (!data) {
    return <div>Loading...</div>
  }
  return (
    <div className='card pt-10 pb-24'>
      <ul className='card-wrap grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 px-10'>
        {data.map((item) => (
          <CardUI key={item.accommodationId} item={item} />
        ))}
      </ul>
    </div>
  )
}

export default CardGrid
