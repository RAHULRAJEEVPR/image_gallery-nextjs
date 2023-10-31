import { UnsplashImage } from "@/models/unsplash-image";
import Image from "next/image";
import styles from "./TopicPage.module.css";
import { Alert } from "@/components/bootstrap";
import { Metadata } from "next";
interface PageProps {
  params: { topic: string };
  // searchParams
}

export function generateMetadata({params:{topic}}:PageProps):Metadata{
return {
    title:topic+"- next js"
}
}

//if we give false only page with predeclred values will be available
// export const dynamicParams = false;
//these topics will be prerendered from server while buidl so
//  there will be no time load for acced this page

export function generateStaticParams() {
  return ["health", "fitness", "coding"].map((topic) => ({ topic }));
}

export default async function page({ params: { topic } }: PageProps) {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?query=${topic}&count=5&client_id=${process.env.UNSPLASH_ACCESS_KEY}`,
    {
      // cache:"no-cache"
    }
  );
  const images: UnsplashImage[] = await response.json();

  return (
    <div>
        <Alert>
            this page uses <strong>generateStaticParams</strong>to render and cache static page at build time. even though the Urll has a dynamic parameter .pages that are not incleded in generateStaticParams wull be fetched and renderd on first access and thgen cached for subsequent requests (this can be disabled)

        </Alert>
      <h1>{topic}</h1>
      {images.map((image) => (
        <Image
          src={image.urls.raw}
          width={250}
          height={250}
          alt={image.description}
          key={image.urls.raw}
          className={styles.image}
        />
      ))}
    </div>
  );
}
