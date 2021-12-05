import React, { ReactElement, Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../services/redux/reducer";
import { addEntry, updateEntry } from "../../services/redux/slices/entry";
import { showAlert } from "../../utils/alert";
import Loading from "../Loading";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

interface Props {
  btnTitle: string;
  mode: string;
  diary_id?: string;
  id?: string;
  editInfo: {
    title: string;
    content: string;
  };
}

function EntryModal({
  btnTitle,
  mode,
  diary_id,
  id,
  editInfo,
}: Props): ReactElement {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.entry);
  const [open, setOpen] = useState(false);
  const [entryData, setEntryData] = useState({
    title: "",
    content: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEntryData({
      ...entryData,
      title: event.target.value,
    });
  };

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setEntryData({
      ...entryData,
      content: event.target.value,
    });
  };

  const toggleDrawer = (open: boolean) => {
    setOpen(open);
  };

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    mode === "add"
      ? dispatch(addEntry({ ...entryData, diaryId: diary_id }))
      : dispatch(updateEntry({ ...entryData, id: id }));

    setOpen(false);
    showAlert("Saved!", "success");
  };

  useEffect(() => {
    setEntryData(editInfo);
  }, [editInfo]);
  const handleClose = () => {
    toggleDrawer(false);
  };
  return (
    <Fragment>
      <Button style={{ color: " #005ce6" }} onClick={() => toggleDrawer(true)}>
        Edit Entry
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Entry</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="text"
            fullWidth
            onChange={handleInputChange}
            value={entryData.title}
          />
          <TextField
            id="standard-multiline-flexible"
            label="What's your Opinion?"
            multiline
            rowsMax={4}
            onChange={handleTextAreaChange}
            value={entryData.content}
          />
        </DialogContent>
        <DialogActions>
          <Button
            style={{ color: " #005ce6" }}
            size="small"
            onClick={handleClose}
          >
            Cancel
          </Button>
          {loading ? (
            <Button>
              <Loading type="spinner-border text-light" />
            </Button>
          ) : (
            <Button
              style={{ color: " #005ce6" }}
              size="small"
              onClick={handleSubmit}
            >
              Save
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}

export default EntryModal;
