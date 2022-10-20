import React from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumbs, Typography } from '@mui/material'

const Breadcrumb = ({ level, title }) => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {level > 1 ? (
        <Link to={'/'}>
          <Typography color="text.primary">List</Typography>
        </Link>) :
        (<Typography color="text.primary">List</Typography>)
      }
      {level > 1 && (
        <Typography color="text.primary">{title}</Typography>
      )}
    </Breadcrumbs>
  )
}

export default Breadcrumb