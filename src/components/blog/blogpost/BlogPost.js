import {React,useRef,useEffect} from 'react'

import { MdWork, MdOutlineClose } from "react-icons/md"


import Title from '../../home/Title';
const BlogPost = ({ change, p1, p2, p3,p4,p5,title,subTitle }) => {

  const ref = useRef();
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        change()
      }
    });
  }, []);
  return (
    
//       <div className="w-full h-screen fixed top-0 left-0 bg-black bg-opacity-50 z-50">
//         <div className="w-96 h-full relative">
//         {modals.map(modal => {
            
//             const m=modalData.find(m=> m.name === modal.name);
//             return <m.element />
            
// })}

//           <motion.div
//             ref={ref}
//             initial={{ x: -500, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             className="w-full h-full bg-bodyColor overflow-y-scroll scrollbar-thin scrollbar-thumb-[#646464]"
//           >
          
   
//             <span
              
//               className="absolute top-0 -right-16 w-12 h-12 bg-bodyColor text-2xl text-textColor hover:text-designColor duration-300 cursor-pointer flex items-center justify-center z-50"
//             >
//               <MdOutlineClose />
//             </span>
//           </motion.div>
//         </div>
//       </div>

<div class="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
 
 
  
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

  <div class="fixed inset-0 z-100  w-screen overflow-y-auto">
  <div class="flex min-h-full  items-end justify-center p-4 text-center sm:items-center sm:p-0">
     

  <div ref={ref} class="relative transform overflow-hidden  lg:w-5/6 rounded-lg bg-bodyColor text-left shadow-xl transition-all  sm:my-8 sm:w-full  ">
  <span onClick={() => change()} className='float-right top-0  w-8 h-8 bg-transparent text-2xl text-textColor hover:text-designColor duration-300 cursor-pointer   '> <MdOutlineClose /> </span>
     <div class="bg-bodyColor px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
   
         <div class=" sm:flex sm:items-start">
       
                
           <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-designColor sm:mx-0 sm:h-10 sm:w-10">
         
           </div>
          
           <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
          <Title title={title} subTitle={subTitle} />
             <div class="mt-2">
              
<p class="mb-3 text-white ">{p1}</p>
<div class="grid grid-cols-1 gap-6 sm:grid-cols-3">
    <div class="col-span-2">
        <p class="mb-3 text-white ">{p2}</p>
        <p class="mb-3 text-white ">{p3}</p>
    </div>
    <p class="mb-3 text-white ">{p4}</p>
</div>
<p class="mb-3 text-white ">{p5}</p>

             </div>
           </div>
         </div>
       </div>
       {/* <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
       
       </div> */}
     </div>
    
   </div>
  </div>
  
</div>
   
  )
}

export default BlogPost






