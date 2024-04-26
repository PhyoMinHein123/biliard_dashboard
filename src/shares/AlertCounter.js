import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import { useDispatch, useSelector } from 'react-redux';
import { alertCounterToggle } from './shareSlice';
import { Grid } from '@mui/material';

export default function AlertCounter({packageData}) {

    const { showAlertCounter } = useSelector(state => state.share)
    const dispatch = useDispatch();
  
    const alertToggleClick = () => {
      dispatch(alertCounterToggle())
    }

    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleMaxWidthChange = (event) => {
        setMaxWidth(event.target.value);
    };

    const handleFullWidthChange = (event) => {
        setFullWidth(event.target.checked);
    };

    return (
        <React.Fragment>
            <Dialog
                fullWidth={true}
                maxWidth={"md"}
                open={showAlertCounter}
                onClose={alertToggleClick}
            >
                <DialogTitle>Select To Start</DialogTitle>
                <DialogContent>
                    <Box
                        noValidate
                        component="form"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            m: 'auto',
                            width: 'fit-content',
                        }}
                    >
                        <Grid 
                            container 
                            direction="row"
                            alignItems="center"
                        >
                            <Grid 
                                item
                                sx={{
                                    marginX: 7
                                }}
                            >
                                <Button variant="contained" onClick={handleClickOpen}>
                                    To Start Normally
                                </Button>
                            </Grid>
                            <Grid 
                                item
                                sx={{
                                    marginX: 7,
                                    mt: 2,
                                    mb: 2
                                }}
                            >
                                <FormControl sx={{ minWidth: 120, mr: 1 }}>
                                    <InputLabel htmlFor="max-width">Package</InputLabel>
                                    <Select
                                        autoFocus
                                        value={maxWidth}
                                        onChange={handleMaxWidthChange}
                                        label="Package"
                                        inputProps={{
                                            name: 'max-width',
                                            id: 'max-width',
                                        }}
                                    >
                                        {packageData.map((data) => (
                                            <MenuItem key={data.id} value={data.name}>{data.name}</MenuItem>
                                        ))}
                                        
                                    </Select>
                                </FormControl>
                                <Button sx={{ mt: 1 }} variant="contained" onClick={handleClickOpen}>
                                    Start With The Package
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={alertToggleClick}>Close</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}