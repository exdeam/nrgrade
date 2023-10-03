import LayoutPage from "../../layoutpage"
import { gql } from "@apollo/client"
import { getClient } from "../../../api/apollo-client"

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
      title: data.currentMonetBycert[0].name,
      description: data.currentMonetBycert[0].name
    }
}

export default async function MonetaPage({ params }) {
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
        <LayoutPage Parent={"База данных монет"} Title={data.currentMonetBycert[0].name}>
            <section className="pb-80">        
                <div className="container">
                    <div className="row-base-monets">
                        <div className="moneta_item_moneta">
                            <div className="monets_image_h">         
                                <img
                                    src={`/media/${data.currentMonetBycert[0].images}`}
                                    alt={data.currentMonetBycert[0].name}
                                />
                            </div>
                        </div>
                        <div className="moneta_item_moneta">
                            <div className="monets_image_h">         
                                <img
                                    src={`/media/${data.currentMonetBycert[0].qrCode}`}
                                    alt={data.currentMonetBycert[0].name}
                                />
                            </div>
                        </div>
                        <div className="moneta_item_moneta">
                            <div><span className="bold">Монета:</span>&nbsp;&nbsp;&nbsp;{data.currentMonetBycert[0].name}</div>
                            <div><span className="bold">Сертификат:</span>&nbsp;&nbsp;&nbsp;{data.currentMonetBycert[0].cert}</div>
                        </div>
                    </div>
                </div>
            </section>            
        </LayoutPage>
    </>
    )
}

const CAT_MONETS = gql`
    query ($name: String!) {
        currentMonetBycert(cert: $name) {
            id
            images
            name
            qrCode
            safety
            slug
            cert
        }
    }
`