
import Title from "../home/Title";
import { blogImgOne, blogImgTwo, blogImgThree } from "../../assets";
import BlogCard from "./BlogCard";
import React, {  useState } from "react";
import { motion } from "framer-motion";
import BlogPost from "./blogpost/BlogPost";



const Blog = () => {
  const [p1, setP1] = useState(false);
  const [p2, setP2] = useState(false);
  const [p3, setP3] = useState(false);

  function handleState() {
    setP1(false);
    setP2(false);
    setP3(false);
  
 };  

 
  return (
    <div>
      {/* ============= Blog Post Start here ============= */}
     
        {/* ============= Blog Post Start here ============= 
  
  */}
      
      <Title title="Latest" subTitle="Posts" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
        <div  onClick={() =>
              setP1(true) &
              setP2(false) &
              setP3(false) 
              
            } >
         <BlogCard  
            image={blogImgThree}
            title="July 13, 2020"
            subTitle="What does a software developer do?"
            category="Documentation"
          />
         </div>
         <div  onClick={() =>
              setP1(false) &
              setP2(false) &
              setP3(true) 
              
            } >
         <BlogCard  
            image={blogImgOne}
            title="July 13, 2020"
            subTitle="What is SEO?"
            category="Documentation"
          />
         </div>
      
       
        </div>
        <div className="px-6">
         <div  onClick={() =>
              setP1(false) &
              setP2(true) &
              setP3(false) 
              
            } >
         <BlogCard  
            image={blogImgTwo}
            title="July 13, 2020"
            subTitle="What is domain&server?"
            category="Documentation"
          />
         </div>
  
        </div>
      </div>
      {p1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
               <BlogPost change = {handleState} title='What does' subTitle='a software developer do?'
               p1='Programming is like building a build with a stupid team of workers.
               Consider the workers divided into color groups; red, yellow, blue, green... ' 
p2='Reds can only hit hammers, yellows can only bring nails, blues can only apply brushes.
These workers are so stupid, imagine that you put a board in front of the red worker and the yellow worker brings him 1 nail.'
 p3="It won't hammer the nail unless you command it to hammer it, and the yellow one won't bring the second one. So let's have foremen in the greens as stupid as the other colors
 They just command others how many times to do something."
  p4='At this point, you programmers should make a business plan. Where to start to build the building, what materials will be used, how many workers are needed, how many nails are needed to hammer a board (to inform the green masters)'
   p5='We should know the answers to questions like these in advance. If we give the command to the green foreman, "Tell the red worker to hammer nails until the sun rises in the west," they will continue to work forever.
   At this point you can also imagine yourself as an orchestra conductor.
   The computer is a stupid machine that only understands 0s and 1s...
   ' />
              </motion.div>
            )}

            {p2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <BlogPost change = {handleState} title='What is' subTitle='domain&server?'
                 p1='We can compare servers to lands. How many meters should the underpinning depth be? How many floors are needed? How many apartments should there be on each floor? What should be the minimum capacity of apartments? By asking questions such as, we determine the server capacity suitable for our project.' 
                p2='The domain name is our signboard, our address statement.'
                 p3=''
                  p4='We can think of the domain name as the public address. Possible users who visit our structure will benefit from this.'
                   p5='' />
              </motion.div>
            )}
            {p3 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
               <BlogPost change = {handleState}  title='What is' subTitle='SEO?'
                p1='SEO (Search Engine Optimization) is the key to reaching more users. As a result of our need, we built a building and declared our address. There is no such thing as a busy street in the world of machines. Our only goal is to get higher rank in search engines. There are conditions we must meet in order to rise;' 
                p2='Having your website with an SSL certificate, having a responsive design compatible with mobile devices, and being optimized and fast will open the door for search engines to rank your site at the top.' 
                p3='Another important thing is UX (User Experience). To ensure that the same user visits again for reasons such as the quality content, ease of use and design of the content on our site. Our target should be at least 40%. When 400 out of 1000 users who visit for the first time visit again, search engines are convinced that you have useful content/website and rank the website higher.' 
                p4="It is difficult to say the effect when we achieve these others, but in our previous article, we said that the domain name is both our address statement and our signboard; a domain name that contains keywords related to your content, is not too long, and does not contain periods or dashes to appeal to the users' eyes will be beneficial in attracting more visitors." 
                p5='When we read our previous articles and imagine the story in our minds, we understand that everything is chained and interdependent for a good website. A properly constructed foundation, address declaration, SEO compatible design as  interior/exterior architect and a good signboard...' />
              </motion.div>
            )}
           
    </div>
  );
};

export default Blog;
