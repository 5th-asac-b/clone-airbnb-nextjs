'use client'
import DynamicHeader from '@/app/components/DynamicHeader'
import FooterComponent from '@/app/components/FooterComponent'
import '@/app/styles/globals.css'

const RootLayout = ({ children }) => {
  return (
    <>
      <DynamicHeader />
      <main className={'relative'}>{children}</main>
      <footer className='bg-gray-100 main-padding-detail flex justify-center'>
        <div className='container w-full xl:w-[1120px]'>
          <FooterComponent />
        </div>
      </footer>
    </>
  )
}

export default RootLayout
