import Image from "next/image"


export default function RightCol() {
    return (
        <>
            <div className="content_banner">
                <Image
                    src={"/images/img_48.jpg"}
                    width={300}
                    height={300}
                    alt="Picture of the author"
                />
                <Image
                    src={"/images/img_34.jpg"}
                    width={300}
                    height={382}
                    alt="Picture of the author"
                />
            </div>
        </>
    )
}