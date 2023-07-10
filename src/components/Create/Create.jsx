import React from "react"
import "./create.css"

const Create = () => {
  return (
    <>
      <section className='newPost'>
        <div className='container boxItems'>
          <div className='img'>
            <img src='https://images.pexels.com/photos/6424244/pexels-photo-6424244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='image' class='image-preview' />
          </div>
          <form>
            <div className='inputfile flexCenter'>
              <input type='file' accept='image/*' alt='img' />
            </div>
            <input className="title" type='text' placeholder='Title' />
            <input type='text' placeholder='Tag' />
            <input type='float' placeholder='Price in Flows' />
            <textarea name='Description' id='' cols='30' rows='3'></textarea>

            <button className='button'>Create Post</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Create