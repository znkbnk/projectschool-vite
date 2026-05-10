// src/data/tasks/index.js
export const loadTasksForLesson = async (lessonType) => {
  switch (lessonType) {
    case "ReactTasks":
      return (await import("./ReactTasksData")).ReactTasks;
    case "React":
      return (await import("./ReactData")).ReactLessons;
    case "Live":
      return (await import("./LiveData")).LiveLessonsData;

    case "Workshop":
      return (await import("./WorkshopData")).Workshop;
    case "Ecommerce":
      return (await import("./EcommerceData")).Ecommerce;
    default:
      return [];
  }
};
