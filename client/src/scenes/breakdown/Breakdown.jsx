import React from 'react'
import { Box } from '@mui/material'
import Header from '../../components/Header'
import BreakdownChart from "../../components/BreakdownChart"

const Breakdown = () => {
  return (
    <Box m="1.5rem 2.5rem">
        <Header title = "BREAKDOWN" subTitle="Breakdown of sales by category"/>
        <Box mt="40px" h="75vh">
            <BreakdownChart/>
        </Box>
    </Box>
  )
}

export default Breakdown