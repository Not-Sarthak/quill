import { useState } from "react";
import * as fcl from "@onflow/fcl";
import { NFTStorage } from "nft.storage";

export default function Submit() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [preview, setPreview] = useState('');
  const [ipfsCid, setIpfsCid] = useState('');

  const NFT_STORAGE_TOKEN = process.env.NEXT_PUBLIC_NFTSTORAGE_KEY;
  const client = new NFTStorage({ token: NFT_STORAGE_TOKEN });

  async function uploadToIPFS(file) {
    let prev = URL.createObjectURL(file)
    setPreview(prev)
    const cid = await client.storeBlob(file);
    setIpfsCid(cid);
  }

  async function createGroup() {
    console.log(ipfsCid)
    const transactionId = await fcl.mutate({
      cadence: createGroupTransaction,
      args: (arg, t) => [
        arg(name, t.String),
        arg(description, t.String),
        arg(ipfsCid, t.String)
      ],
      proposer: fcl.authz,
      payer: fcl.authz,
      authorizations: [fcl.authz],
      limit: 999
    });

    console.log('Transaction Id', transactionId);
    Router.push("/")
  }
const Section9 = () => {
  return (
    <div className='section9'>
      <div className='inner-box'>
        <div className='heading-box'>
          <h1 className='form-heading'>Create Your Community</h1>
        </div>
        <div className="part-1">
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
                {preview ? <img src={preview} className="rounded-t-sm" alt="dummy" /> : <img src='/placeholder.jpg' className="rounded-lg" alt="dummy" />}
              </div>
              <div className=' px-3 py-2 text-gray-300 mt-3 static'>
                <h1 className='font-bold text-lg'>{name}</h1>
                <p className='text-md pt-3 line-clamp-2 text-gray-400 mb-12'>{description}</p>
                <p className='text-center text-sm mt-5 mb-1 mr-2 text-green-500 rounded-full px-3 py-2 bg-gray-800 max-w-max absolute bottom-0 right-0'>1 member</p>
              </div>
            </div>
            <h1 className="text-white">3. Finish</h1>
            <button disabled={ipfsCid === '' || name === '' || description === ''} className='rounded-lg py-3 px-7 text-lg font-semibold mt-5 bg-[#2bbc9f] w-full' onClick={createGroup} >{preview === '' ? 'Configure Your Group' : ipfsCid === '' ? 'Uploading image...' : 'Create Community'}</button>
          </div>

        </div>
      </div>
    </div>
  )
}
}