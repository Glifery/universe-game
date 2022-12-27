import React, {FC} from "react";
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import FocusedObject from "../types/FocusedObject";
import Star from "../../domain/universe/object/Star";
import CoordinateStar from "../widget/CoordinateStar";

type Props = {
    star: Star;
    focus: (focusedObject: FocusedObject) => void;
}

const DetailPageStar: FC<Props> = ({ star, focus }: Props) =>
    <Card>
        <CardContent>
            <h2>{star.getName()}</h2>
            <Typography color="text.secondary" gutterBottom>
                <CoordinateStar star={star} focus={focus} />
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
    </Card>

export default DetailPageStar;
