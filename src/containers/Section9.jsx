import { useState } from "react";
import * as fcl from "@onflow/fcl";
import { NFTStorage } from "nft.storage";
import "../App.css";
import { useAuth } from "../utils/AuthContext";
import {
  DeployContract,
  SetOwnerDetails,
  getContracts,
  getOwnerInfo,
  getAllBlogs,
  CreateBlog,
} from "../flow/cadence_code(emulator)";
import { v4 as uuidv4 } from "uuid";
import "../flow/config";

export default function Section9() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [preview, setPreview] = useState("");
  const [ipfsCid, setIpfsCid] = useState("");
  const [price, setPrice] = useState(0);
  const { user } = useAuth();
  const NFT_STORAGE_TOKEN = import.meta.env.VITE_PUBLIC_NFTSTORAGE_KEY;
  const client = new NFTStorage({ token: NFT_STORAGE_TOKEN });

  async function uploadToIPFS(file) {
    let prev = URL.createObjectURL(file);
    setPreview(prev);
    const cid = await client.storeBlob(file);
    setIpfsCid(cid);
  }

  async function createBlogger() {
    fcl.config.put("0xBlogger", user.addr);
    // const response = await fcl.query({
    //   cadence: getAllBlogs,
    //   args: () => [],
    // });
    // console.log(response);
    // const addBlogsId = await fcl.mutate({
    //   cadence: CreateBlog,
    //   args: (arg, t) => [
    //     arg("title", t.String),
    //     arg("desc", t.String),
    //     arg("body", t.String),
    //     arg("author", t.String),
    //     arg("ImgCID", t.String),
    //     arg("PRIVATE", t.String),
    //   ],
    //   proposer: fcl.authz,
    //   payer: fcl.authz,
    //   authorizations: [fcl.authz],
    //   limit: 999,
    // });
    // console.log("Blogs added:",addBlogsId);
    const deploymentID = await fcl.mutate({
      cadence: DeployContract,
      proposer: fcl.authz,
      payer: fcl.authz,
      authorizations: [fcl.authz],
      limit: 999,
    });
    console.log("Contract Deployed", deploymentID);
    await fcl.reauthenticate();
    
    const settingID = await fcl.mutate({
      cadence: SetOwnerDetails,
      args: (arg, t) => [
        arg(name, t.String),
        arg(ipfsCid, t.String),
        arg(description, t.String),
        arg(price, t.UFix64),
      ],
      proposer: fcl.authz,
      payer: fcl.authz,
      authorizations: [fcl.authz],
      limit: 999,
    });
    console.log("Owner Details Set", settingID);
  }

  return (
    <div className="section9">
      <div className="inner-box">
        <div className="heading-box">
          <h1 className="form-heading">Create Your Community</h1>
        </div>
        <div className="part-one">
          <div className="subpart-1">
            <h1 className="one-heading">1. Configure</h1>
            <div className="subsubpart-one">
              <div className="preview-section">
                <label className="label-section" htmlFor="upload-button">
                  {preview ? (
                    <img src={preview} className="banner" alt="dummy" />
                  ) : (
                    <h1>upload banner image</h1>
                  )}
                </label>
                <input
                  className="hidden"
                  id="upload-button"
                  type="file"
                  onChange={(e) => uploadToIPFS(e.target.files[0])}
                />
              </div>
              <div className="com">
                <label className="label-com">Community Name</label>
                <input
                  type="text"
                  placeholder="CoffeeDAO"
                  className="name-input"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="desc">
              <label className="description-label"> Description</label>
              <textarea
                className="description-textarea"
                rows={8}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="This is a community filled with Coffee enthusiasts"
              />
            </div>
            <div>
              <label> Price</label>
              <input
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Provide only UFix64"
              />
            </div>
          </div>
          <div className="preview-section">
            <h1 className="text-white">2. Preview</h1>
            <div className="nope">
              <div className="nope-two">
                {preview ? (
                  <img src={preview} className="image-under" alt="dummy" />
                ) : (
                  <img src="" className="image-under-under" alt="dummy" />
                )}
              </div>
              <div className="disp">
                <h1 className="inner-name">{name}</h1>
                <p className="inner-desc">{description}</p>
                <p className="mem">1 member</p>
                <p>Price:{price}</p>
              </div>
            </div>
            <h1 className="text-white">3. Finish</h1>
            <button
              className="final-button"
              disabled={!user.loggedIn}
              onClick={createBlogger}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
