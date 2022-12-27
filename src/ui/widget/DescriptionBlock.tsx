import {FC} from "react";
import {Table, TableBody, tableCellClasses} from "@mui/material";

type Props = {
    children: any;
}

const DescriptionBlock: FC<Props> = ({ children }: Props) =>
    <Table sx={{
        [`& .${tableCellClasses.root}`]: {
            borderBottom: "none"
        }
    }} aria-label="simple table" padding={"none"}>
        <TableBody>
            {children}
        </TableBody>
    </Table>

export default DescriptionBlock;
