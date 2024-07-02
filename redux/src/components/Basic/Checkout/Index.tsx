import { Button, IconButton, Stack, Typography } from "@mui/material"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove'
import { Food } from "../../../@types/api.types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { AddToBasket, RemoveAllBasket, RemoveFromBasket } from "../../../store/features/basket/basket.slice";

interface CheckoutProps { }

const Checkout: React.FC<CheckoutProps> = (): JSX.Element => {
    const basket = useSelector<RootState>(state => state.basket as any[])
    const dispatch = useDispatch<AppDispatch>()

    const onAddClick = (arg: Food) => {
        dispatch(AddToBasket(arg))
    }

    const onRemoveClick = (id: number) => {
        dispatch(RemoveFromBasket(id))
    }

    const handleRemoveBasket = (arg: any) => {
        dispatch(RemoveAllBasket(arg))
    }

    return (
        <Stack border={"2px solid #e7e7e7"} borderRadius={2}>
            <Stack borderBottom={"2px solid #e7e7e7"} px={"15px"} flexDirection={"row"} justifyContent={'space-between'} alignItems={"center"}>
                <Typography fontWeight={"bold"}>
                    سبد خرید
                    ({
                        basket?.reduce((accumlator: any, currentvalue: { Count: any; }) => {
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
                    basket?.map((item: Food) => (
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
                <Typography>{basket?.reduce((accumlator: any, currentvalue: any) => {
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
