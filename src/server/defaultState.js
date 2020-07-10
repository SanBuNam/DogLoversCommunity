export const defaultState = {
  users: [
    {
      id: "U1",
      name: "David",
    },
  ],
  groups: [
    {
      name: "test Group1",
      id: "G1",
      owner: "U1",
    },
    {
      name: "test Group2",
      id: "G2",
      owner: "U1",
    },
    {
      name: "test Group3",
      id: "G3",
      owner: "U1",
    },
  ],
  tasks: [
    {
      name: "T1 G1 U1 test data",
      id: "T1",
      group: "G1",
      owner: "U1",
      isComplete: false,
    },
    {
      name: "T2 G1 U1 test data",
      id: "T2",
      group: "G1",
      owner: "U1",
      isComplete: true,
    },
    {
      name: "T4 G2 U1 test data",
      id: "T4",
      group: "G2",
      owner: "U1",
      isComplete: true,
    },
    {
      name: "T5 G3 U1 test data",
      id: "T5",
      group: "G3",
      owner: "U1",
      isComplete: false,
    },
  ],
  comments: [
    {
      owner: "U1",
      id: "C1",
      task: "T1",
      content: "U1 C1 T1 test data",
    },
  ],
};
