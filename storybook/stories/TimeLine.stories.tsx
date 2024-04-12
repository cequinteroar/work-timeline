import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { TimeLine } from "../../package/src/timeLine";
import { TimeLineItem } from "../../package/src/timeLineItem";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof TimeLine> = {
  title: "TimeLine",
  component: TimeLine,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    data: { description: "data to render in the Timelin" },
  },
};

export default meta;
type Story = StoryObj<typeof TimeLine>;

const Template = (args) => {
  return (
    <>
      <TimeLine>
        <TimeLineItem year={2014} activity={"Exchange semester at Technische Universität Ilmenau"}></TimeLineItem>
        <TimeLineItem
          year={2015}
          activity={"Internship at Bosch Engineering GmbH - SW/HW development with ANSI C"}
        ></TimeLineItem>
        <TimeLineItem year={2016} activity={"Software developer at Software Colombia SAS"}></TimeLineItem>
        <TimeLineItem year={2014} activity={"Exchange semester at Technische Universität Ilmenau"}></TimeLineItem>
        <TimeLineItem year={2017} activity={"Graduated from National University of Colombia"}></TimeLineItem>
        <TimeLineItem year={2017} activity={"Enrollment at TU Ilmenau - Master in media technology"}></TimeLineItem>
        <TimeLineItem
          year={2018}
          activity={"Research assistan at TU Ilmenau department of Usability Engineering"}
        ></TimeLineItem>
        <TimeLineItem
          year={2019}
          current={true}
          activity={"Masterand at Magna Telemotive GmbH - Design, Usability and development of a resource tracking app"}
        ></TimeLineItem>
        <TimeLineItem
          year={2020}
          current={true}
          activity={"Graduation at Technische Universität Ilmenau - M.Sc in Media technology"}
        ></TimeLineItem>
        <TimeLineItem year={2020} current={true} activity={"Software Developer - Reactjs"}></TimeLineItem>
      </TimeLine>
    </>
  );
};

export const TimeLineWithChildren: Story = Template.bind({});
