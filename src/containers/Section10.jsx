import React from 'react'
import '../App.css'
import Add from '../components/Buttons/Add'

const Section10 = () => {
  return (
    <div className='section10'>
    <section className='newPost'>
      <div className='container boxItems'>  
      <h1 className='add-blog'>Share your thoughts and let the world know it</h1>
        <form className='form-data'>
          <div className='inputfile flexCenter'>
            <label>Upload Image</label>
            <input type='file' accept='image/*' alt='img' className='file-input'/>
          </div>
          <br/>
            <label>Title</label>
            <input type='text' className='title-input' placeholder='Title' />
            <br/>
            <label>Description</label>
            <textarea name='description' id='' cols='30' rows='2' className='description-content' placeholder='Description'></textarea>
            <br/>
            <label>Author's Name</label>
            <input type='text' className='author-content' placeholder='Name' />
            <br/>
            <label>Blog</label>
            <textarea name='blog' id='blog-content' placeholder='Blog'></textarea>
            <br/>
            <select id="mounth">
              <option value="hide">-- Type --</option>
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
            <br/>
            <Add />
        </form>
      </div>
    </section>
    </div>
  )
}

export default Section10