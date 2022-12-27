import {Link} from "@mui/material";
import {FC} from "react";

type Props = {
    children: any;
    onClick: () => void;
}

const LinkUniverseDetail: FC<Props> = ({ children, onClick }: Props) =>

// function LinkUniverseDetail(props: Props) {
//     const { text, onClick } = props
        <Link
            component="button"
            underline="hover"
            color="inherit"
            onClick={onClick}
        >
            {children}
        </Link>

export default LinkUniverseDetail
