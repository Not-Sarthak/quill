import React, { useEffect, useState } from "react";
import Individual from "../components/Cards/Individual.jsx";
import * as fcl from "@onflow/fcl";
import { getAllBlogs } from "../flow/cadence_code_testnet.js";
import { useParams } from "react-router-dom";

const Section13 = () => {
  useEffect(() => {
    getBlogs();
  }, []);
  const [blogsArray, setData] = useState([]);
  const { id } = useParams();
  async function getBlogs() {
    fcl.config.put("0xBlogger", id);

    const response = await fcl.query({
      cadence: getAllBlogs,
      args: (arg, t) => [],
    });
    // console.log(response);
    setData(Object.values(response));
  }
  // console.log(blogsArray);
  return (
    <div className="trip">
      <div className="blog">
        {blogsArray.map((blog) => {
          return (
            <Individual
              id={blog.id}
              add={id}
              key={blog.id}
              type={blog.type}
              image={blog.bannerImg}
              heading={blog.title}
              text={blog.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Section13;
