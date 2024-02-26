import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Addblog = () => {

    var [val,setval] = useState({})
    const handleInput = (e)=>{
        setval({...val,[e.target.name]: e.target.value})
        console.log(val)
    }
    const submitHandler = ()=>{
        console.log("clicked")
        console.log(val)

    }
  return (
    <div>
      
        <br /><br />
        <Typography style={{fontSize:'30px'}}>Blog Details</Typography><br /><br />
        <TextField label='Blog Name' variant='outlined' name='blogname' onChange={handleInput}>Blog Name</TextField><br /><br />
        <TextField label='Description' variant='outlined' name='description' onChange={handleInput}>Description</TextField><br /><br />
        <TextField label='Author Name' variant='outlined' name='authorname' onChange={handleInput}>Author Name</TextField><br /><br />
        <Button variant='contained' color='success' onClick={submitHandler}>Submit</Button>

     
    </div>
  )
}

export default Addblog
