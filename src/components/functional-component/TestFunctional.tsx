import React, { useEffect, useState } from "react";

function TestFunctional() {
  const [data, setData] = useState<any>([]);

  console.log(data);
  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch("http://jsonplaceholder.typicode.com/posts");
      const postData = await response.json();

      setData(postData);
    };
    fetchPost();
  }, []);
  useEffect(() => {
    if (data.length) {
      console.log({ data: data });
    }
  }, [data]);
  return <div>TestFunctional</div>;
}

export default TestFunctional;
