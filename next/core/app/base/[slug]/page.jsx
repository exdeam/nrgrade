import Link from "next/link"
import Image from "next/image"
import { gql } from "@apollo/client"
import { getClient } from "../../../api/apollo-client"
import LayoutPage from "../../layoutpage"

export default async function DoPetra({ params }) {
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
        <LayoutPage Parent={"База данных монет"} Title={data.currentCategoryByslug[0].name}>
            <section className="pb-80">
                <div className="container">
                    <div className="row-base-monets">
                        {data.secondOfCategory.map((cat) => (
                            <>
                                <div className="base_item_monets">
                                    <div className="base_image_h">
                                        <Link href={`/monets/${encodeURIComponent(cat.slug)}`}>
                                            <img
                                                src={`/media/${cat.images}`}
                                                width={180}
                                                height={180}
                                                alt={cat.name}
                                            />
                                        </Link>
                                    </div>
                                    <Link href={`/monets/${encodeURIComponent(cat.slug)}`}>
                                        <div className="text-center">{cat.name}<br/><span>{cat.years}</span></div>
                                    </Link>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
        </section>
        </LayoutPage >
    )
}

const CAT_MONETS = gql`
    query ($name: String!) {
        currentCategoryByslug(slug: $name){
            name
        }
        secondOfCategory(slug: $name) {
            slug
            images
            name
            years
        }
    }
`  
