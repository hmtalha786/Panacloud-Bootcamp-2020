import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router";
import { CircularProgress } from "@material-ui/core";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Table from "react-bootstrap/Table";

interface DetailsI {
  id: string;
  mission_name: string;
  launch_date_local: string;
  launch_success: boolean;
  details: string;
  launch_site: {
    site_name: string;
    site_name_long: string;
  };
  rocket: {
    rocket_name: string;
    rocket_type: string;
  };
  links: {
    article_link: string;
    flickr_images: Array<String>;
    video_link: string;
  };
}

interface DetialsData {
  launches: DetailsI[];
}

interface DetailsVars {
  slug: string;
}

export const GET_LAUNCH_DETAILS = gql`
  query getLaunchDetails($slug: String!) {
    launches(find: { mission_name: $slug }) {
      id
      launch_success
      mission_name
      launch_date_local
      details
      launch_site {
        site_name
        site_name_long
      }
      rocket {
        rocket_name
        rocket_type
      }
      links {
        article_link
        flickr_images
        video_link
      }
    }
  }
`;

function Details() {
  const { mission } = useParams();
  const { loading, data, error } = useQuery<DetialsData, DetailsVars>(
    GET_LAUNCH_DETAILS,
    {
      variables: {
        slug: mission,
      },
    }
  );

  if (error) return <p>{error}</p>;
  if (!data && loading) return <CircularProgress />;

  return (
    <div data-testid="missionName">
      <Container style={{ margin: "3% auto" }}>
        <Row style={{ margin: "5% auto" }}>
          <Col>
            {data?.launches.length !== 0 ? (
              data?.launches.map((launch) => (
                <div key={launch.mission_name}>
                  <h3>{launch.mission_name}</h3>
                  <p style={{ margin: "0 0 3% 0" }}>
                    {launch.details} ...
                    <a href={launch.links.article_link}> Read More</a>
                  </p>
                  <p>
                    Rocket launch video link is
                    <a href={launch.links.video_link}> here</a>
                  </p>
                  <Table bordered hover variant="dark">
                    <tbody>
                      <tr>
                        <td>Status</td>
                        <td
                          style={{
                            backgroundColor: launch.launch_success
                              ? "green"
                              : "red",
                          }}
                        ></td>
                      </tr>
                      <tr>
                        <td>Mission</td>
                        <td>{launch.mission_name}</td>
                      </tr>
                      <tr>
                        <td>Site</td>
                        <td>{launch.launch_site.site_name}</td>
                      </tr>
                      <tr>
                        <td>Launch Site</td>
                        <td>{launch.launch_site.site_name_long}</td>
                      </tr>
                      <tr>
                        <td>Rocket Name</td>
                        <td>{launch.rocket.rocket_name}</td>
                      </tr>
                      <tr>
                        <td>Rocket Type</td>
                        <td>{launch.rocket.rocket_type}</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              ))
            ) : (
              <h3>No data availabe</h3>
            )}
          </Col>
          <Col style={{ margin: " auto" }} lg={4}>
            {data?.launches.map((img, i) => (
              <div key={i}>
                {img.links.flickr_images[0] ? (
                  <Image src={img.links.flickr_images[0].toString()} fluid />
                ) : (
                  <p>No images available</p>
                )}
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Details;
