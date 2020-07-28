<<<<<<< HEAD
import { addNewTask, updateTask } from "./server";

(async function myFunc() {
  await addNewTask({
    name: "My task",
    id: "123456"
  });

  await updateTask({
    id: "123456",
    name: "My task - UPDATED!!!"
  });
})();
=======
import { addNewTask } from "./server";

addNewTask({
  name: "My task",
  id: "12345",
});
>>>>>>> 02a10417fbadba3e5acf9da3e054aa63448f8ccc
