import React, { useEffect, useState } from 'react'
import { Container } from '@mui/system'
import { Box, Divider, List, ListItem, ListItemText, Paper } from '@mui/material'
import { GET_WAREHOUSE_DETAIL } from 'services'
import { useStyles } from 'utils'
import Breadcrumb from 'components/breadcrumb'
import moment from "moment";
import './index.scss'
import Transitions from 'components/transition.js'

const WarehouseDetail = () => {
  const classes = useStyles();

  const [itemID, setitemID] = useState("")
  const [itemInfo, setitemInfo] = useState()

  useEffect(() => {
    const id = window.location.pathname.split('/')[2]
    setitemID(id)
    GET_WAREHOUSE_DETAIL(id).then(res => {
      // console.log(res);
      setitemInfo({
        id: res.WarehouseID,
        wareID: res.WarehouseID,
        branch: res.Branch,
        status: res.Active ? "Aktif" : "Tidak Aktif",
        activity: res.ReplenishmentClass || "-",
        updated: moment(res.LastModifiedDateTime).format("MMMM DD, YYYY"),
        description: res.Description || "-"
      })
    })
  }, [])

  return (
    <Transitions>
      <Container>
        <Breadcrumb level={2} title={itemID} />
        <div className="head-area">
          <h1>Warehouse Detail</h1>
        </div>
        <Paper elevation={4} className="box-info">
          {itemInfo && (
            <>
              <List component="nav" aria-label="mailbox folders">
                <ListItem className="row-item">
                  <ListItemText primary="Warehouse ID" className="label" />
                  <ListItemText primary={itemInfo.wareID} primaryTypographyProps={{ fontWeight: 600 }} className="value" />
                </ListItem>
                <Divider />
                <ListItem divider className="row-item">
                  <ListItemText primary="Branch" className="label" />
                  <ListItemText primary={itemInfo.branch} primaryTypographyProps={{ fontWeight: 600 }} className="value" />
                </ListItem>
                <ListItem divider className="row-item">
                  <ListItemText primary="Description" className="label" />
                  <ListItemText primary={itemInfo.description} primaryTypographyProps={{ fontWeight: 600 }} className="value" />
                </ListItem>
                <ListItem divider className="row-item">
                  <ListItemText primary="Status" className="label" />
                  <ListItemText primary={itemInfo.status} primaryTypographyProps={{ fontWeight: 600 }} className="value" />
                </ListItem>
                <ListItem divider className="row-item">
                  <ListItemText primary="Activity" className="label" />
                  <ListItemText primary={itemInfo.activity} primaryTypographyProps={{ fontWeight: 600 }} className="value" />
                </ListItem>
                <ListItem className="row-item">
                  <ListItemText primary="Date Updated" className="label" />
                  <ListItemText primary={itemInfo.updated} primaryTypographyProps={{ fontWeight: 600 }} className="value" />
                </ListItem>
              </List>
            </>
          )}
        </Paper>
      </Container>
    </Transitions>
  )
}

export default WarehouseDetail