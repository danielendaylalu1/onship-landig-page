// import React from "react";

import AppsNav from "./AppsNav";
import AppsOverView from "./AppsOverView";

function Apps() {
  return (
    <section className="apps" id="apps">
      <AppsNav />
      <AppsOverView
        header="Engage Micro App"
        order="left"
        bg="bg-blue-light"
        cardbg="card-blue-light"
      />
      {/* <AppsOverView
        header="Engage Micro Apps 2"
        order="right"
        bg="bg-blue-light"
        cardbg="card-blue-light"
      /> */}
      {/* <AppsOverView
        header="Connect Micro Apps 1"
        order="left"
        bg="bg-rose"
        cardbg="card-rose"
      /> */}
      <AppsOverView
        header="Connect Micro App"
        order="right"
        bg="bg-rose"
        cardbg="card-rose"
      />
      <AppsOverView
        header="Care Micro App"
        order="left"
        bg="bg-green-light"
        cardbg="card-green"
      />
      {/* <AppsOverView
        header="Care Micro Apps 2"
        order="right"
        bg="bg-green-light"
        cardbg="card-green"
      /> */}
      {/* <AppsOverView
        header="Entertain Micro Apps 1"
        order="left"
        bg="bg-purple-light"
        cardbg="card-purple"
      /> */}
      <AppsOverView
        header="Entertain Micro App"
        order="right"
        bg="bg-purple-light"
        cardbg="card-purple"
      />
      <AppsOverView
        header="Learn Micro App"
        order="left"
        bg="bg-yellow-light"
        cardbg="card-yellow"
      />
      {/* <AppsOverView
        header="Learn Micro Apps 2"
        order="right"
        bg="bg-yellow-light"
        cardbg="card-yellow"
      /> */}
    </section>
  );
}

export default Apps;
