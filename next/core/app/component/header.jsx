import Image from 'next/image'
import SVGIMG1 from '../../public/loupe.svg'
import SVGIMG2 from '../../public/address.svg'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function Header() {
  async function create(formData) {
    'use server'
    redirect(`/moneta/${formData.get('name')}`)
  }

  return (
    <div className="container">
      <div className="row row_header">
        <div className='header_one'>
          <div>
            <Link href="/">
            <Image
              src={"/images/logo1.png"}
              width={63}
              height={70}
              alt="Picture of the author"
            />
            </Link>
          </div>
          <div className='header_one__two upper'>Нумизматический <br /> реестр грейда</div>
        </div>
        <div className='header_two'>Сертификация монет<br /> и нумизматическая экспертиза</div>
        <div>
          <form action={create} method="post">
            <div className='loupe'> 
                <input className='loupe_input upper' placeholder="Введите номер слаба" type="text" name="name" />
                <button className="loupe_btn" type="submit" name="submit"><Image src={SVGIMG1} alt={"поиск по номеру слаба"} /></button>
              </div>
          </form>
        </div>
        <div className='header_four'>
          <div className='header_four__one'>8-800-700-12-56</div>
          <div className='header_four__two'><Image src={SVGIMG2} alt={"адрес"} /> г. Москва, ул. Валовая, дом 8, стр. 1 </div>
        </div>
      </div>
    </div>
  )
}

