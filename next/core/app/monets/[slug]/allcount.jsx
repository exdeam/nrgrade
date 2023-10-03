import { gql } from "@apollo/client"
import { getClient } from "../../../api/apollo-client"

export default async function AllCountMonets({ monetId }) {
    const name = monetId

    const { data } = await getClient().query({ 
        query: ALL_COUNT,
        variables: { name },
        context: {
          fetchOptions: {
            next: { revalidate: 50 },
          },
        },
    })   
    return (data.allCount.count)
}
const ALL_COUNT = gql`
    query MyQuery ($name: ID!){
        allCount(id: $name) {
          count
        }
      }
`