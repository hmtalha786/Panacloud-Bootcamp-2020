import React, { ReactElement, useState, useEffect } from "react";
import DiaryModal from "./DiaryModal";
import { useSelector } from "react-redux";
import { RootState } from "../../services/redux/reducer";
import { Link } from "react-router-dom";
import http from "../../services/axios/api";
import { Entry } from "../../interface";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
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
interface Props {
  title: string;
  type: "private" | "public";
  id?: string;
}

type dataEdit = {
  title: string;
  type: "private" | "public";
};

const Diary = ({ title, type, id }: Props): ReactElement => {
  const classes = useStyles();
  const { diaries } = useSelector((state: RootState) => state.diary);

  const [onEdit, setEdit] = useState<dataEdit>({ title: "", type: "public" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    const filterDiary = diaries.filter((diary) => diary.id === id);
    filterDiary &&
      setEdit({ title: filterDiary[0].title, type: filterDiary[0].type });
    http
      .get<null, { entries: Entry[] }>("/api/entries/" + id)
      .then(({ entries }) => {
        setCount(entries.length);
      });
    // eslint-disable-next-line
  }, [diaries]);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {type}
        </Typography>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {count} Entries
        </Typography>
      </CardContent>
      <CardActions>
        <DiaryModal
          btnTitle={"Edit"}
          title={"Edit Diary"}
          mode={"edit"}
          id={id}
          editInfo={onEdit}
        />
        <Link to={`/${id}/entries`}>
          <Button style={{ color: " #005ce6" }} size="small">
            Entries
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Diary;
