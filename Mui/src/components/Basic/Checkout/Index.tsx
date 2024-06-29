import { Button, IconButton, Stack, Typography } from "@mui/material"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove'
import { useContext } from "react";
import { AppContext } from "../../../context/store";

interface CheckoutProps { }

const Checkout: React.FC<CheckoutProps> = (): JSX.Element => {
    const { basket } = useContext(AppContext)

    return (
        <Stack border={"2px solid #e7e7e7"} borderRadius={2}>
            <Stack borderBottom={"2px solid #e7e7e7"} px={"15px"} flexDirection={"row"} justifyContent={'space-between'} alignItems={"center"}>
                <Typography fontWeight={"bold"}>
                    سبد خرید
                    {
                        basket?.reduce((accumlator, currentvalue) => {
                            return `(${currentvalue.Count + accumlator})`
                        }, 0)
                    }
                </Typography>
                <IconButton >
                    <DeleteOutlineIcon />
                </IconButton>
            </Stack>

            {/* items */}
            <Stack flexDirection={"column"} justifyContent={"space-between"} py={"10px"}>
                {
                    basket?.map((item) => (
                        <Stack key={item.id} flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"} px={"15px"} py={"10px"} borderBottom={"2px solid #e7e7e7"}>
                            <Stack flexDirection={"column"}>
                                <Typography variant="body1">{item.title}</Typography>
                                <Typography variant="subtitle1" fontWeight={200}>{item.price} تومان</Typography>
                            </Stack>
                            <Stack flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
                                <IconButton><AddIcon /></IconButton>
                                <Typography>{item.Count}</Typography>
                                <IconButton><RemoveIcon /></IconButton>
                            </Stack>
                        </Stack>
                    ))
                }
            </Stack>
            <Stack flexDirection={"row"} justifyContent={"space-between"} p={"15px"} >
                <Typography>هزینه کل</Typography>
                <Typography>{basket?.reduce((accumlator, currentvalue) => {
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
