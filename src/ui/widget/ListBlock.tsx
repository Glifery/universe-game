import {FC} from "react";
import {Table, TableBody} from "@mui/material";

type Props = {
    children: any;
    data: any
}

const ListBlock: FC<Props> = ({ children }: Props) => {
    return <Table>
        <TableBody>
            {children}
        </TableBody>
    </Table>
}

export default ListBlock;
