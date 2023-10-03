import LayoutPage from "../../../../layoutpage"
import { gql } from "@apollo/client"
import { getClient } from "../../../../../api/apollo-client"
import Link from "next/link"
import Image from "next/image"

export const generateMetadata = async ({ params }) => {
    const name = params.id
    const { data } = await getClient().query({ 
        query: CAT_MONETS,
        variables: { name },
        context: {
            fetchOptions: {
              next: { revalidate: 50 },
            },
          },
    })

    return {
      title: data.currentCategoryByid[0].name,
      description: data.currentCategoryByid[0].name
    }
}
export default async function DoPetraMonets({ params }) {
    const name = params.id

    const { data } = await getClient().query({ 
        query: CAT_MONETS,
        variables: { name },
        context: {
            fetchOptions: {
              next: { revalidate: 50 },
            },
          },
    })
    const obj = JSON.parse(data.monetsInfo.info)
    return (
        <>
        <LayoutPage Parent={"База данных монет"} Title={data.currentCategoryByid[0].name}>
            <section className="pb-80">        
                <div className="container">
                <div className="row-base-monets">
                        <div className="monets_item_monets">
                            <div className="monets_image_h">         
                                <img
                                    src={`/media/${data.prevOfCategory[0].images}`}
                                    alt={data.prevOfCategory[0].name}
                                />
                            </div>
                            <div className="monets_image_text">{data.prevOfCategory[0].name}<br />
                                <span>{data.prevOfCategory[0].years}</span>
                            </div>
                        </div>
                    </div>
                    <div className="row-st">
                    <table>
                        <thead>
                            <tr>
                                <th>Сохранность Монеты</th>
                                <th>Всего Монет</th>
                            </tr>
                        </thead>
                        <tbody>
                            { Object.entries(obj).map( ([key, value]) =>
                                <tr key={key}>
                                    <td className="leftcol">{key}</td>
                                    <td>{value}</td>
                                </tr>
                            )}   
                        </tbody>
                    </table>          
                    </div>
                </div>
            </section>            
        </LayoutPage>
    </>
    )
}

const CAT_MONETS = gql`
    query MyQuery ($name: ID!){
        monetsInfo(id: $name) {
            info
        }
        currentCategoryByid(id: $name){
            name
        }
        prevOfCategory (id: $name) {
            name
            images
            years
        }
    }
`
