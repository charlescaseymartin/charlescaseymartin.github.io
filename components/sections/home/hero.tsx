import Container from '@/components/shared/container';
import Button, { ButtonVariants } from '@/components/shared/button';
import Paragraph from '@/components/shared/paragraph';


export default function Hero() {
  return (
    <section className='relative pt-32 lg:pt-36'>
      <Container className={'flex flex-col lg:flex-row gap-10 lg:gap-12'}>
        <div className='absolute w-full lg:w-1/2 inset-y-0 lg:right-0 '>
          <span className='absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-green-400 blur-xl opacity-60 lg:opacity-95 lg:block hidden'></span>
          <span className='absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-primary blur-xl opacity-80'></span>
        </div>
        <span className='w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-primary to-green-400 absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90'></span>
        <div className='relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2'>

          <h1 className='text-3xl/tight sm:text-4xl/tight md:text-5xl/tight xl:text-6xl/tight font-bold text-heading-1'>
            Social Media
            <span className='mx-4 text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-primary via-30% to-green-600'>
              Marketing
            </span>
            is the Best Ever.
          </h1>
          
          <Paragraph className='mt-8'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores repellat perspiciatis aspernatur quis voluptatum porro incidunt,
            libero sequi quos eos velit
          </Paragraph>

          <div className='mt-10  w-full flex max-w-md mx-auto lg:mx-0'>
            <div className='flex sm:flex-row flex-col gap-5 w-full'>
              <form className='py-1 pl-6 w-full pr-1 flex gap-3 items-center text-heading-3 shadow-lg shadow-box-shadow border border-box-border bg-box-bg rounded-full ease-linear focus-within:bg-body  focus-within:border-primary'>
                <span className='min-w-max pr-2 border-r border-box-border'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='20' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-5 h-5'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z' />
                  </svg>
                </span>
                <input type='email' name='email' id='email-user' placeholder='johndoe@gmail.com' className='w-full py-3 outline-none bg-transparent' />
                <Button variant={ButtonVariants.primary} className={'min-w-max text-white'}>
                  <span className='hidden sm:flex relative z-[5]'>
                    Get Started
                  </span>
                  <span className='flex sm:hidden relative z-[5]'>
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-5 h-5'>
                      <path strokeLinecap='round' strokeLinejoin='round' d='M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5' />
                    </svg>
                  </span>
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className='flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl'>
          <img src='/images/image1.webp' alt='Hero image' width='2350' height='2359' className='lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96' />
        </div>
      </Container>
    </section>
  )
}