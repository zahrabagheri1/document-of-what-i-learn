import React from 'react'
import Slider from '../../components/Basic/Slider/Index'
import { useAxios } from '../../hook/useAxios'
import { API_URL } from '../../constants/apiUrl'
import { Container, Grid, Skeleton } from '@mui/material'
import { Card } from '../../components/Basic/Card/Index'
import { Food, GetMealResponse, GetSliderResponse } from '../../@types/api.types'
import { useNavigate } from 'react-router-dom'
import Checkout from '../../components/Basic/Checkout/Index'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store/store'
import { AddToBasket, RemoveFromBasket } from '../../store/features/basket/basket.slice'

const HomePAge: React.FC = (): JSX.Element => {
  const navigate = useNavigate()

  const basket = useSelector<RootState>(state => state.basket as any[])
  const dispatch = useDispatch<AppDispatch>()

  const handleAddToBasket = (arg: Food) => {
    dispatch(AddToBasket(arg))
  }

  const handleRemoveFromBasket = (id: number) => {
    dispatch(RemoveFromBasket(id))
  }

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

  return (
    <Container maxWidth={'xl'} >
      <Slider images={sliderData?.map(item => item.src) as string[]} />
      <Grid container spacing={"26px"}>
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            {
              mealData?.categories.map((item: { sub: { food: Food[] }[] }) => (
                item.sub?.map((sub: { food: Food[] }) => (
                  sub.food.map((food: Food) => (
                    <Grid item xs={12} md={4} key={food.id}>
                      <Card
                        id={food.id}
                        title={food.title}
                        image={food.img.replace("#SIZEOFIMAGE#", "560x350")}
                        price={food.price.toString()}
                        onClick={() => navigate(`/${food.id}`)}
                        onAddClick={() => handleAddToBasket(food)}
                        onRemoveClick={() => handleRemoveFromBasket(food.id)}
                        showRemoveButton={!!basket.find((x: { id: any }) => x.id == food.id)?.Count}
                      />
                    </Grid>
                  ))
                ))
              ))
            }
          </Grid>
        </Grid>

        <Grid item xs={0} md={4}>
          <Checkout />
        </Grid>
      </Grid>
    </Container>
  )
}

export default HomePAge