import React from "react";
import { render, cleanup } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import Details, { GET_LAUNCH_DETAILS } from "./Details";

const mocks = [
  {
    request: {
      query: GET_LAUNCH_DETAILS,
      variables: {
        slug: undefined, //in order to EXACTLY match the query in the DETAILS component because initailly mission is undefined.
      },
    },
    result: {
      data: {
        launches: [
          {
            id: "13",
            mission_name: "Thaicom 6",
            launch_success: true,
            launch_date_local: "2014-01-06T14:06:00-04:00",
            details:
              "Second GTO launch for Falcon 9. The USAF evaluated launch data from this flight as part of a separate certification program for SpaceX to qualify to fly U.S. military payloads and found that the Thaicom 6 launch had unacceptable fuel reserves at engine cutoff of the stage 2 second burnoff",
            launch_site: {
              site_name_long:
                "Cape Canaveral Air Force Station Space Launch Complex 40",
            },
            rocket: {
              rocket_name: "Falcon 9",
              rocket_type: "v1.1",
            },
            links: {
              article_link:
                "http://spacenews.com/38959spacex-delivers-thaicom-6-satellite-to-orbit/",
              flickr_images: [
                "https://farm9.staticflickr.com/8617/16789019815_f99a165dc5_o.jpg",
                "https://farm8.staticflickr.com/7619/16763151866_35a0a4d8e1_o.jpg",
                "https://farm9.staticflickr.com/8569/16169086873_4d8829832e_o.png",
              ],
            },
          },
        ],
      },
    },
  },
];

afterEach(cleanup);

it("should render details component", () => {
  const { asFragment } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Details />
    </MockedProvider>
  );
  expect(asFragment).toMatchSnapshot();
});

it("should render launch details", async () => {
  const { findByTestId } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Details />
    </MockedProvider>
  );
  const foo = await findByTestId('missionName')
  expect(foo).toHaveTextContent("Thaicom 6");
});
