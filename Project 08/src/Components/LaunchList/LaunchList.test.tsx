import React from "react";
import { render, cleanup } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import LaunchList, { Get_Launch_Info } from "./LaunchList";
import { MemoryRouter } from 'react-router';

const mocks = [
  {
    request: {
      query: Get_Launch_Info,
      variables: {
        offset: 0,
        limit: 20,
      },
    },
    result: {
      data: {
        launches: [
          {
            id: "13",
            launch_date_local: "2014-01-06T14:06:00-04:00",
            launch_success: true,
            mission_name: "Thaicom 6",
          },
        ],
      },
    },
  },
];

afterEach(cleanup);

it("should render component without error", () => {
  const { asFragment } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <LaunchList />
    </MockedProvider>
  );
  expect(asFragment).toMatchSnapshot();
});


it("should render launch list with mission name Thaicom", async () => {
  const { findByTestId } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <MemoryRouter initialEntries={['/']}>
      <LaunchList />
      </MemoryRouter>
    </MockedProvider>
  );
  const foo = await findByTestId('title')
  expect(foo).toHaveTextContent("LAUNCH: Thaicom 6")
});
