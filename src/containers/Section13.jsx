import React from 'react';
import Individual from "../components/Cards/Individual.jsx" 
import { blogContent } from '../utils/content.js';

const {
    Blog1,
    Blog2,
    Blog3,
  } = blogContent;

const Section13 = () => {
  return (
    <div className="trip">
      {/* <h1>Free Blogs</h1>
      <p>Discover and gain insights about your topic of interest</p> */}
    <div className="blog">
        <Individual
        image={Blog1}
        heading="Blog 1"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus, velit diam tincidunt diam, vitae aliquam nisl nunc vitae nisl. Sed euismod, diam id tincidunt dapibus, velit diam tincidunt diam, vitae aliquam nisl nunc vitae nisl."
        />
        <Individual
        image={Blog2}
        heading="Blog 1"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus, velit diam tincidunt diam, vitae aliquam nisl nunc vitae nisl. Sed euismod, diam id tincidunt dapibus, velit diam tincidunt diam, vitae aliquam nisl nunc vitae nisl."
        />
        <Individual
        image={Blog3}
        heading="Blog 1"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus, velit diam tincidunt diam, vitae aliquam nisl nunc vitae nisl. Sed euismod, diam id tincidunt dapibus, velit diam tincidunt diam, vitae aliquam nisl nunc vitae nisl."
        />
    </div>
    </div>
  )
}

export default Section13