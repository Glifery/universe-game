import React, {FC} from "react";
import {
    Table,
    TableBody,
    TableHead,
    TableCell,
    TableRow,
    Grid,
    Paper,
    Container,
    Typography,
} from "@mui/material";
import ResultSet from "../../application/univerce/condition/ResultSet";
import ConditionSet from "../../application/univerce/condition/ConditionSet";
import ConditionSource from "./condition/ConditionSource";
import PanelNavigation from "../type/PanelNavigation";

type Props = {
    navigation: PanelNavigation;
    conditionSet: ConditionSet
    resultSet: ResultSet
}

const ResultSetTable: FC<Props> = ({ navigation, conditionSet, resultSet }: Props) => {
    return <Grid container spacing={2}>
        <Grid item xs={4}>
            <Typography variant={"h5"}>Filters:</Typography>
            <Paper>
                <ConditionSource navigation={navigation} conditionSet={conditionSet}></ConditionSource>
            </Paper>


        </Grid>
        <Grid item xs={8}>
            <Container>
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
            </Container>
        </Grid>
    </Grid>
}

export default ResultSetTable;
