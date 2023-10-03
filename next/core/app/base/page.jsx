import Base from "../component/base"
import LayoutPage from "../layoutpage"

export const metadata = {
  title: 'База данных монет',
  description: 'База данных монет',
}

export default function BasePage() {

    return (
        <LayoutPage Parent={"База данных монет"} Title={metadata.title}>
            <Base />
        </LayoutPage>
    )
}