import React, { ReactElement } from "react";
import { Entry } from "../../interface";
import EntryModal from "./EntryModal";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
interface Props {
  entry: Entry;
}
const useStyles = makeStyles({
  root: {
    width: 350,
    margin: 10,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
function EntryItem({ entry }: Props): ReactElement {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textPrimary"
            gutterBottom
            variant="h3"
          >
            {entry?.title}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {entry?.content}
          </Typography>
        </CardContent>
        <CardActions>
          <EntryModal
            btnTitle={"Edit Entry"}
            id={entry?.id}
            mode={"edit"}
            diary_id={entry?.diaryId}
            editInfo={{ title: entry?.title, content: entry?.content }}
          />
        </CardActions>
      </Card>
    </>
  );
}

export default EntryItem;
