import {FC} from "react";
import {TableCell, TableRow} from "@mui/material";

type Props = {
    children: any;
    descriptionKey: string;
}

const DescriptionKeyValue: FC<Props> = ({ children, descriptionKey }: Props) =>
    <TableRow>
        <TableCell component="th" scope="row" size={"small"}>
            {descriptionKey}
        </TableCell>
        <TableCell align="left" size={"medium"}>{children}</TableCell>
    </TableRow>

export default DescriptionKeyValue;
