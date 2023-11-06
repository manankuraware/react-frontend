import React, { useEffect, useState } from "react";

function App() {
  // const [resourceType, setResourceType] = useState("posts");

  // useEffect(() => {
  //   console.log('resource type changed');
  // },[resourceType]);

  // on mount no change on rerender
  // useEffect(() => {
  //   console.log('no rerender onMount');
  // },[]);

  // on clicking resourcetype we can get data of that like here
  // const [items, setItems] = useState([]);
  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  //     .then((response) => response.json())
  //     .then((json) => setItems(json));
  // }, [resourceType]);

  const [windowWidth, setwindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setwindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  },[]);
  return (
    <>
      {/* <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })} */}

      {/* another use of useEffect  */}
      <div>{windowWidth}</div>
    </>
  );
}

export default App;
