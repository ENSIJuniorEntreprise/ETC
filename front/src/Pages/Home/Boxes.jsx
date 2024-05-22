import Boxstyle from './Boxes.module.css'
import React from 'react';
import Box from './Box';


function Boxes(){
    return(
        <div className={Boxstyle.container}>
             <Box  text="Lorem ipsum"></Box>
             <Box  text="Lorem ipsum"></Box>
             <Box  text="Lorem ipsum"></Box>
             <Box  text="Lorem ipsum"></Box>
        
        
        
        
        </div>
    )

}
export default Boxes



