import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'

interface LinkParams{
    href: string,
    text: string,
    setClick: Dispatch<SetStateAction<boolean>>
}

const LinkHeader = ({href,text,setClick}: LinkParams) => {
  return (
    <Link className='m-2 md:mx-4 font-bold' onClick={() =>setClick(false)} href={href}>{text}</Link>
  )
}

export default LinkHeader
