// micro-app-main/src/micro/apps.ts
// 此时我们还没有微应用，所以 apps 为空
const apps = [
    {
        name: "VueMicroApp",
        entry: "//localhost:10200",
        container: "#frame",
        activeRule: "/vue",
      },
      {
        name: "VueMicroApp2",
        entry: "//localhost:10201",
        container: "#frame",
        activeRule: "/vue2",
      },
];

export default apps;