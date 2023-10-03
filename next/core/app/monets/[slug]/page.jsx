import LayoutPage from "../../layoutpage"
import { gql } from "@apollo/client"
import { getClient } from "../../../api/apollo-client"
import AllCountMonets from "./allcount"
import Link from "next/link"
import Image from "next/image"

export const generateMetadata = async ({ params }) => {
    const name = params.slug
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
      title: data.currentCategoryByslug[0].name,
      description: data.currentCategoryByslug[0].name
    }
}

export default async function DoPetraMonets({ params }) {
    const name = params.slug

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
        <LayoutPage Parent={"База данных монет"} Title={data.currentCategoryByslug[0].name}>
            <section className="pb-80">        
                <div className="container">
                    <div className="row-base-monets">
                        <div className="monets_item_monets">
                            <div className="monets_image_h">         
                                <img
                                    src={`/media/${data.currentCategoryByslug[0].images}`}
                                    alt={data.currentCategoryByslug[0].name}
                                />
                            </div>
                            <div className="monets_image_text">{data.currentCategoryByslug[0].name}<br />
                                <span>{data.currentCategoryByslug[0].years}</span>
                            </div>
                        </div>
                    </div>
                    <div className="row-st">
                    <table>
                        <thead>
                            <tr>
                                <th>Номинал Монеты</th>
                                <th>Всего Монет</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.secondOfCategory.map((cat) => (
                                <tr key={cat.id}>
                                    <td key={cat.id} className="upper leftcol">
                                    <Link href={`/monets/${encodeURIComponent(params.slug)}/${encodeURIComponent(cat.id)}`}>{cat.name}</Link>
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
    query ($name: String!) {
        secondOfCategory (slug: $name){
            id
            name
        }
        currentCategoryByslug(slug: $name){
            name
            images
            slug
            years
        }
    }
`
