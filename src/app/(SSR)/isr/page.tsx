import { UnsplashImage } from "@/models/unsplash-image"
import Image from "next/image"
import Link from "next/link"
import { Alert } from "@/components/bootstrap"

export const metadata={
    title:"isr increamental static Regeneration"
}
//if we give 0 it will not cache  
//the number is duration the data will be cashed after that a new data will be fetched
export const revalidate=11

export default async function  Page(){
    const response = await fetch("https://api.unsplash.com/photos/random?client_id="+process.env.UNSPLASH_ACCESS_KEY,{
    //    next:{revalidate:15}
    })
    const image:UnsplashImage=await response.json()
    const width = Math.min(500,image.width)
    const height =(width/image.width) * image.height 
   
    return(
        <div className="d-flex flex-column align-items-center">
        <Alert>
this page usees isr incremental static regenaration
<br />
a new image is fetched every  15 second after refreshing
        </Alert>
          <Image
        src={image.urls.raw}
        width={width}
        height={height}  
        alt={image.description}
        className="rounded shadow mw-100 h-100"/>
        by
        <Link href={"/user/" + image.user.username}>{image.user.username}</Link>
   
        </div>
    )
}