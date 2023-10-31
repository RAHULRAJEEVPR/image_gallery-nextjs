import Image from 'next/image'
import styles from './page.module.css'
import { Alert } from '@/components/bootstrap'
export default function Home() {
  return (
  <div>
<Alert>
  <p>this is a sample project to showcase and learn the new <strong>next json</strong></p>
 <ul>
  <li>statis and dynamic sercer-side rendering</li>
  <li>increamental statis regeneration</li>
  <li>client-side rendering</li>
  <li> meta-data api</li>
  <li> and more</li>
 </ul>
 <p className='mb-0'>
  Every page usea a different apporect to  <strong> fetching and cacheing machanisum</strong>
 </p>
</Alert>
  </div>
  )
}
