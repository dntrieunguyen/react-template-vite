import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import React from 'react'
import banner from '@/assets/imgs/pic-home.png'

const HomePage: React.FC = () => {
  return (
    <main className='flex '>
      <div className='content flex-1 w-full h-full'>
        <div className='title text-3xl font-semibold flex flex-col justify-center w-full h-full pt-20 pb-10'>
          <span>Learn</span>
          <span>new concepts</span>
          <span>for each question</span>
        </div>
        <div className='sub-title pb-10'>We help you prepare for exams and quizes</div>

        <div className='action w-full h-full'>
          <Button
            className={cn(
              'bg-yellow-300 text-white shadow-amber-300 drop-shadow-2xl transition-all ease-linear duration-400',
              'hover:bg-yellow-300 hover:rounded-none'
            )}
          >
            Start solving
          </Button>
          <Button
            className={cn('bg-transparent text-yellow-300', 'hover:bg-transparent hover:text-yellow-300')}
            variant={'ghost'}
          >
            know more
          </Button>
        </div>
      </div>

      <div className='banner flex-1 flex items-center justify-center'>
        <img width={400} height={400} src={banner} alt='' />
      </div>
    </main>
  )
}

export default HomePage
