import React from 'react'
import { useParams } from 'react-router-dom'

interface DetailsPageProps {

}

const DetailsPage: React.FC<DetailsPageProps> = (): JSX.Element => {
    const param = useParams()
    return (
        <div>DetailsPage {param.id}</div>
    )
}

export default DetailsPage