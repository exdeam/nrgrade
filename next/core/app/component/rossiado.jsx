import Link from "next/link"
import Image from "next/image"

export default async function Rossiado () {

    return (
        <section className="pb-80">        
        <div className="container">
          <div className="row-st">
            <div className="base_item">
                <div className="base_image_wrapper">
                <Link href="/base/dopetrovskaya-rossiya">                
                    <Image
                    src={"/images/img_g_9.jpg"}
                    width={160}
                    height={160}
                    alt="Допетровская Россия"
                    />
                </Link>
                </div>
                <Link href="/base/dopetrovskaya-rossiya">
                    <div className="text-center">Допетровская Россия</div>
                </Link>
                </div>
            <div className="base_item">
              <div className="base_image_wrapper">
              <Link href="/base/rossiya-do-1917-g">
                <Image
                  src={"/images/img_g_10.jpg"}
                  width={160}
                  height={160}
                  alt="Picture of the author"
                />
                </Link>
              </div>
              <Link href="/base/rossiya-do-1917-g">
              <div className="text-center">Россия до 1917 года</div>
                </Link>
            </div>
            <div className="base_item">
              <div className="base_image_wrapper">
                <Image
                  src={"/images/img_g_6.jpg"}
                  width={160}
                  height={160}
                  alt="Picture of the author"
                />
              </div>
              <div className="text-center">Античные монеты</div>
            </div>
          </div>
          <div className="row-st mt-60">
            <div className="base_item">
              <div className="base_image_wrapper">
                <Image
                  src={"/images/img_g_7.jpg"}
                  width={160}
                  height={160}
                  alt="Допетровская Россия"
                />
              </div>
              <div className="text-center">Иностранные монеты</div>
            </div>
            <div className="base_item">
              <div className="base_image_wrapper">
                <Image
                  src={"/images/rsfsr-sssr.jpg"}
                  width={160}
                  height={160}
                  alt="Picture of the author"
                />
              </div>
              <div className="text-center">РСФСР, СССР</div>
            </div>
            <div className="base_item">
              <div className="base_image_wrapper">
                <Image
                  src={"/images/sovrem_rossia.jpg"}
                  width={160}
                  height={160}
                  alt="Picture of the author"
                />
              </div>
              <div className="text-center">Современная Россия</div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  