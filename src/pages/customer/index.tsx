import PeopleIcon from '@mui/icons-material/People';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, SvgIcon, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import NavBar from '../../layout/nav';
import CustomerTable from './customer-table';
import { useState } from 'react'
import { customersDetails } from './types';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">Your Website</Link>{' '}
      {new Date().getFullYear()}{'.'}
    </Typography>
  );
}
const mdTheme = createTheme();

function Customer() {
  const [customerList, setCustomerList] = useState(customersDetails)

  const handleOnChange = (e: any) => {
    const { value } = e.target
    const details: any = customersDetails.filter((item) => item.name.match(value))
    setCustomerList(details)
    console.log(details)
  }
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <NavBar />
        <Box
          className='dashboard-body-color'
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={2}>
              {/* Recent CustomersTable */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ alignItems: 'center', display: 'flex' }}>
                    <PeopleIcon sx={{ fontSize: '35px', mr: 1 }} />
                    <Typography style={{ fontWeight: '700', fontSize: '25px', lineHeight: '5px' }}>
                      Customers
                    </Typography>
                    <TextField
                      style={{ marginLeft: '62%' }}
                      onChange={handleOnChange}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SvgIcon color="action" fontSize="small">
                              <SearchIcon />
                            </SvgIcon>
                          </InputAdornment>
                        )
                      }}
                      placeholder="Search customer"
                      variant="outlined"
                    />
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <CustomerTable customerListDetails={customerList} />
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider >
  );
}
export default Customer;