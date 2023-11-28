import { gql } from "@apollo/client"
import { getClient } from "../../api/apollo-client"
import Dropdown from "./dropdown"
import Link from "next/link"

export default async function Menu() {

  const { data } = await getClient().query({
    query: GET_MENU,
    context: {
      fetchOptions: {
        next: { revalidate: 60 },
      },
    },
  })
  
  return (
    <nav className="main_menu">
      <div className="menu__wrapper">
        {data.allMenu.map((item) => {          
              if (item.slug === "base") {
                return (
                  <div className="menu__wrapper-inner" key={item.id}>
                    <div className="drop" key={item.id}>
                      <Link href="/base"><div key={item.id}>{item.name}</div></Link>
                    </div>
                    
                  </div>
                )
              }
              return (
                  <div className="menu__wrapper-inner" key={item.id}>
                    <div className="drop" key={item.id}>
                      <div key={item.id}>{item.name}</div>
                    </div>
                      <Dropdown name={item.id} slug={item.slug} />
                  </div>
              )
            }
          )
        } 
      </div>
    </nav>
  )
}

const GET_MENU = gql`
  query {
    allMenu {
      id
      name
      slug
    }
  }
`
