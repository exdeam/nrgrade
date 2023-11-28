import { gql } from "@apollo/client"
import { getClient } from "../../api/apollo-client"
import Link from "next/link"

export default async function Dropdown({ name, slug }) {

    const { data } = await getClient().query({ 
        query: GET_PAGE,
        variables: { name },
        context: {
            fetchOptions: {
              next: { revalidate: 60 },
            },
          },
    })

   return (
    <div className="dropdown-content drop-size">
        {data.allPageBycat.map((item) => (
            <Link href={`/${slug}/${item.slug}`} key={item.key}>{item.name}</Link>
            
        ))}
    </div>      
    )
}

const GET_PAGE = gql`
  query ($name: ID!) {
    allPageBycat(id: $name) {
        name
        slug
        id
      }
    }
`