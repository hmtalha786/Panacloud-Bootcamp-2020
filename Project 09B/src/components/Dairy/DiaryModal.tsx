import React, { ReactElement, useEffect, useState, Fragment } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import DialogActions from "@material-ui/core/DialogActions";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../services/redux/reducer";
import { addDiary, updateDiary } from "../../services/redux/slices/diary";
import { showAlert } from "../../utils/alert";
import Loading from "../Loading";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import Button from "@material-ui/core/Button";
type dataEdit = {
  title: string;
  type: "private" | "public";
};

interface Props {
  btnTitle: string;
  title: string;
  id?: string;
  editInfo: dataEdit;
  mode: string;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function DiaryModal({
  btnTitle,
  title,
  id,
  editInfo,
  mode,
}: Props): ReactElement {
  const { user } = useSelector((state: RootState) => state.auth);
  const { loading } = useSelector((state: RootState) => state.diary);
  const dispatch = useDispatch();

  const [data, setData] = useState<{
    title: string;
    type: "private" | "public";
  }>({
    title: "",
    type: "public",
  });
  const [open, setOpen] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const submit = () => {
    mode === "add"
      ? user && user?.id && dispatch(addDiary({ ...data, userId: user?.id }))
      : dispatch(updateDiary({ ...data, id: id }));

    setOpen(false);
    showAlert("Saved!", "success");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setData(editInfo);
  }, [editInfo]);

  return (
    <Fragment>
      <Button
        style={{ color: " red", border: "1px solid red", borderRadius: "10px" }}
        size="small"
        onClick={handleClickOpen}
      >
        {btnTitle}
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            name="title"
            margin="dense"
            id="name"
            label="Title"
            type="text"
            fullWidth
            onChange={handleChange}
            value={data.title}
          />
          <Radio
            checked={data.type === "public"}
            onChange={handleChange}
            value="public"
            color="default"
            name="type"
            inputProps={{ "aria-label": "Public" }}
          />{" "}
          Public
          <Radio
            checked={data.type === "private"}
            onChange={handleChange}
            value="private"
            name="type"
            color="default"
            inputProps={{ "aria-label": "Private" }}
          />{" "}
          Private
        </DialogContent>
        <DialogActions>
          <Button style={{ color: " #005ce6" }} onClick={handleClose}>
            Close
          </Button>
          {loading ? (
            <Button style={{ color: " #005ce6" }}>
              <Loading type="spinner-border text-light" />
            </Button>
          ) : (
            <Button style={{ color: " #005ce6" }} onClick={submit}>
              Save
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}

export default DiaryModal;
