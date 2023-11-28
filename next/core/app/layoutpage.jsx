import MainHeadSh from "./component/mainheadsh"
import RightCol from "./component/rightcol"

export default function LayoutPage({  
  children, Parent, Title
}) {
  return (
    <>  
    <div className="container main_sh">
        <MainHeadSh Parent={Parent} Title={Title} />        
    </div>
    <div className="container">
      <section className="main_content">
        <div className="content_wrapper pt-40">
          <div className="content_fcol">
            {children}
          </div>
          <RightCol />
        </div>
        
      </section>
    </div>
  
  </>
  )
}
