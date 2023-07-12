import React, { forwardRef, useState } from "react"
import "../App.css"
// import img from "../../assets/images/b5.jpg"
import { BsPencilSquare } from "react-icons/bs"
import { AiOutlineDelete } from "react-icons/ai"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { blog } from "../utils/data"
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useAnimate,
} from 'framer-motion';

<style>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap');
</style>

const sentence = `There's something magical about rain—the way it transforms the mundane into a symphony of sights, sounds, and scents. As droplets cascade from the heavens, they paint the world in shimmering hues. There's something magical about rain—the way it transforms the mundane into a symphony of sights, sounds, and scents. As droplets cascade from the heavens, they paint the world in shimmering hues.There's something magical about rain—the way it transforms the mundane into a symphony of sights, sounds, and scents. As droplets cascade from the heavens, they paint the world in shimmering hues.There's something magical about rain—the way it transforms the mundane into a symphony of sights, sounds, and scents. As droplets cascade from the heavens, they paint the world in shimmering hues.There's something magical about rain—the way it transforms the mundane into a symphony of sights, sounds, and scents. As droplets cascade from the heavens, they paint the world in shimmering hues.There's something magical about rain—the way it transforms the mundane into a symphony of sights, sounds, and scents. As droplets cascade from the heavens, they paint the world in shimmering hues.There's something magical about rain—the way it transforms the mundane into a symphony of sights, sounds, and scents. As droplets cascade from the heavens, they paint the world in shimmering hues.`;

const wordsArray = sentence.split(" ");

const Section11 = () =>{

  const { scrollYProgress } = useScroll();
  const [scope, animate] = useAnimate();
  let coveredIndex = 0;

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const coveredWordNumber = Math.floor(latest * wordsArray.length);
    if (coveredWordNumber > wordsArray.length) {
      return;
    }
    for(; coveredIndex < coveredWordNumber; coveredIndex++) {
      animate(scope.current.children[coveredIndex], { opacity: 1 });
    }
  });

  const renderWords = () => {
    return wordsArray.map((word, i) => {
      return (
        <motion.span style={{opacity: 0.2}} className="n" key={i}>
          {word}{' '}
        </motion.span>
      )
    })
  }
  
  const { id } = useParams()
  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    let blogs = blog.find((blogs) => blogs.id === parseInt(id))
    if (blogs) {
      setBlogs(blogs)
    }
  }, [])

  return (
    <div className="section11">
      {blogs ? (
          <section className='singlePage' style={{padding: "7rem"}}>
          <div className='container' style={{display: "flex", alignItems:"center", justifyContent:"center", flexDirection: "column", border: "1px solid #42838e", borderStyle: "groove", borderRadius: "30px", borderTop: "0", borderRight: "0", borderLeft: "0" }}>
            <div className='img-container'>
              <img src={blogs.cover} alt='' style={{height: 480, width: 700, display:"flex", alignItems:"center", justifyContent:"center",}}/>
            </div>
            <div className="blog-heading-details">
              <b><h1  style={{display: "flex", justifyContent:"space-between", fontFamily:"Merriweather", color: "#64CCC5", fontSize:60}}>{blogs.title}</h1></b>
              <h3 style={{ fontFamily:"Merriweather", color: "#468B97", display: "flex", justifyContent: "center", alignItems: "center"}}>{blogs.desc}</h3>
            </div>
            <hr style={{width: "60%", height: "1px", background: "#6de5e5", border: "none",}}/>
            <main className="" style={{position: "relative", top: "10px", left: "20px", maxWidth: "1200px", margin: "0 auto", padding: "20px",}}>
              <motion.p
                className="hm"
                ref={scope}
                style={{ color: "white", letterSpacing: "0.25em", lineHeight: 1.2, justifyContent:"space-between"}}
              >
                {renderWords()}
              </motion.p>
            </main>

          </div>
          </section>
      ): null}
    </div>
  )
}

export default Section11
