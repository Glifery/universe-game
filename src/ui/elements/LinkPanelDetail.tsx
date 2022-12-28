import {Link} from "@mui/material";
import {FC} from "react";

type Props = {
    children: any;
    onClick: () => void;
}

const LinkPanelDetail: FC<Props> = ({ children, onClick }: Props) =>
    <Link
        component="button"
        underline="hover"
        color="inherit"
        onClick={onClick}
    >
        {children}
    </Link>

export default LinkPanelDetail
