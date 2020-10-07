import React from "react";
import PopularProjects from "./components/PopularProjects";
import TaskerArea from "./components/TaskerArea";
import Others from "./components/Others";
import Header from "./components/Header";
import Info from "./components/Info";

const Home = () => {
  return (
    <div>
      <Header />
      <PopularProjects />
      <Others />
      <Info />
      <TaskerArea />
    </div>
  );
};

export default Home;