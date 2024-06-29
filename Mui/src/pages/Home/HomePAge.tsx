import React, { useContext } from 'react'
import Slider from '../../components/Basic/Slider/Index'
import { useAxios } from '../../hook/useAxios'
import { API_URL } from '../../constants/apiUrl'
import { Container, Grid, Skeleton } from '@mui/material'
import { Card } from '../../components/Basic/Card/Index'
import { Food, GetMealResponse, GetSliderResponse } from '../../@types/api.types'
import { useNavigate } from 'react-router-dom'
import Checkout from '../../components/Basic/Checkout/Index'
import { AppContext } from '../../context/store'

const HomePAge: React.FC = (): JSX.Element => {
  const navigate = useNavigate()
  const { basket, setBasket } = useContext(AppContext)

  console.log(basket)
  const handleAddToBasket = (arg: Food) => {
    // 1. If not, it should be added to the list
    // 2. If it is added, it should be added to its account

    // const alreadyExist = basket?.find((x) => x.id == arg.id) //undefined
    // if (alreadyExist) {
    // exist
    // Ravesh (1)
    // if (alreadyExist.Count) {
    //   alreadyExist.Count += 1
    // } else {
    //   alreadyExist.Count = 1
    // }

    // alreadyExist.Count += 1

    // setbasket
    // const basketWithOutElement = basket?.filter((x) => x.id != arg.id)
    // Bug => When we add a product, it goes to the bottom of the list 
    // setBasket([...basketWithOutElement, alreadyExist])

    // } else {
    // not exist
    // setBasket([...basket, arg])
    // setBasket([...basket, { ...arg, Count: 1 }])
    // }
    // }

    // Ravesh (2)
    const alreadyExist = basket?.find((x) => x.id == arg.id) //undefined

    if (alreadyExist) {
      const newBasket = basket?.map((item) => {
        if (item.id == arg.id) {
          item.Count += 1
        }
        return item;
      })
      setBasket(newBasket)

    } else {
      setBasket([...basket, { ...arg, Count: 1 }])
    }
  }


  const handleRemoveFromBasket = (id: number) => {
    // 3. If it is reduced, it should be reduced from the account unless it is the last account to be deleted
    // const alreadyExist = basket?.find((x) => x.id == id) //undefined
    // if (alreadyExist) {
    //   const basketWithOutElement = basket?.filter((x) => x.id != id)

    //   if (alreadyExist?.Count > 1) {
    //     alreadyExist.Count -= 1
    //     setBasket([...basketWithOutElement, alreadyExist])
    //   } else {
    //     setBasket(basketWithOutElement)

    //   }
    // }

    //Ravesh 2
    const alreadyExist = basket?.find((x) => x.id == id) //undefined
    if (alreadyExist) {
      const basketWithOutElement = basket?.filter((x) => x.id != id)

      if (alreadyExist?.Count > 1) {
        const newBasket = basket?.map((item) => {
          if (item.id == id) {
            item.Count -= 1
          }
          return item
        })
        setBasket(newBasket)
      } else {
        setBasket(basketWithOutElement)
      }
    }
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

  // console.log(mealData?.categories[0].sub[0].food[0].img)
  return (
    <Container maxWidth={'xl'} >
      <Slider images={sliderData?.map(item => item.src) as string[]} />
      <Grid container spacing={"26px"}>
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            {
              mealData?.categories.map((item) => (
                item.sub?.map((sub) => (
                  sub.food.map((food) => (
                    <Grid item xs={12} md={4} key={food.id}>
                      <Card
                        title={food.title}
                        image={food.img.replace("#SIZEOFIMAGE#", "560x350")}
                        price={food.price.toString()}
                        onClick={() => navigate(`/${food.id}`)}
                        onAddClick={() => handleAddToBasket(food)}
                        onRemoveClick={() => handleRemoveFromBasket(food.id)}
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