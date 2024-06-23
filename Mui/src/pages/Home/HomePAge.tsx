import React from 'react'
import Slider from '../../components/Basic/Slider/Index'
import { useAxios } from '../../hook/useAxios'
import { API_URL } from '../../constants/apiUrl'
import { Skeleton } from '@mui/material'

function HomePAge() {

  const { data, isLoading } = useAxios<any, GetSliderResponse[], any>({
    url: API_URL.GetSliders
  })

  if (isLoading) {
    return <Skeleton height={"50vh"} animation={"wave"} />
  }

  return (
    <>
      <Slider images={data?.map(item => item.src) as string[]} />
    </>
  )
}

export default HomePAge