import React from 'react'
import mywork_data from '../../assests/mywork_data'
import "./Project.css"
export default function Project() {
  return (
    <div id='project'>
      <div className="mywork">
        <div className="mywork-title">
          <h1>PROJECTS</h1>
        </div>
        <div className="mywork-container">
          {mywork_data.map((work, index) => {
               return (
                 <a
                   key={index}
                   href={work.w_url}
              
                 >
                   <img src={work.w_img} alt="" />
                 </a>
               );
             })}
        </div>
    </div>
    </div>
  )
}
