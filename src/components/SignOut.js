import { Button } from '@mui/material'
import React from 'react'
import auth from '../firebase'

export const SignOut = () => {
  return (
    <div>
      <Button onClick={() => auth.signOut()} style={{color:"#333",padding:"5px 10px",border:"solid 1px #333",marginTop:"8px"}}>
        サインアウト
      </Button>
    </div>
  )
}

