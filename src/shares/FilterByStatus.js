import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

export const FilterByStatus = ({status, onFilter}) => {
    return (
        <div style={{ paddingTop: "9px" }}>
            <FormControl
                sx={{
                    width: '100px',
                }}
                size='small'
            >
                <InputLabel id="demo-simple-select-label">Filter</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="Filter"
                    onChange={onFilter}
                >
                    {
                        status.current.map((status) => {
                            return <MenuItem key={status} value={status}>{status}</MenuItem>
                        })
                    }
                </Select>
            </FormControl>
        </div>
    )
}
