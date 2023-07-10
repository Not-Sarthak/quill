import React from 'react'
import '../App.css'

const Section10 = () => {
  return (
    <section className='newPost'>
      <div className='container boxItems'>  
        <form>
          <div className='inputfile flexCenter'>
            <label>Upload Image</label>
            <input type='file' accept='image/*' alt='img' />
          </div>
            <label>Title</label>
            <input type='text' placeholder='Title' />
            <label>Description</label>
            <textarea name='description' id='' cols='30' rows='2' placeholder='Description'></textarea>
            <label>Author's Name</label>
            <input type='text' placeholder='Name' />
            <label>Blog</label>
            <textarea name='blog' id='' cols='30' rows='10' placeholder='Blog'></textarea>
            <button className='button'>Create Post</button>
            <select id="mounth">
              <option value="hide">-- Type --</option>
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
        </form>
      </div>
    </section>
  )
}

export default Section10