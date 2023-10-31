import { UnsplashImage } from "@/models/unsplash-image"
import Image from "next/image"
import Link from "next/link"
import { Alert } from "@/components/bootstrap"

export const metadata={
    title:"statis feching "
}


export default async function Page() {
  const response = await fetch("https://api.unsplash.com/photos/random?client_id="+process.env.UNSPLASH_ACCESS_KEY)
  const image:UnsplashImage=await response.json()
  const width = Math.min(500,image.width)
  const height =(width/image.width) * image.height 
  return (
    <div className="d-flex flex-column align-item-center">
       <Alert >
        this page <strong>fecthis and cacher sdat at build tiume </strong>this is something blah blah i just want to type something so i am casullly typeing some randoms stuff
       </Alert>
        <Image 
        src={image.urls.raw}
        width={width}
        height={height}  
        alt={image.description}
        className="rounded shadow mw-100 h-100"/>
        by
        <Link href={"/users/" + image.user.username}>{image.user.username}</Link>
    </div>
    
  )
}
