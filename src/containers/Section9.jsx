import { useState } from "react";
import * as fcl from "@onflow/fcl";
import { NFTStorage } from "nft.storage";
import "../App.css";

export default function Section9() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [preview, setPreview] = useState('');
  const [ipfsCid, setIpfsCid] = useState('');

  return (
    <div className='section9'>
      <div className='inner-box'>
        <div className='heading-box'>
          <h1 className='form-heading'>Create Your Community</h1>
        </div>
        <div className="part-one">
          <div className='subpart-1'>
            <h1 className="one-heading">1. Configure</h1>
            <div className='subsubpart-one'>
              <div className="preview-section">
                <label className="label-section" htmlFor="upload-button">
                  {
                    preview ? <img src={preview} className="banner" alt="dummy" /> :
                      <h1>upload banner image</h1>
                  }
                </label>
                <input className="hidden" id="upload-button" type="file" onChange={(e) => uploadToIPFS(e.target.files[0])} />
              </div>
              <div className="com">
                <label className="label-com">Community Name</label>
                <input type="text" placeholder='CoffeeDAO' className='name-input' />
              </div>
            </div>
            <div className="desc">
              <label className="description-label"> Description</label>
              <textarea className='description-textarea' rows={8} placeholder='This is a community filled with Coffee enthusiasts' />
            </div>
          </div>
          <div className='preview-section'>
            <h1 className="text-white">2. Preview</h1>
            <div className='nope'>
              <div className="nope-two">
                {preview ? <img src={preview} className="image-under" alt="dummy" /> : <img src='' className="image-under-under" alt="dummy" />}
              </div>
              <div className='disp'>
                <h1 className='inner-name'>{name}</h1>
                <p className='inner-desc'>{description}</p>
                <p className='mem'>1 member</p>
              </div>
            </div>
            <h1 className="text-white">3. Finish</h1>
            <button className='final-button' >Create</button>
          </div>
        </div>
      </div>
    </div>
  )
}
