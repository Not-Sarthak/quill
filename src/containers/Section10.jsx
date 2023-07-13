import React, { useState } from "react";
import "../App.css";
import { NFTStorage } from "nft.storage";
import { useAuth } from "../utils/AuthContext";
import { useNavigate } from "react-router-dom";
import "../flow/config";
import { Button, Typography } from "@mui/material";
import { CreateBlog ,getAllBlogs} from "../flow/cadence_code(emulator)";
import * as fcl from "@onflow/fcl";

const Section10 = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [blog, setBlog] = useState("");
  const [type, setType] = useState("private");
  const [cid, setIpfsCid] = useState("");
  const { user } = useAuth();
  const NFT_STORAGE_TOKEN = import.meta.env.VITE_PUBLIC_NFTSTORAGE_KEY;
  const client = new NFTStorage({ token: NFT_STORAGE_TOKEN });
  const navigate = useNavigate();

  async function uploadToIPFS(file) {
    let prev = URL.createObjectURL(file);
    const cid = await client.storeBlob(file);
    setIpfsCid(cid);
    console.log("Uploaded:", cid);
  }

  async function addBlog() {
    fcl.config.put("0xBlogger", user.addr);
    const addId = await fcl.mutate({
      cadence: CreateBlog,
      args: (arg, t) => [
            arg(title, t.String),
            arg(description, t.String),
            arg(blog, t.String),
            arg(author, t.String),
            arg(cid, t.String),
            arg(type, t.String),
          ],
      proposer: fcl.authz,
      payer: fcl.authz,
      authorizations: [fcl.authz],
      limit: 999,
    });
    navigate("/community");
  }

  return (
    <div className="section10">
      <section className="newPost">
        <div className="container boxItems">
          <h1 className="add-blog">
            Share your thoughts and let the world know it
          </h1>
          <form className="form-data">
            <div className="inputfile flexCenter">
              <label>Upload Image</label>
              <input
                type="file"
                accept="image/*"
                alt="img"
                className="file-input"
                onChange={(e) => uploadToIPFS(e.target.files[0])}
              />
            </div>
            <br />
            <label>Title</label>
            <input
              type="text"
              className="title-input"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <label>Description</label>
            <textarea
              name="description"
              id=""
              cols="30"
              rows="2"
              className="description-content"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <br />
            <label>Author's Name</label>
            <input
              type="text"
              className="author-content"
              placeholder="Name"
              onChange={(e) => setAuthor(e.target.value)}
            />
            <br />
            <label>Blog</label>
            <textarea
              name="blog"
              id="blog-content"
              placeholder="Blog"
              onChange={(e) => setBlog(e.target.value)}
            ></textarea>
            <br />
            <select
              id="mounth"
              defaultValue="private"
              onChange={(e) => setType(e.target.value)}
            >
              <option value="hide" disabled>
                -- Type --
              </option>
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
            <br />
            <Button onClick={addBlog}>
              <div
                className="Button"
                style={{
                  width: 130.55,
                  height: 40,
                  paddingTop: 9,
                  paddingBottom: 9,
                  paddingLeft: 1,
                  paddingRight: 1,
                  background: "#1d1f1e",
                  borderRadius: 30,
                  borderLeft: "0.50px rgba(168, 240, 230, 0.60) solid",
                  borderTop: "0.50px rgba(168, 240, 230, 0.60) solid",
                  borderRight: "0.50px rgba(168, 240, 230, 0.60) solid",
                  borderBottom: "0.50px rgba(168, 240, 230, 0.60) solid",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="body3">
                  <div
                    style={{
                      color: "#a8f0cb",
                      display: "flex",
                      justifyContent: "center",
                      alignContent: "center",
                    }}
                  >
                    Create Post
                  </div>
                </Typography>
              </div>
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Section10;
