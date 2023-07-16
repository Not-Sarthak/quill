import React, { forwardRef, useState } from "react";
import "../App.css";
// import img from "../../assets/images/b5.jpg"
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useAnimate,
} from "framer-motion";
import * as fcl from "@onflow/fcl";
import { getAllBlogs, getBlog } from "../flow/cadence_code_testnet";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap');
</style>;

const Section11 = () => {
  const { add, id } = useParams();
  const [blog, setBlog] = useState(null);
  const [type, setType] = useState("PRIVATE");
  useEffect(() => {
    getPublicBlog();
  }, []);
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();
  async function getPublicBlog() {
    fcl.config.put("0xBlogger", add);
    const response = await fcl.query({
      cadence: getAllBlogs,
      args: (arg, t) => [],
    });
    const blogsArray = Object.values(response);
    for (let i in blogsArray) {
      if (blogsArray[i].id === id) {
        setBlog(blogsArray[i]);
        setType(blogsArray[i].type);
        break;
      }
    }
  }
  async function getPrivateBlog() {
    const signData = await signMessage();
    console.log(signData);
    fcl.config.put("0xBlogger", add);
    const response = await fcl.query({
      cadence: getBlog,
      args: (arg, t) => [
        arg(id, t.UInt32),
        arg(signData[0], t.Address),
        arg(signData[1], t.String),
        arg(signData[2], t.String),
        arg(signData[3], t.Int),
      ],
    });
    setBlog(response);
    blog.body = response.body;
    setType("PUBLIC");
    console.log(blog);
  }

  const signMessage = async () => {
    // console.log("Signing");
    fcl.config.put("0xBlogger", add);
    const USER_DOMAIN_TAG =
      "464c4f572d56302e302d75736572000000000000000000000000000000000000";
    const timestamp = new Date().getTime() / 1000;
    const MSG = toHex(timestamp.toString());
    console.log("USER_DOMAIN_TAG", USER_DOMAIN_TAG);
    console.log("MSG", MSG);
    const msgHex = USER_DOMAIN_TAG + MSG;
    try {
      console.log("signing message");
      console.log(msgHex);
      const signature = await fcl.currentUser.signUserMessage(msgHex);
      return [
        signature[0].addr,
        msgHex,
        signature[0].signature,
        signature[0].keyId,
      ];
    } catch (error) {
      console.log(error);
    }
  };

  function toHex(str) {
    let hexString = "";
    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i);
      const hex = charCode.toString(16).padStart(2, "0");
      hexString += hex;
    }
    return hexString;
  }
  return (
    <div className="section11">
      {blog ? (
        <section className="singlePage" style={{ padding: "7rem" }}>
          <div
            className="container"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              border: "1px solid #42838e",
              borderStyle: "groove",
              borderRadius: "30px",
              borderTop: "0",
              borderRight: "0",
              borderLeft: "0",
            }}
          >
            <div className="img-container">
              <img
                src={`https://nftstorage.link/ipfs/${blog.bannerImg}`}
                alt=""
                style={{
                  height: 480,
                  width: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
            </div>
            <div className="blog-heading-details">
              <b>
                <h1
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontFamily: "Merriweather",
                    color: "#64CCC5",
                    fontSize: 60,
                  }}
                >
                  {blog.title}
                </h1>
              </b>
              <h3
                style={{
                  fontFamily: "Merriweather",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {blog.description}
              </h3>
            </div>
            <hr
              style={{
                width: "60%",
                height: "1px",
                background: "#6de5e5",
                border: "none",
              }}
            />
            {type == "PUBLIC" ? (
              <main
                className=""
                style={{
                  position: "relative",
                  top: "10px",
                  left: "20px",
                  maxWidth: "1200px",
                  margin: "0 auto",
                  padding: "20px",
                }}
              >
                {blog.body};
              </main>
            ) : (
              <button onClick={getPrivateBlog}>Sign Message</button>
            )}
          </div>
        </section>
      ) : null}
    </div>
  );
};

export default Section11;

// const sentence = `There's something magical about rain—the way it transforms the mundane into a symphony of sights, sounds, and scents. As droplets cascade from the heavens, they paint the world in shimmering hues. There's something magical about rain—the way it transforms the mundane into a symphony of sights, sounds, and scents. As droplets cascade from the heavens, they paint the world in shimmering hues.There's something magical about rain—the way it transforms the mundane into a symphony of sights, sounds, and scents. As droplets cascade from the heavens, they paint the world in shimmering hues.There's something magical about rain—the way it transforms the mundane into a symphony of sights, sounds, and scents. As droplets cascade from the heavens, they paint the world in shimmering hues.There's something magical about rain—the way it transforms the mundane into a symphony of sights, sounds, and scents. As droplets cascade from the heavens, they paint the world in shimmering hues.There's something magical about rain—the way it transforms the mundane into a symphony of sights, sounds, and scents. As droplets cascade from the heavens, they paint the world in shimmering hues.There's something magical about rain—the way it transforms the mundane into a symphony of sights, sounds, and scents. As droplets cascade from the heavens, they paint the world in shimmering hues.`;

// const wordsArray = sentence.split(" ");

// useEffect(() => {
//   if (blogs) {
//     setBlogs(blogs)
//   }
//   let blogs = blog.find((blogs) => blogs.id === parseInt(id))
// }, [])

// const { scrollYProgress } = useScroll();
// const [scope, animate] = useAnimate();
// let coveredIndex = 0;

// useMotionValueEvent(scrollYProgress, 'change', (latest) => {
//   const coveredWordNumber = Math.floor(latest * wordsArray.length);
//   if (coveredWordNumber > wordsArray.length) {
//     return;
//   }
//   for(; coveredIndex < coveredWordNumber; coveredIndex++) {
//     animate(scope.current.children[coveredIndex], { opacity: 1 });
//   }
// });

// const renderWords = () => {
//   return wordsArray.map((word, i) => {
//     return (
//       <motion.span style={{opacity: 0.2}} className="n" key={i}>
//         {word}{' '}
//       </motion.span>
//     )
//   })
// }

// <motion.p
//               className="hm"
//               ref={scope}
//               style={{ color: "white", letterSpacing: "0.25em", lineHeight: 1.2, justifyContent:"space-between"}}
//             >
//               {renderWords()}
//             </motion.p>
