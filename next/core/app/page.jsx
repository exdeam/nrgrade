import MainHeadText from "./component/mainheadtext"
import Script from "next/script"
import Image from 'next/image'
import SVGIMG1 from '../public/prava.svg'
import SVGIMG2 from '../public/stoim.svg'
import SVGIMG3 from '../public/bezopasn.svg'
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
        <h1 className="pt-40">Сертификация и слабирование монет</h1>
        <div className="hr_wrapper">
          <div className="hr_main"></div>
          <div className="circle c_main"></div>
        </div>
        <div className="container">
          <div className="row-st mt-60">
            <div className="uslugi_btn_item">
              <div>Сертификация <br />
                (слабирование) монет
              </div>
            </div>
            <div className="uslugi_btn_item">
              <div>Нумизматическая экспертиза</div>
            </div>
            <div className="uslugi_btn_item">
              <div>Спектральный анализ монет</div>
            </div>
          </div>
          <div className="row-st mt-60">
            <div className="uslugi_btn_item">
              <div>Подготовка к продаже и <br />помощь в реализации </div>
            </div>
            <div className="uslugi_btn_item">
              <div>Профессиональная <br />чистка  монет</div>
            </div>
            <div className="uslugi_btn_item">
              <div>Фотосъёмка монет</div>
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
          <div className="row-st mt-60">
            <div className="preimush_item">
              <Image
                src={SVGIMG1}
                alt="Подтверждение прав владения"
              />
              <div>Подтверждение прав владения</div>
            </div>
            <div className="preimush_item">
              <Image
                src={SVGIMG2}
                alt="Ликвидность и стоимость"
              />
              <div>Ликвидность и стоимость</div>
            </div>
            <div className="preimush_item">
              <Image
                src={SVGIMG3}
                alt="Безопасность коллекции"
              />
              <div>Безопасность коллекции</div>
            </div>
          </div>
          <div className="row-st mt-60">
            <div className="preimush_item">
              <Image
                src={SVGIMG4}
                alt="Рыночная история"
              />
              <div>Рыночная история</div>
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
                src={SVGIMG6}
                alt="Определение разновидностей"
              />
              <div>Определение разновидностей</div>
            </div>
          </div>
        </div>
      </section>
      <section className="stat pb-55">
        <h2 className="pt-40">Грайдинг монет</h2>
        <h3>Полезная информация для новичков и профессионалов</h3>
          <div className="hr_wrapper">
            <div className="hr_main"></div>
            <div className="circle c_main"></div>
          </div>
          <div className="container">
            <div className="stat-row mt-60">
              <div className="stat-item">
                <Image
                  src={"/images/img_news_10.jpg"}
                  width={248}
                  height={216}
                  alt="Picture of the author"
                />
                <div className="stat-item__nazvanie">Название статьи</div>
              </div>
              <div className="stat-item">
                <Image
                  src={"/images/img_news_11.jpg"}
                  width={248}
                  height={216}
                  alt="Picture of the author"
                />
                <div className="stat-item__nazvanie">Название статьи</div>
              </div>
              <div className="stat-item">
                <Image
                  src={"/images/img_news_12.jpg"}
                  width={248}
                  height={216}
                  alt="Picture of the author"
                />
                <div className="stat-item__nazvanie">Название статьи</div>
              </div>
              <div className="stat-item">
                <Image
                  src={"/images/img_news_13.jpg"}
                  width={248}
                  height={216}
                  alt="Picture of the author"
                />
                <div className="stat-item__nazvanie">Название статьи</div>
              </div>
            </div>
            <div className="stat-btn-wrapper">
              <button className="stat-btn">Читать все статьи</button>
            </div>
          </div>
      </section>
      <Script src="./anim.js" />
    </>

  )

}


