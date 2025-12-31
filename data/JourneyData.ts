export interface JourneyStep {
  id: number;
  title: string;
  description: string;
}

export const journeyData: JourneyStep[] = [
  {
    id: 1,
    title: "Initial Project Discussion",
    description:
      "Understand client requirements clearly by discussing the project scope, goals, and expectations. Identify key deliverables and timelines to align on a successful plan.",
  },
  {
    id: 2,
    title: "Planning & Task Breakdown",
    description:
      "Break the project into smaller tasks and milestones. Assign responsibilities, estimate timelines, and prioritize tasks for efficient workflow and clarity.",
  },
  {
    id: 3,
    title: "Execution & Development",
    description:
      "Start working on tasks systematically, following best coding practices, quality standards, and keeping the project organized to ensure smooth progress.",
  },
  {
    id: 4,
    title: "On-Time Delivery & Review",
    description:
      "Deliver completed tasks or milestones on time. Review work internally before submission to catch errors and maintain high quality.",
  },
  {
    id: 5,
    title: "Client Feedback & Iteration",
    description:
      "Submit the project or tasks for client review. Gather feedback, implement necessary improvements, and ensure client satisfaction for positive reviews.",
  },
];
