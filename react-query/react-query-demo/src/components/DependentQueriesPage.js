import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const fetchUserByEmail = (email) => {
    return axios.get(`http://localhost:4000/users/${email}`)
}

const fetchChannelByChannelId = (channelId) => {
    return axios.get(`http://localhost:4000/channels/${channelId}`)
}



function DependentQueriesPage({ email }) {
    const { data: user } = useQuery({
        queryKey: ['user', email],
        queryFn: () => fetchUserByEmail(email)
    })

    const channelId= user?.data?.channelId

 useQuery(['courses', channelId], ()=> fetchChannelByChannelId(channelId),{
    enabled: !!channelId
 })

    return (
        <div>DependentQueriesPage</div>
    )
}

export default DependentQueriesPage