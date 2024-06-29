import { Button, IconButton, Stack, Typography } from "@mui/material"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove'

interface CheckoutProps { }

const Checkout: React.FC<CheckoutProps> = (): JSX.Element => {
    return (
        <Stack border={"2px solid #e7e7e7"} borderRadius={5}>
            <Stack borderBottom={"2px solid #e7e7e7"} px={"15px"} flexDirection={"row"} justifyContent={'space-between'} alignItems={"center"}>
                <Typography>سبد خرید</Typography>
                <IconButton >
                    <DeleteOutlineIcon />
                </IconButton>
            </Stack>
            {/* items */}
            <Stack flexDirection={"column"} justifyContent={"space-between"}  py={"10px"}>
                <Stack flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"} px={"15px"} py={"10px"} borderBottom={"2px solid #e7e7e7"}>
                    <Stack flexDirection={"column"}>
                        <Typography variant="body1">کامبوی آیس لته Fresco Therapy</Typography>
                        <Typography variant="subtitle1" fontWeight={200}>170,000 تومان</Typography>
                    </Stack>
                    <Stack flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
                        <IconButton><AddIcon /></IconButton>
                        <Typography>1</Typography>
                        <IconButton><RemoveIcon /></IconButton>
                    </Stack>
                </Stack>
                <Stack flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"} px={"15px"} py={"10px"} borderBottom={"2px solid #e7e7e7"}>
                    <Stack flexDirection={"column"}>
                        <Typography variant="body1">کامبوی آیس لته Fresco Therapy</Typography>
                        <Typography variant="subtitle1" fontWeight={200}>170,000 تومان</Typography>
                    </Stack>
                    <Stack flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
                        <IconButton><AddIcon /></IconButton>
                        <Typography>1</Typography>
                        <IconButton><RemoveIcon /></IconButton>
                    </Stack>
                </Stack>
            </Stack>
            <Stack flexDirection={"row"} justifyContent={"space-between"} px={"15px"} >
                <Typography>هزینه کل</Typography>
                <Typography>250.000 تومان</Typography>
            </Stack>
            <Stack>
                <Button>تکمیل سفارش</Button>
            </Stack>
        </Stack>
    )
}

export default Checkout
