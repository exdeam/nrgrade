import { gql } from "@apollo/client"
import { getClient } from "../../api/apollo-client"
import parse from 'html-react-parser'
import MainHeadSh from "../component/mainheadsh"
import RightCol from "../component/rightcol"
import LayoutPage from "../layoutpage"

export const generateMetadata = async ({ params }) => {

  const name = params.slug[1]
  const { data } = await getClient().query({
    query: GET_PAGE,
    variables: { name },
    context: {
      fetchOptions: {
        next: { revalidate: 60 },
      },
    },
  })

  return {
    description: data.curPage[0].description,
    keywords: data.curPage[0].keywords,
    title: data.curPage[0].title,
  }
}

export default async function SitePage({ params }) {
  const name = params.slug[1]

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
    <LayoutPage Title={data.curPage[0].title}>
      <div className="ck-content">
        <h1>{data.curPage[0].name}</h1>
        <div key={data.curPage[0].slug}>{parse(String(data.curPage[0].text))}</div>
      </div>
    </LayoutPage>
  )
}

const GET_PAGE = gql`
    query ($name: String!) {
        curPage(slug: $name) {
            description
            id
            keywords
            name
            slug
            text
            title
        }
    }
`