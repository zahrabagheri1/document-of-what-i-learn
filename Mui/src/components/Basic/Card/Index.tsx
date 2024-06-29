import { IconButton, Stack, Typography } from "@mui/material"
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

interface CardProps {
    title: string,
    image: string,
    price: string
}

export const Card: React.FC<CardProps> = ({ title, image, price }): JSX.Element => {
    console.log(image)
    return (
        <Stack border={"1px solid #ffff"} borderRadius={5} overflow={"hidden"}>
            <Stack>
                <img src={'https://static.delino.com/Image/Restaurant/Food/y5bwcxjv.y52_560x350.jpg'} />
            </Stack>
            <Stack p={2} spacing={1} >
                <Stack>
                    <Typography variant="h6" textOverflow={"ellipsis"}>{title}</Typography>
                </Stack>
                <Stack direction={"row"} justifyContent={"space-between"}>
                    <Typography variant="subtitle1" fontWeight={200}>{price} تومان</Typography>
                    <Stack direction={"row"}>
                        <IconButton>
                            <AddIcon />
                        </IconButton>
                        <IconButton>
                            <RemoveIcon />
                        </IconButton>
                    </Stack>
                </Stack>
            </Stack>
        </Stack >
    )
}