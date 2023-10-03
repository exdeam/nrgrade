import LayoutPage from "../../../layoutpage"
import { gql } from "@apollo/client"
import { getClient } from "../../../../api/apollo-client"
import AllCountMonets from "./allcount"
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
                                <th className="leftcol">Год Монеты</th>
                                <th>Всего Монет</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.childrenOfCategory.map((cat) => (
                                <tr key={cat.id}>
                                    <td key={cat.id} className="leftcol">
                                    <Link href={`/monets/${encodeURIComponent(params.slug)}/${encodeURIComponent(cat.id)}/info`}>{cat.name}</Link>
                                    </td>
                                    <td key={cat.id}>
                                        <AllCountMonets monetId={cat.id} />
                                    </td>
                                </tr>
                                ))}
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
    query ($name: ID!) {
        childrenOfCategory (id: $name){
            id
            name
        }
        prevOfCategory (id: $name) {
            name
            images
            years
        }
        currentCategoryByid (id: $name) {
            name
        }
    }
`
