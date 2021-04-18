import React from 'react'
import {useLocation} from "react-router-dom"


function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  

export default function AttendanceLink() {
  let query = useQuery();
  let subject = query.get('subject');
  let avg = query.get('datetime');
  let division = query.get('class');

    return (
        <>
            <h2 style={{ textAlign: 'center'}}>

              {subject}<br/> 
              {avg}<br/>
              {division}
            
            </h2>
        </>
    )
}
