import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const Toastify = () => {
    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });
    const { vertical, horizontal, open } = state;

    const handleClick = (newState) => () => {
        setState({ ...newState, open: true });
    };

    const handleClose = () => {
        setState({ ...state, open: false });
    };

    const buttons = (
        // <React.Fragment>

        <Grid container justifyContent="center">
            <Grid item xs={6} textAlign="right">
                <Button onClick={handleClick({ vertical: 'top', horizontal: 'right' })}>
                    Top-Right
                </Button>
            </Grid>
        </Grid>

    );

    return (
        <div>
            <Box sx={{ width: 200 }}>
                {buttons}
                <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    open={open}
                    onClose={handleClose}
                    key={vertical + horizontal}
                >
                    <SnackbarContent
                        sx={{
                            backgroundColor: '#f5f6fa', // Custom background color
                            color: '#1e272e', // Custom text color
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between', // Adjust alignment
                        
                        }}
                        message={
                            <span style={{ display: 'flex', alignItems: 'center', fontWeight: '', fontSize: '1rem' }}>
                                <IconButton
                                    size="small"
                                    aria-label="close"
                                    color="inherit"
                                    onClick={handleClose}
                                    sx={{ backgroundColor: '#ff3838', marginRight: '10px' }} // Change close icon color and add margin
                                >
                                    <CloseIcon fontSize="" />
                                </IconButton>
                                Email is invalid
                            </span>
                        }
                    />
                </Snackbar>
            </Box>
        </div>
    )
}

export default Toastify
