import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import GlobalStata from "./Components/GlobalStats";
import Graph1 from "./Components/Graph1";
import Graph2 from "./Components/Graph2";
import Graph3 from "./Components/Graph3";
import { Grid } from "@material-ui/core";

function App() {
  const [data, setData] = useState();
  const [isFetching, setisFetching] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://disease.sh/v3/covid-19/all");
      const api = await response.json();
      setData(api);
      setisFetching(true);
    }
    fetchData();
  }, []);

  if (isFetching) {
    return (
      <>
        <Header />
        <Grid container>
          <Grid item xs={3}>
            <GlobalStata value={data} />
          </Grid>
          <Grid item xs={4}>
            <Graph3 value={data} />
          </Grid>
          <Grid xs={5}>
            <Grid item xs={6}>
              <Graph1 value={data} />
            </Grid>
            <Grid item xs={6}>
              <Graph2 value={data} />
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  } else {
    return (
      <h5 style={{ textAlign: "center", marginTop: "30px" }}>
        Wait data is being fetched .........
      </h5>
    );
  }
}

export default App;
