import React from 'react'
import '../App.css'

const Section10 = () => {
  return (
    <div className='section10'>
    <section className='newPost'>
      <div className='container boxItems'>  
      <h1>Add Blog!</h1>
        <form>
          <div className='inputfile flexCenter'>
            <label>Upload Image</label>
            <input type='file' accept='image/*' alt='img' />
          </div>
          <br/>
            <label>Title</label>
            <input type='text' placeholder='Title' />
            <br/>
            <label>Description</label>
            <textarea name='description' id='' cols='30' rows='2' placeholder='Description'></textarea>
            <br/>
            <label>Author's Name</label>
            <input type='text' placeholder='Name' />
            <br/>
            <label>Blog</label>
            <textarea name='blog' id='' placeholder='Blog'></textarea>
            <br/>
            <button className='button'>Create Post</button>
            <select id="mounth">
              <option value="hide">-- Type --</option>
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
            <br/>
        </form>
      </div>
    </section>
    </div>
  )
}

export default Section10