import React from 'react'
import { useState } from 'react'
import './App.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { themeSettings } from '../src/theme.js'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./scenes/dashboard/Dashboard.jsx";
import Layout from "./scenes/Layout/Layout.jsx"
import {Navigate} from "react-router-dom"
import Products from "./scenes/products/Products.jsx"
import Customers from "./scenes/customers/Customers.jsx"
import Transactions from "./scenes/transactions/Transactions.jsx"
import Geography from "./scenes/geography/Geography.jsx"
import Overview from "./scenes/overview/Overview.jsx"
import Daily from "./scenes/daily/Daily.jsx"
import Monthly from './scenes/monthly/Monthly.jsx'
import Breakdown from "./scenes/breakdown/breakdown.jsx"
import Admins from "./scenes/admins/Admins.jsx"
import Performance from "./scenes/performance/Performance.jsx"

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard/>}/>
              <Route path="/products" element={<Products/>}/>
              <Route path="/customers" element={<Customers/>}/>
              <Route path="/transactions" element={<Transactions/>}/>
              <Route path="/geography" element={<Geography/>}/>
              <Route path="/overview" element={<Overview/>}/>
              <Route path="/daily" element= {<Daily/>}/>
              <Route path="/monthly" element= {<Monthly/>}/>
              <Route path="/breakdown" element= {<Breakdown/>}/>
              <Route path="/admin" element={<Admins/>}/>
              <Route path="/performance" element={<Performance/>}/>
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App
