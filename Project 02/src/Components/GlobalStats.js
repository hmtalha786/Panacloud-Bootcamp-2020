import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, Chip, ListItem } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 200,
    margin: theme.spacing(1, 0, 1, 3),
  },
  title: {
    color: "#8e2a2c",
    fontWeight: "500",
  },
  chip: {
    margin: theme.spacing(0.6, 0, 0.6, 1),
  },
}));

export default function GlobalStats({ value }) {
  const classes = useStyles();
  // console.log(Object.keys(value));
  // console.log(Object.values(value));
  return (
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      <ListItem className={classes.title}>Worldwide Cases</ListItem>
      <div>
        <Chip className={classes.chip} label={`Tested : ${value.tests}`} />
      </div>
      <div>
        <Chip className={classes.chip} label={`Cases : ${value.cases}`} />
      </div>
      <div>
        <Chip
          className={classes.chip}
          label={`Recovered : ${value.recovered}`}
        />
      </div>
      <div>
        <Chip className={classes.chip} label={`Active : ${value.active}`} />
      </div>
      <div>
        <Chip className={classes.chip} label={`Critical : ${value.critical}`} />
      </div>
      <div>
        <Chip className={classes.chip} label={`Deaths : ${value.deaths}`} />
      </div>
      <br />
      <ListItem className={classes.title}>Today's Statistics</ListItem>
      <div>
        <Chip className={classes.chip} label={`Cases : ${value.todayCases}`} />
      </div>
      <div>
        <Chip
          className={classes.chip}
          label={`Recovered : ${value.todayRecovered}`}
        />
      </div>
      <div>
        <Chip
          className={classes.chip}
          label={`Deaths : ${value.todayDeaths}`}
        />
      </div>
    </List>
  );
}
