import { Button, ButtonBase, styled } from "@mui/material";

export const CustomButton = styled(Button)`
    text-transform: none;
    border-radius: 14px;
`
type NavButtonProps = {
    selected: boolean
}
export const NavButton = styled(ButtonBase)<NavButtonProps>(({theme, selected}) => ({
    color: selected ? theme.palette.text.primary : theme.palette.text.secondary
}))