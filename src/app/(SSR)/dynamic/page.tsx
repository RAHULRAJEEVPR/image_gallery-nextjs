import { UnsplashImage } from "@/models/unsplash-image"
import Image from "next/image"
import Link from "next/link"
import { Alert } from "@/components/bootstrap"

export const metadata={
    title:"dynamic page fetching"
}
//used to not cache the page
export const revalidate=0

export default async function  dynamic(){
    const response = await fetch("https://api.unsplash.com/photos/random?client_id="+process.env.UNSPLASH_ACCESS_KEY,{
        // cache:"no-cache"
    })
    const image:UnsplashImage=await response.json()
    const width = Math.min(500,image.width)
    const height =(width/image.width) * image.height 
   
    return(
        <div className="d-flex flex-column align-items-center">
        <Alert>
this page fetch data dyamicly each this page get refreshed
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