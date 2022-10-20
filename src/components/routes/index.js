import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import WarehouseDetail from 'pages/warehouse_detail'
import WarehouseList from 'pages/warehouse_list'

const RoutesComponent = () => {
  return (
    <Router>
      <AnimatePresence exitBeforeEnter >
        <Routes>
          <Route path='/' element={<WarehouseList />} />
          <Route path='/detail/:id' element={<WarehouseDetail />} />
        </Routes>
      </AnimatePresence>
    </Router>
  )
}

export default RoutesComponent