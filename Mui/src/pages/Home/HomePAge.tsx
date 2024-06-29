import React from 'react'
import Slider from '../../components/Basic/Slider/Index'
import { useAxios } from '../../hook/useAxios'
import { API_URL } from '../../constants/apiUrl'
import { Grid, Skeleton } from '@mui/material'
import { Card } from '../../components/Basic/Card/Index'
import { GetMealResponse, GetSliderResponse } from '../../@types/api.types'

function HomePAge() {

  // For slider
  const { data: sliderData, isLoading: sliderLoading } = useAxios<null, GetSliderResponse[], null>({
    url: API_URL.GetSliders
  })

  // For Meals
  const { data: mealData, isLoading: mealLoading } = useAxios<null, GetMealResponse[], null>({
    url: API_URL.GetMeals
  })

  if (sliderLoading || mealLoading) {
    return <Skeleton height={"50vh"} animation={"wave"} />
  }

  console.log(mealData?.categories[0].sub[0].food[0].img)
  return (
    <>
      <Slider images={sliderData?.map(item => item.src) as string[]} />
      <Grid container spacing={5}>
        {
          mealData?.categories.map((item) => (
            item.sub?.map((sub) => (
              sub.food.map((food) => (
                <Grid item xs={12} md={4} key={food.id}>
                  <Card title={food.title} image={food.img} price={food.price.toString()}/>
                </Grid>
              ))
            ))
          ))
        }
      </Grid>
    </>
  )
}

export default HomePAge