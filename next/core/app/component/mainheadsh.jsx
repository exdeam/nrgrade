import Link from "next/link"
import SVGIMG from "../../public/right-arrow.svg"
import Image from 'next/image'

export default async function MainHeadSh({ Parent, Title }) {

    return (
        <div className="main_head_sh">
            <div className="main_head_wrapper">
                <div className="breadcrumbs">
                    <Link href="/">
                        <div>Главная</div>
                    </Link>
                    <Image src={SVGIMG} />
                    <div>{Parent}</div>                
                </div>
                <h1>{Title}</h1>
            </div>
        </div>
    )
  }
  
  