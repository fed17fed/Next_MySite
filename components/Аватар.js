import Image from 'next/image'
 
export function Avatar( { title } ) {
  return <h1><Image src="/images/I_FOTO-300.jpg" alt="me" width="64" height="64" />{title}</h1>
}