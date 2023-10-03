import MainHeadSh from "./component/mainheadsh"
import Image from "next/image"
import Link from "next/link"

export default function LayoutPage({  
  children, Parent, Title
}) {
  return (
    <>  
    <div className="container">
        <MainHeadSh Parent={Parent} Title={Title} />        
    </div>
    <div className="container">
      <section className="main_content">
        <div className="content_wrapper pt-40">
          <div className="content_fcol">
            {children}
          </div>
          <div className="content_banner">
            <Image
                    src={"/images/img_48.jpg"}
                    width={300}
                    height={300}
                    alt="Picture of the author"
                  />
            <Image
                  src={"/images/img_34.jpg"}
                  width={300}
                  height={382}
                  alt="Picture of the author"
                />
          </div>
        </div>
        
      </section>
    </div>
  
  </>
  )
}
