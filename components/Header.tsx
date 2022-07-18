import Link from 'next/link'

const Header = () => {
  return (

    <nav className='flex items-center py-4 mb-4 border-b'>
      < Link href="/" >
        <h1 className='mr-16 text-xl font-bold cursor-pointer'>Artpoint</h1>
      </Link >
      <Link href="/artists">Artistes</Link>
    </nav >
  )
}

export default Header