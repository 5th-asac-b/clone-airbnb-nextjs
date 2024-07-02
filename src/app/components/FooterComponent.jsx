'use client'

import Image from 'next/image'
import React, { useState } from 'react'
const facebookIcon = '/assets/facebook.svg'
const twitterIcon = '/assets/twitter.svg'
const instagramIcon = '/assets/instagram.svg'
const linkedinIcon = '/assets/linkedin.svg'

const tabs = [
  {
    name: '인기',
    key: 'popular',
    items: [
      { place: '캔모어', description: '아파트 숙소' },
      { place: '투손', description: '독채 숙소' },
      { place: '애너하임', description: '휴가지 숙소' },
      { place: '베날마데나', description: '해변 근처 독채 숙소' },
    ],
  },
  {
    name: '예술 및 문화',
    key: 'arts',
    items: [
      { place: '피닉스', description: '아파트 숙소' },
      { place: '프라하', description: '휴가지 숙소' },
      { place: 'York', description: '아파트 숙소' },
      { place: '핫스프링스', description: '대저택 숙소' },
    ],
  },
  {
    name: '야외',
    key: 'outside',
    items: [
      { place: '마르베야', description: '휴가지 숙소' },
      { place: '미하스', description: '아파트 숙소' },
      { place: '프레스콧', description: '독채 숙소' },
      { place: '스카츠데일', description: '대저택 숙소' },
    ],
  },
  {
    name: '산맥',
    key: 'mountain',
    items: [
      { place: 'Mentone', description: '통나무집 숙소' },
      { place: 'Blue Mountains', description: '통나무집 숙소' },
      { place: 'Townsend', description: '휴가지 숙소' },
      { place: 'Sedona', description: '반려동물 동반이 허용되는 숙소' },
    ],
  },
  {
    name: '해변',
    key: 'beach',
    items: [
      { place: 'Dauphin Island', description: '휴가지 숙소' },
      { place: '해밀턴 섬', description: '아파트 숙소' },
      { place: 'Big sur', description: '휴가지 숙소' },
      { place: 'Fort Morgan', description: '휴가지 숙소' },
    ],
  },
  {
    name: '카테고리',
    key: 'category',
    items: [
      { place: '멋진 수영장', description: '' },
      { place: '한적한 시골', description: '' },
      { place: '기상천외한 숙소', description: '' },
      { place: '북극', description: '' },
    ],
  },
  {
    name: '즐길 거리',
    key: 'thingstodo',
    items: [
      { place: '런던', description: '잉글랜드' },
      { place: '암스트레담', description: 'North Holland' },
      { place: '도쿄', description: '도쿄' },
      { place: '파리', description: '일드프랑스' },
    ],
  },
]

function FooterComponent() {
  const [activeTab, setActiveTab] = useState('popular')

  const activeTabItems = tabs.find((tab) => tab.key === activeTab)?.items || []

  return (
    <>
      <div className='container py-10'>
        <div className='mb-8'>
          <h5 className='text-xl font-bold mb-4'>다음 여행을 위한 추천 여행지</h5>
          <div className='flex space-x-4 mb-4 border-b border-gray-300'>
            {tabs.map((tab) => (
              <button
                key={tab.key}
                className={`py-2 px-4 ${activeTab === tab.key ? 'border-b-2 border-black font-bold' : 'text-gray-600'}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.name}
              </button>
            ))}
          </div>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
            {activeTabItems.map((item, index) => (
              <div key={index} className='flex flex-col'>
                <a href='#' className='text-black font-bold'>
                  {item.place}
                </a>
                <span className='text-gray-600'>{item.description}</span>
              </div>
            ))}
          </div>
          <div className='text-right mt-4'>
            <button className='text-gray-600 hover:text-black'>더 보기</button>
          </div>
        </div>
        <div className='border-t border-gray-300 pt-8'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8'>
            <div>
              <h5 className='text-xl font-bold mb-4'>에어비앤비 지원</h5>
              <ul className='space-y-2'>
                <li>
                  <a href='#' className='text-gray-600 hover:text-black'>
                    도움말 센터
                  </a>
                </li>
                <li>
                  <a href='#' className='text-gray-600 hover:text-black'>
                    에어커버
                  </a>
                </li>
                <li>
                  <a href='#' className='text-gray-600 hover:text-black'>
                    차별 반대
                  </a>
                </li>
                <li>
                  <a href='#' className='text-gray-600 hover:text-black'>
                    장애인 지원
                  </a>
                </li>
                {/* TODO : 링크 추가 필요 */}
              </ul>
            </div>
            <div>
              <h5 className='text-xl font-bold mb-4'>호스팅</h5>
              <ul className='space-y-2'>
                <li>
                  <a href='#' className='text-gray-600 hover:text-black'>
                    당신의 공간을 에어비앤비하세요
                  </a>
                </li>
                <li>
                  <a href='#' className='text-gray-600 hover:text-black'>
                    호스트를 위한 에어커버
                  </a>
                </li>
                <li>
                  <a href='#' className='text-gray-600 hover:text-black'>
                    호스팅 자료
                  </a>
                </li>
                <li>
                  <a href='#' className='text-gray-600 hover:text-black'>
                    커뮤니티 포럼
                  </a>
                </li>
                {/* TODO : 링크 추가 필요 */}
              </ul>
            </div>
            <div>
              <h5 className='text-xl font-bold mb-4'>에어비앤비</h5>
              <ul className='space-y-2'>
                <li>
                  <a href='#' className='text-gray-600 hover:text-black'>
                    뉴스룸
                  </a>
                </li>
                <li>
                  <a href='#' className='text-gray-600 hover:text-black'>
                    새로운 기능
                  </a>
                </li>
                <li>
                  <a href='#' className='text-gray-600 hover:text-black'>
                    채용 정보
                  </a>
                </li>
                <li>
                  <a href='#' className='text-gray-600 hover:text-black'>
                    투자자 정보
                  </a>
                </li>
                {/* TODO : 링크 추가 필요 */}
              </ul>
            </div>
          </div>
          <div className='border-t border-gray-300 pt-8'>
            <div className='flex flex-col md:flex-row justify-between items-center'>
              <p className='text-gray-600 text-sm'>
                &copy; 2024 Airbnb, Inc. 모든 권리 보유. 개인 정보 처리 방침 | 이용약관 | 사이트맵 |
                한국의 변경된 환불 정책 | 회사 세부정보
              </p>
              <div className='flex space-x-4 mt-4 md:mt-0'>
                <a href='#'>
                  <Image
                    width={100}
                    height={100}
                    src={facebookIcon}
                    alt='Facebook'
                    className='h-6'
                  />
                </a>
                <a href='#'>
                  <Image width={100} height={100} src={twitterIcon} alt='Twitter' className='h-6' />
                </a>
                <a href='#'>
                  <Image
                    width={100}
                    height={100}
                    src={instagramIcon}
                    alt='Instagram'
                    className='h-6'
                  />
                </a>
                <a href='#'>
                  <Image
                    width={100}
                    height={100}
                    src={linkedinIcon}
                    alt='LinkedIn'
                    className='h-6'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FooterComponent
