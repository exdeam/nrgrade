import Link from "next/link"
import Image from "next/image"
import { gql } from "@apollo/client"
import { getClient } from "../../api/apollo-client"

export default async function DoPetra ({ name }) {
  console.log(name)
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
        <section className="pb-80">        
        <div className="container">
          <div className="row-st">
            <div className="base_item_monets">
                <div className="base_image_h">
                <Link href={`/monets/${encodeURIComponent(params.slug)}/`}>                
                    <Image
                    src={`/images/${data.currentCategoryByslug[0].images}`}
                    width={160}
                    height={200}
                    alt="Допетровская Россия"
                    />
                </Link>
                </div>
                <Link href={`/monets/${encodeURIComponent(params.slug)}/`}>
                    <div className="text-center">{data.currentCategoryByslug[0].name}</div>
                </Link>
            </div>            
          </div>
        </div>
      </section>
    )
  }

const CAT_MONETS = gql`
  query ($name: String!) {
      currentCategoryByslug(slug: $name){
          name
          images
      }
  }
`  