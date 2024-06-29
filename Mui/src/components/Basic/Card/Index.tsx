import { IconButton, Stack, Typography } from "@mui/material"
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

interface CardProps {
    title: string,
    image: string,
    price: string,
    onAddClick: () => void,
    onRemoveClick: () => void,
    onClick?: () => void
}

export const Card: React.FC<CardProps> = ({ title, image, price, onClick, onAddClick, onRemoveClick }): JSX.Element => {
    // console.log(image)
    return (
        <Stack border={"1px solid #e7e7e7"} borderRadius={5} overflow={"hidden"} component={"a"} onClick={onClick}>
            <Stack>
                <img src={image} />
            </Stack>
            <Stack p={2} spacing={1} >
                <Stack>
                    <Typography variant="h6" sx={{ textOverflow: "ellipsis", overflow: "hidden", width: "90%", textWrap: "nowrap" }}>{title}</Typography>
                </Stack>
                <Stack direction={"row"} justifyContent={"space-between"}>
                    <Typography variant="subtitle1" fontWeight={200}>{price} تومان</Typography>
                    <Stack direction={"row"}>
                        <IconButton onClick={(e) => {
                            e.stopPropagation()
                            onAddClick()
                        }}>
                            <AddIcon />
                        </IconButton>
                        <IconButton onClick={(e) => {
                            e.stopPropagation()
                            onRemoveClick()
                        }}>
                            <RemoveIcon />
                        </IconButton>
                    </Stack>
                </Stack>
            </Stack>
        </Stack >
    )
}