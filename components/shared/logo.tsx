import Link from "next/link";

export default function Logo() {
  return (
    <Link href='/' className='relative flex items-center gap-3'>
      <div className='relative w-7 h-7 overflow-hidden flex rounded-xl'>
        <span className='absolute w-4 h-4 -top-1 -right-1 bg-green-500 rounded-md rotate-45'></span>
        <span className='absolute w-4 h-4 -bottom-1 -right-1 bg-[#FCDC58] rounded-md rotate-45'></span>
        <span className='absolute w-4 h-4 -bottom-1 -left-1 bg-primary rounded-md rotate-45'></span>
        <span className='absolute w-2 h-2 rounded-full bg-heading-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></span>
      </div>
      <div className='inline-flex text-xl text-heading-1'>
        charlescaseymartin
      </div>
    </Link>
  )
}