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
import { useNavigate } from "react-router-dom";

export default function Section9() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [preview, setPreview] = useState("");
  const [ipfsCid, setIpfsCid] = useState("");
  const [price, setPrice] = useState(0);
  const { user } = useAuth();
  const NFT_STORAGE_TOKEN = import.meta.env.VITE_PUBLIC_NFTSTORAGE_KEY;
  const client = new NFTStorage({ token: NFT_STORAGE_TOKEN });
  const navigate = useNavigate();

  async function uploadToIPFS(file) {
    let prev = URL.createObjectURL(file);
    setPreview(prev);
    const cid = await client.storeBlob(file);
    setIpfsCid(cid);
  }

  async function createBlogger() {
    fcl.config.put("0xBlogger", user.addr);
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
    navigate("/add");
  }

  return (
    <div className="section9">
      <div className="section9-heading">
        <h1 className="form-heading">Make your Mark by</h1>
        <h1 className="form-heading" id="ok">Onboarding yourself with us</h1>
      </div>
      <div className="first-part">
        <h1 className="form-steps">1. Configure</h1>
        <div className="">
          <label className="img-section" htmlFor="upload-button">
                    {preview ? (
                      <img src={preview} className="banner" alt="dummy" />
                    ) : (
                      <h1 className="img-data">Upload Banner Image/Logo</h1>
                    )}
          </label>
          <input
            className="hidden form-boxes"
            id="upload-button"
            type="file"
            accept="image/*"
            hidden
            onChange={(e) => uploadToIPFS(e.target.files[0])}
          />
        </div>
      </div>
      <div className="second-part">
        <label className=""><h1 className="form-steps">2. Community Name</h1></label>
        <input
          type="text"
          placeholder="CoffeeDAO"
          className="form-boxes box-height"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="third-part">
        <label className="description"><h1 className="form-steps">3. Description</h1></label>
        <textarea
          className="form-boxes inside"
          rows={8}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="This is a community filled with Coffee enthusiasts"
        />
      </div>
      <div className="fourth-part">
        <label className="price"><h1 className="form-steps">4. Price</h1></label>
        <input
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Provide only UFix64"
          className="form-boxes box-height"
        />
      </div>
      <div className="fifth-part">
      <h1 className="form-steps">5. Finish</h1>
        <button
          className="final-button"
          disabled={!user.loggedIn}
          onClick={createBlogger}
        >
          Create
        </button>
      </div>
    </div>
  );
}
