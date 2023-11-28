import MainHeadText from "./component/mainheadtext"
import Script from "next/script"
import Image from 'next/image'
import SVGIMG1 from '../public/prava.svg'
import SVGIMG4 from '../public/rinok.svg'
import SVGIMG5 from '../public/garant.svg'
import SVGIMG6 from '../public/poisk.svg'
import MainHead from "./component/mainhead"

export const metadata = {
  title: 'Сертификация и слабирование монет',
  description: 'Наш центр предлагает осуществить процедуру сертификации и слабирования монет',
}

export default function Home() {
  
  return (
    <>
      <div className="container">
        <MainHead />
        <MainHeadText />
      </div>
      <section className="uslugi pb-80">
        <h1 className="pt-40">Основные услуги</h1>
        <div className="hr_wrapper">
          <div className="hr_main"></div>
          <div className="circle c_main"></div>
        </div>
        <div className="container">
          <div className="row-st mt-60">
            <div className="uslugi_btn_item">
              <div>Слабирование монет
              </div>
            </div>
            <div className="uslugi_btn_item">
              <div>Нумизматическая экспертиза</div>
            </div>
            <div className="uslugi_btn_item">
              <div>Оценка и помощь в продаже</div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-80">
        <h2 className="pt-40">База данных монет</h2>
        <div className="hr_wrapper">
          <div className="hr_main"></div>
          <div className="circle c_main"></div>
        </div>
        <div className="container">
          <div className="row-st mt-60">
            <div className="base_item">
              <div className="base_image_wrapper">
                <Image
                  src={"/images/img_g_9.jpg"}
                  width={210}
                  height={210}
                  alt="Допетровская Россия"
                />
              </div>
              <div className="text-center">Допетровская Россия</div>
            </div>
            <div className="base_item">
              <div className="base_image_wrapper">
                <Image
                  src={"/images/img_g_10.jpg"}
                  width={210}
                  height={210}
                  alt="Picture of the author"
                />
              </div>
              <div className="text-center">Россия до 1917 года</div>
            </div>
            <div className="base_item">
              <div className="base_image_wrapper">
                <Image
                  src={"/images/img_g_6.jpg"}
                  width={210}
                  height={210}
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
                  width={210}
                  height={210}
                  alt="Допетровская Россия"
                />
              </div>
              <div className="text-center">Иностранные монеты</div>
            </div>
            <div className="base_item">
              <div className="base_image_wrapper">
                <Image
                  src={"/images/rsfsr-sssr.jpg"}
                  width={210}
                  height={210}
                  alt="Picture of the author"
                />
              </div>
              <div className="text-center">РСФСР, СССР</div>
            </div>
            <div className="base_item">
              <div className="base_image_wrapper">
                <Image
                  src={"/images/sovrem_rossia.jpg"}
                  width={210}
                  height={210}
                  alt="Picture of the author"
                />
              </div>
              <div className="text-center">Современная Россия</div>
            </div>
          </div>
        </div>
      </section>
      <section className="preimush pb-80">
        <h2 className="pt-40">Наши преимущества</h2>
        <div className="hr_wrapper">
          <div className="hr_white"></div>
          <div className="circle c_white"></div>
        </div>
        <div className="container">
          <div className="row-preim mt-60">
            <div className="preimush_item">
              <Image
                src={SVGIMG1}
                alt="быстрое и справедливое слабирование"
              />
              <div>Быстрое и справедливое <br /> слабирование</div>
            </div>
            <div className="preimush_item">
              <Image
                src={SVGIMG6}
                alt="оценка монеты несколькими независимыми экспертами"
              />
              <div>Оценка монеты несколькими <br /> независимыми экспертами</div>
            </div>
            <div className="preimush_item">
              <Image
                src={SVGIMG5}
                alt="Гарантия подлинности"
              />
              <div>Гарантия подлинностия</div>
            </div>
          
          <div className="preimush_item">
              <Image
                src={SVGIMG4}
                alt="работаем со всей Россией"
              />
              <div>Работаем со всей Россией</div>
            </div>
          </div>
        </div>
      </section>
      
      <Script src="./anim.js" />
    </>

  )

}


