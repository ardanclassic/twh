import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import { Box, Container } from '@mui/system';
import { motion } from "framer-motion"
import { GET_WAREHOUSE_LIST } from 'services';
import { useStyles } from 'utils';
import moment from "moment";
import Breadcrumb from 'components/breadcrumb';
import './index.scss'
import Transitions from 'components/transition.js';

const WarehouseList = () => {
  const navigate = useNavigate()
  const classes = useStyles();

  const [warehouse, setwarehouse] = useState([])

  useEffect(() => {
    GET_WAREHOUSE_LIST().then(res => {
      // console.log(res);
      setupWarehouse(res)
    })
  }, [])

  const setupWarehouse = (data) => {
    let tmp = []
    data.forEach((el, i) => {
      tmp.push({
        id: i + 1,
        wareID: el.WarehouseID,
        branch: el.Branch,
        activity: el.ReplenishmentClass || "-",
        updated: moment(el.LastModifiedDateTime).format("MMMM DD, YYYY"),
        description: el.Description || "-"
      })
    });
    setwarehouse(tmp)
  }

  const TableColumn = [
    { field: 'wareID', headerName: 'Ware ID', flex: 1 },
    { field: 'branch', headerName: 'Branch', flex: 1 },
    { field: 'updated', headerName: 'Updated Date', flex: 1 },
  ];

  const tableConfig = {
    rows: warehouse,
    columns: TableColumn,
    className: classes.root,
    getRowClassName: () => `itemrow`,
    onRowClick: (e) => { navigate(`/detail/${e.row.wareID}`) },
    hideFooter: true,
    autoHeight: true,
    disableSelectionOnClick: true,
    disableColumnFilter: true,
    disableColumnSelector: true,
    showColumnRightBorder: true,
    showCellRightBorder: true
  }

  return (
    <Transitions>
      <Container>
        <Breadcrumb level={1} />
        <div className="head-area">
          <h1>Warehouse List</h1>
        </div>
        <Box className="list-box">
          <DataGrid {...tableConfig} hideFooter />
        </Box>
      </Container>
    </Transitions>
  )
}

export default WarehouseList