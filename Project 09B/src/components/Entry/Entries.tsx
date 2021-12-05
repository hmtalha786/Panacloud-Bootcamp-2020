import React, { ReactElement, Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../../App.css";
import { RootState } from "../../services/redux/reducer";
import EntryModal from "./EntryModal";
import { Diary } from "../../interface";
import { getEntries, clear_entries } from "../../services/redux/slices/entry";
import EntryItem from ".";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { withStyles } from "@material-ui/core/styles";

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
  },
})(Typography);

interface Props {}
// eslint-disable-next-line
function Entries({}: Props): ReactElement {
  const { diaries } = useSelector((state: RootState) => state.diary);
  const { entries } = useSelector((state: RootState) => state.entry);
  const [diary, setDiary] = useState<Diary | null>();
  const [notfoundStatus, setStatus] = useState(false);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(clear_entries());
    const filterDiary = diaries.filter((diary) => diary.id === id);
    filterDiary ? setDiary(filterDiary[0]) : setStatus(true);
    filterDiary &&
      filterDiary[0]?.id &&
      dispatch(getEntries(filterDiary[0]?.id));
    // eslint-disable-next-line
  }, [diary]);

  if (!diary && notfoundStatus) return <div>Not Found</div>;
  else if (!diary && !notfoundStatus) return <div>Loading ...</div>;

  return (
    <Fragment>
      <section className="body__area">
        <div className="button_area">
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" to="/">
              Diaries
            </Link>
            <WhiteTextTypography color="textPrimary">
              Entries
            </WhiteTextTypography>
          </Breadcrumbs>
          {diary && (
            <EntryModal
              btnTitle={"Add Entry"}
              mode={"add"}
              diary_id={diary.id}
              id={""}
              editInfo={{ title: "", content: "" }}
            />
          )}
        </div>
        <div className="entryCards">
          {entries.length > 0 &&
            entries.map((entry) => <EntryItem entry={entry} key={entry?.id} />)}
        </div>
      </section>
    </Fragment>
  );
}

export default Entries;
