import React, {FC} from "react";
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import Star from "../../domain/universe/object/Star";
import CoordinateStar from "../widget/CoordinateStar";
import PanelNavigation from "../types/PanelNavigation";

type Props = {
    navigation: PanelNavigation;
    star: Star;
}

const PanelDetailStar: FC<Props> = ({ navigation, star }: Props) =>
    <Card>
        <CardContent>
            <h2>{star.getName()}</h2>
            <Typography color="text.secondary" gutterBottom>
                coordinate: <CoordinateStar star={star} navigation={navigation} />
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
    </Card>

export default PanelDetailStar;
