import {FC} from "react";
import {Table, TableBody, TableHead, TableCell, TableRow} from "@mui/material";
import ResultSet from "../../application/univerce/condition/ResultSet";

type Props = {
    resultSet: ResultSet
}

const ResultSetTable: FC<Props> = ({ resultSet }: Props) => {
    return <>
        <Table>
            <TableHead>
                <TableRow>
                    {resultSet.getAvailableFields().map(field => (
                        <TableCell key={"h-"+field} align={"center"}>{field}</TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {resultSet.getItems().map((item, index) => (
                    <TableRow key={index}>
                        {item.getFieldValues().map(entry => (
                            <TableCell key={index+"-"+entry[0]} align={"center"}>{entry[1]}</TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </>
}

export default ResultSetTable;
