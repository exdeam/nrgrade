import Image from 'next/image'
import SVGIMG1 from '../../public/loupe_wite.svg'
import { redirect } from 'next/navigation'

export default async function MainHeadText() {
    async function create(formData) {
        'use server'
        redirect(`/moneta/${formData.get('name')}`)
    }
    
    return (
        <>
            
                <div className="main_head_text">
                    <div className="main_head_text__one">
                        <p>Наш центр предлагает осуществить процедуру сертификации и слабирования монет,
                            которая включает в себя подтверждение подлинности и определение
                        </p>
                    </div>
                    <div className="main_head_text__two">
                        <p>В процессе сертификации монета взвешивается, производится ее цифровая фотосъемка, а также, при необходимости, описываются ее особенности
                            и недостатки.
                        </p>
                    </div>
                    <div className="main_head_text__three">
                        <p>Вся информация о монете заносится в информационную базу данных Национального нумизматического реестра. После этого монета помещается в пластиковую капсулу (слаб)
                        </p>
                    </div>
                </div>
                <div className="main_head_pict">
                    <div className="main_head_pict__one">
                        <Image
                            src={"/images/img_17.jpg"}
                            width={245}
                            height={200}
                            alt="Slab"
                        />
                    </div>
                    <div className="main_head_pict__two">
                        <div className='pict__two_prov'>
                            <p className='two_prov__one upper'>Приобрели монету в слабе?</p>
                            <p className='two_prov__two'>Проверьте ее в нашей базе данных</p>
                            <p></p>
                            <div className='pict__two_butt'>
                                <form action={create} className='two_butt__form'>
                                    <input className='two_butt__grey' placeholder="Введите номер слаба" type="text" name="name" />
                                    <button className='two_butt__main'><Image src={SVGIMG1} alt={"номер слеба"} />&nbsp;&nbsp;Проверить сертификат</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            
        </>
    )
}