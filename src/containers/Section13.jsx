import React, { useEffect, useState } from "react";
import Individual from "../components/Cards/Individual.jsx";
import * as fcl from "@onflow/fcl";
import { getAllBlogs } from "../flow/cadence_code_emulator";
import { useParams } from "react-router-dom"

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
            args: (arg, t) => []
        });
        setData(Object.values(response));
    }

    return (
        <div className="trip">
            {/* <h1>Free Blogs</h1>
      <p>Discover and gain insights about your topic of interest</p> */}
            <div className="blog">
                {
                    blogsArray.map((blog) => {
                        return (
                            <Individual
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
