import React from 'react'
import team from '../../data/team';
import "./Employees.scss";
import Counter from "../Counter/Counter"

const Employees = ({teamsArr}) => {
    // const trackerCardListJSX = teamsArr.map((member, index) => {

    //     return <h2>{member.name}</h2>
    //     // return <img key={album.idAlbum} className="album-tiles__img" src={album.strAlbumThumb} alt={album.strAlbum}/>
   
    // })

  
    return (
      
    <div className='tracker-card'> 
    <h2 className='employee__name'>Name</h2>
<h3 className='employee__role'>Role</h3>
{Counter}
<Counter/>
    </div>

    // <>
    // {/* <h3>{title}</h3> */}
    // <div className='album-tiles'>
    //     {trackerCardListJSX}
    // </div>
    // </>

  //need to include props for employee name
  //props for employee role 
  //render a basic card
  // can you render multiple cards at once (something += )
  // what are states? Props are used to pass data, whereas state is for managing data

    )
}

export default Employees;