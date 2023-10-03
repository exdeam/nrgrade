import Link from "next/link"

export default async function Menu({ }) {

  return (
    <nav className="main_menu">
      <div className="menu__wrapper">
        <div className="menu__wrapper-inner">
          <div className="drop">
            <Link href="/products/">
              <div>Услуги</div>
            </Link>
          </div>
          <div className="dropdown-content drop-size">
            <Link href="/sertification/">Сертификация слабирование монет</Link>            
          </div>
        </div>
        <Link href="/akcii/">
          <div className="menu__wrapper-inner">
            <div className="drop">Сертификация</div>
          </div>
        </Link>
        <Link href="/oborudovanie/">
          <div className="menu__wrapper-inner">
            <div className="drop">Информация</div>
          </div>
        </Link>
        <Link href="/partneram/">
          <div className="menu__wrapper-inner">
            <div className="drop">О нас</div>
          </div>
        </Link>
        <Link href="/delivery/">
          <div className="menu__wrapper-inner">
            <div className="drop">Контакты</div>
          </div>
        </Link>
        <Link href="/base/">
          <div className="menu__wrapper-inner">
            <div className="drop">База данных</div>
          </div>
        </Link>
      </div>
    </nav>
  )
}

