import Link from 'next/link';

export default function Logo() {
  return (
    <Link href='/' className='relative flex items-center gap-3'>
      <div className='relative w-9 h-9 overflow-hidden flex rounded-xl'>
        <img src='/images/hex-logo.png' alt='logo' />
      </div>
      <div className='inline-flex text-xl text-heading-1'>
        charlescaseymartin
      </div>
    </Link>
  )
}