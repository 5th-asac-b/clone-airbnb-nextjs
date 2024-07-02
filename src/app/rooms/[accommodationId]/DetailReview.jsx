import Image from 'next/image'
import { useState } from 'react'
import React from 'react'

{
  /*
TODO : 숙소평점을 가져와서 평점이 N이상이면 '게스트 선호 숙소' 컴포넌트 추가
TODO : 현재 컴포넌트에서 바뀌는 평점을 DB에 저장하고, 평점이 바뀔 때마다 DB에서 가져오기
*/
}

const initialReviews = [
  {
    id: 1,
    name: '혜란',
    location: '서울, 한국',
    date: '3주 전',
    rating: 5.0,
    comment: '편히 잘 쉬었다가 왔습니다.',
  },
  {
    id: 2,
    name: '안나',
    location: '서울, 한국',
    date: '2024년 2월',
    rating: 5.0,
    comment:
      '저희 가족 좋은 추억 쌓고 왔습니다! 가봤던 숙소중에 최고로 깨끗했습니다! 애견 동반이면 살짝 냄새가 날법도 한데,,,',
  },
  {
    id: 3,
    name: '성훈',
    location: '한국',
    date: '2023년 10월',
    rating: 5.0,
    comment:
      '아주 깨끗해요~강아지도 너무 좋아하고 조미료랑 뭐 찾는건 다 있다더라고요&사장님도 너무 친절하시고 아프신 와중에도 꼼꼼 왔으면서도 대답 다해주시고 연락도 바로 바로 연결되었어요. 이번에는...',
  },
  {
    id: 4,
    name: 'Joonho',
    location: '에어비앤비 가입 기간 4년',
    date: '2023년 9월',
    rating: 5.0,
    comment: '놀라움',
  },
]

const DetailReview = ({ review, accommodationId }) => {
  const [reviews, setReviews] = useState(review)
  const [newComment, setNewComment] = useState('')
  const [newRating, setNewRating] = useState(5)

  const handleCommentChange = (e) => setNewComment(e.target.value)

  const handleRatingChange = (rating) => setNewRating(rating)

  const handleCommentSubmit = async () => {
    // const newReview = {
    //   id: reviews.length + 1,
    //   name: '익명',
    //   location: '알 수 없음',
    //   date: '방금',
    //   rating: newRating,
    //   comment: newComment,
    //   profileImage: defaultProfileImage,
    // }

    const reviewPayload = {
      accommodation: {
        accommodationId: Number(accommodationId),
      },
      member: {
        userId: 1, // 실제 사용자 ID로 변경 필요
      },
      reviewDesc: newComment,
      reviewRating: newRating,
      date: new Date().toISOString(),
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/accommodations-review`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify([reviewPayload]), // 배열 형태로 전송
        },
      )

      if (response.ok) {
        const createdReview = await response.json()
        console.log('Review successfully saved:', createdReview)
      } else {
        console.error('Failed to save review')
      }
    } catch (error) {
      console.error('Error:', error)
    }
    setReviews([reviewPayload, ...reviews])
    setNewComment('')
    setNewRating(5)
  }

  const calculateAverageRating = () => {
    if (reviews.length === 0) return 0
    const totalRating = reviews.reduce((sum, review) => sum + review.reviewRating, 0)
    return (totalRating / reviews.length).toFixed(1)
  }

  return (
    <div className='py-12 bg-white'>
      <div className='xl:grid xl:grid-cols-2'></div>
      <div className='text-left mb-8'>
        <h1 className='text-[22px]'>
          ★ {calculateAverageRating()} · 후기 {reviews.length}개
        </h1>
      </div>
      <div className='flex justify-between items-center mb-8'>
        <div className='flex flex-col items-center'>
          <span className='text-2xl font-semibold'>전체 평점</span>
          <div className='text-gray-600'>{calculateAverageRating()}</div>
        </div>
        {/* <div className='flex flex-col items-center'>
          <span className='text-2xl font-semibold'>청결도</span>
          <div className='text-gray-600'>5.0</div>
        </div>
        <div className='flex flex-col items-center'>
          <span className='text-2xl font-semibold'>정확도</span>
          <div className='text-gray-600'>5.0</div>
        </div>
        <div className='flex flex-col items-center'>
          <span className='text-2xl font-semibold'>체크인</span>
          <div className='text-gray-600'>5.0</div>
        </div>
        <div className='flex flex-col items-center'>
          <span className='text-2xl font-semibold'>의사소통</span>
          <div className='text-gray-600'>5.0</div>
        </div>
        <div className='flex flex-col items-center'>
          <span className='text-2xl font-semibold'>위치</span>
          <div className='text-gray-600'>5.0</div>
        </div>
   
        
        없어도 괜찮을 것 같음.
        */}
      </div>
      <div className='space-y-8 xl:grid xl:grid-cols-2 xl:gap-y-10 xl:gap-x-20 xl:space-y-0'>
        {reviews.map((review) => (
          <div key={review.id} className='border-b border-gray-300 pb-8'>
            <div className='flex items-center space-x-4'>
              <Image
                width={100}
                height={100}
                src={review.profileImage || `https://i.pravatar.cc/50?img=${review.id}`}
                alt={review.name}
                className='w-12 h-12 rounded-full'
              />
              <div>
                <div className='font-semibold'>{review.name}</div>
                <div className='text-gray-600'>{review.location}</div>
                <div className='text-gray-600'>
                  {new Intl.DateTimeFormat('ko-KR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  }).format(new Date(review.date))}
                </div>
                <div className='text-yellow-500'>
                  {'★'.repeat(review.reviewRating)}
                  {'☆'.repeat(5 - review.reviewRating)}
                </div>
              </div>
            </div>
            <p className='mt-4'>{review.reviewDesc}</p>
          </div>
        ))}
      </div>
      <div className='mt-8'>
        <h2 className='text-xl font-semibold mb-4'>댓글 작성</h2>
        <div className='flex items-center space-x-2'>
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => handleRatingChange(star)}
              className={`text-2xl ${star <= newRating ? 'text-yellow-500' : 'text-gray-400'}`}
            >
              ★
            </button>
          ))}
        </div>
        <textarea
          value={newComment}
          onChange={handleCommentChange}
          className='w-full p-2 border border-gray-300 rounded-lg mt-2'
          placeholder='댓글을 입력하세요...'
        ></textarea>
        <button
          onClick={handleCommentSubmit}
          className='mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg'
        >
          댓글 작성
        </button>
      </div>
    </div>
  )
}

export default DetailReview
