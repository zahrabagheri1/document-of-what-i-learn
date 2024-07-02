import { Button, IconButton, Stack, Typography } from "@mui/material"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove'
import { useContext } from "react";
import { AppContext } from "../../../context/store";
import { Food } from "../../../@types/api.types";
import { BasketType } from "../../../reducer/Basket/Index";

interface CheckoutProps { }

const Checkout: React.FC<CheckoutProps> = (): JSX.Element => {
    // const { basket, setBasket } = useContext(AppContext)

    // Ravesh 3
    const { state, dispatch } = useContext(AppContext)

    console.log(state)
    const onAddClick = (arg: Food) => {
        // console.log(arg)
        // const alreadyExist = basket?.find((x) => x.id == arg.id)
        // if (alreadyExist) {
        //     const newBasket = basket?.map((item) => {
        //         if (item.id == arg.id) {
        //             item.Count += 1
        //         }
        //         return item;
        //     })
        //     setBasket(newBasket)

        // } else {
        //     setBasket([...basket, { ...arg, Count: 1 }])
        // }

        // Ravesh 3
        dispatch({
            type: BasketType.AddToBasket,
            payload: arg
        })
    }

    const onRemoveClick = (id: number) => {
        // const alreadyExist = basket?.find((x) => x.id == id) //undefined
        // if (alreadyExist) {
        //     const basketWithOutElement = basket?.filter((x) => x.id != id)

        //     if (alreadyExist?.Count > 1) {
        //         const newBasket = basket?.map((item) => {
        //             if (item.id == id) {
        //                 item.Count -= 1
        //             }
        //             return item
        //         })
        //         setBasket(newBasket)
        //     } else {
        //         setBasket(basketWithOutElement)
        //     }
        // }

        // Ravesh 3
        dispatch({
            type: BasketType.RemoveFromBasket,
            payload: id
        })
    }

    const handleRemoveBasket = () => {
        // setBasket([])

        // Ravesh 3
        dispatch({
            type: BasketType.RemoveAllBasket
        })
    }

    return (
        <Stack border={"2px solid #e7e7e7"} borderRadius={2}>
            <Stack borderBottom={"2px solid #e7e7e7"} px={"15px"} flexDirection={"row"} justifyContent={'space-between'} alignItems={"center"}>
                <Typography fontWeight={"bold"}>
                    سبد خرید
                    ({
                        state.basket.reduce((accumlator, currentvalue) => {
                            return currentvalue.Count + accumlator
                        }, 0)
                    })
                </Typography>
                <IconButton onClick={handleRemoveBasket}>
                    <DeleteOutlineIcon />
                </IconButton>
            </Stack>

            {/* items */}
            <Stack flexDirection={"column"} justifyContent={"space-between"} py={"10px"}>
                {
                    state.basket.map((item: Food) => (
                        <Stack key={item.id} flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"} px={"15px"} py={"10px"} borderBottom={"2px solid #e7e7e7"}>
                            <Stack flexDirection={"column"}>
                                <Typography variant="body1">{item.title}</Typography>
                                <Typography variant="subtitle1" fontWeight={200}>{item.price} تومان</Typography>
                            </Stack>
                            <Stack flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
                                <IconButton onClick={() => onAddClick(item)}><AddIcon /></IconButton>
                                <Typography>{item.Count}</Typography>
                                <IconButton onClick={() => onRemoveClick(item.id)}><RemoveIcon /></IconButton>
                            </Stack>
                        </Stack>
                    ))
                }
            </Stack>
            <Stack flexDirection={"row"} justifyContent={"space-between"} p={"15px"} >
                <Typography>هزینه کل</Typography>
                <Typography>{state.basket.reduce((accumlator, currentvalue) => {
                    return (currentvalue.Count * currentvalue.price) + accumlator
                }, 0)} تومان</Typography>
            </Stack>
            <Stack color={'primary'} p={"15px"}>
                <Button variant='contained'>تکمیل سفارش</Button>
            </Stack>
        </Stack>
    )
}

export default Checkout
