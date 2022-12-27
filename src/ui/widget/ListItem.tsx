import React, {FC, ReactNode} from "react";
import {Collapse, IconButton, TableCell, TableRow} from "@mui/material";
import Sentinel from "../../domain/universe/object/Sentinel";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

type Props = {
    children?: ReactNode;
    sentinel: Sentinel;
}

const ListItem: FC<Props> = ({ children, sentinel }: Props) => {
    const [open, setOpen] = React.useState(false);

    return <>
        <TableRow>
            <TableCell>
                {
                    (React.Children.count(children) >= 1) &&
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                }
            </TableCell>
            <TableCell component="th" scope="row" size={"small"}>
                {sentinel.getId()}
            </TableCell>
            <TableCell align="left" size={"medium"}>
                {sentinel.getName()}
            </TableCell>
            <TableCell align="left" size={"medium"}>
                {sentinel.getCoordinate().getValue()}
            </TableCell>
        </TableRow>
        {
            (React.Children.count(children) >= 1) &&
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        {children}
                    </Collapse>
                </TableCell>
            </TableRow>
        }
    </>
}

export default ListItem;
