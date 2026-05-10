// src/utils/guidePrefetch.js
// Prefetch guide chunks so they load instantly when clicked

const guideChunks = {
  "/guides/jstoreact": () => import("../Exercises/JsToReactGuide"),
  "/guides/reactintro": () => import("../Exercises/ReactIntroGuide"),
  "/guides/componentsprops": () => import("../Exercises/ComponentsPropsGuide"),
  "/guides/reacttodo": () => import("../Exercises/ReactTodoApp"),
  "/guides/usestate": () => import("../Exercises/UsestateGuide"),
  "/guides/useeffect": () => import("../Exercises/UseEffectGuide"),
  "/guides/stateeffect": () => import("../Exercises/StateEffetcGuide"),
  "/guides/reactforms": () => import("../Exercises/ReactForms"),
  "/guides/usecontext": () => import("../Exercises/UseContextGuide"),
  "/guides/reacttodo2": () => import("../Exercises/ReactTodoApp2"),
  "/guides/usereducer": () => import("../Exercises/UseReducerGuide"),
  "/guides/customhooks": () => import("../Exercises/CustomHooksGuide"),
  "/guides/reactrouter": () => import("../Exercises/ReactRouterGuide"),
  "/guides/datafetching": () => import("../Exercises/DataFetchingGuide"),
  "/guides/reactoptimisation": () =>
    import("../Exercises/ReactPerformanceGuide"),
  "/guides/reactstatemanagement": () =>
    import("../Exercises/StateManagemenGuide"),
  "/guides/mernstack": () => import("../Exercises/MernIntegrationGuide"),
};

// Prefetch a single guide (call on hover)
export function prefetchGuide(path) {
  if (guideChunks[path]) {
    guideChunks[path]();
  }
}

// Prefetch ALL guides in the background (call when /guides page mounts)
export function prefetchAllGuides() {
  Object.values(guideChunks).forEach((load) => load());
}