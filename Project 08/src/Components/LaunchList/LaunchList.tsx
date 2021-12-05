import React from "react";
import { useQuery, gql } from "@apollo/client";
import Loading from "../Loading/Loading";
import { Waypoint } from "react-waypoint";
import { Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import Card from "react-bootstrap/Card";
import "../../App.css";

interface LaunchListItems {
  id: string;
  launch_success: boolean;
  mission_name: string;
  launch_year: string;
  launch_site: { site_name: string };
  rocket: { rocket_name: string };
}

interface LaunchListData {
  launches: LaunchListItems[];
}

interface LaunchListVars {
  offset: number;
  limit: number;
}

export const Get_Launch_Info = gql`
  query launches($limit: Int!, $offset: Int!) {
    launches(limit: $limit, offset: $offset) {
      id
      launch_success
      mission_name
      launch_year
      launch_site {
        site_name
      }
      rocket {
        rocket_name
      }
    }
  }
`;

function LaunchList() {
  const { loading, data, fetchMore, networkStatus, error } = useQuery<
    LaunchListData,
    LaunchListVars
  >(Get_Launch_Info, {
    variables: {
      offset: 0,
      limit: 10,
    },
    fetchPolicy: "cache-first",
    notifyOnNetworkStatusChange: true,
  });

  if (error) return <p style={{ color: "#fff" }}>Error in loading data</p>;

  if (!data?.launches && loading) return <Loading />;

  return (
    <div className="container">
      <h1 style={{ margin: "5% 0 4% 2%" }}>SpaceX Launches</h1>
      <div className="row mx-auto">
        {data?.launches.map((launch, i) => (
          <div key={i} className="col-md-6">
            <Card
              style={{ margin: "3% 0", borderRight: "50 solid red" }}
              bg="dark"
              body
            >
              <h6 data-testid="title">
                Mission: {launch.mission_name}
                <div
                  style={{
                    width: "25px",
                    height: "25px",
                    borderRadius: "28px",
                    float: "right",
                    backgroundColor: launch.launch_success ? "green" : "red",
                  }}
                ></div>
              </h6>
              <h6>Rocket: {launch.rocket.rocket_name}</h6>
              <h6>Site: {launch.launch_site.site_name}</h6>
              <h6>
                Year: {launch.launch_year}
                <Link to={`${launch.mission_name}`}>
                  <button
                    type="button"
                    className={
                      launch.launch_success
                        ? `btn btn-outline-success float-right`
                        : `btn btn-outline-danger float-right`
                    }
                  >
                    Launch Details
                  </button>
                </Link>
              </h6>
            </Card>

            {i === data.launches.length - 3 && (
              <Waypoint
                onEnter={() =>
                  fetchMore({
                    variables: {
                      offset: data?.launches.length,
                    },
                    updateQuery: (prev: any, { fetchMoreResult }) => {
                      if (!fetchMoreResult) return prev;
                      return {
                        ...prev,
                        launches: [
                          ...prev.launches,
                          ...fetchMoreResult.launches,
                        ],
                      };
                    },
                  })
                }
              />
            )}
          </div>
        ))}
      </div>
      <div>
        <div style={{ margin: "10px auto", width: "20%" }}>
          {networkStatus === 3 && <CircularProgress />}
        </div>
      </div>
    </div>
  );
}

export default LaunchList;
