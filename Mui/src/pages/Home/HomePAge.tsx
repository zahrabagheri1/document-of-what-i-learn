import React from 'react'
import Slider from '../../components/Basic/Slider/Index'
import { useAxios } from '../../hook/useAxios'
import { API_URL } from '../../constants/apiUrl'
import { Container, Grid, Skeleton } from '@mui/material'
import { Card } from '../../components/Basic/Card/Index'
import { GetMealResponse, GetSliderResponse } from '../../@types/api.types'
import { Link } from 'react-router-dom'

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
    <Container maxWidth={'xl'} >
      <Slider images={sliderData?.map(item => item.src) as string[]} />
      <Grid container spacing={"26px"}>
        <Grid item xs={12} md={8}>
          <Grid container spacing={5}>
            {
              mealData?.categories.map((item) => (
                item.sub?.map((sub) => (
                  sub.food.map((food) => (
                    <Grid item xs={12} md={4} key={food.id}>
                      <Link to={`/${food.id}`}>
                        <Card title={food.title} image={food.img} price={food.price.toString()} />
                      </Link>
                    </Grid>
                  ))
                ))
              ))
            }
          </Grid>
        </Grid>

        <Grid item xs={0} md={4}>Hello cart</Grid>
      </Grid>
    </Container>
  )
}

export default HomePAge