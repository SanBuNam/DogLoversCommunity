export const defaultState = {
  users: [
    {
      id: "U1",
      name: "David",
    },
  ],
  group: [
    {
      name: "To Do",
      id: "G1",
      owner: "U1",
    },
  ],
  tasks: [
    {
      name: "Dog lover site testing",
      id: "T1",
      group: "G1",
      owner: "U1",
      isComplete: false,
    },
  ],
  comments: [
    {
      owner: "U1",
      id: "C1",
      task: "T1",
      content: "I love dog testing",
    },
  ],
};
