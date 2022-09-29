import DashboardIcon from '@mui/icons-material/Dashboard';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ReactEcharts, { EChartsOption } from 'echarts-for-react';
import { useEffect, useState } from 'react';
import NavBar from '../../layout/nav';
import Deposit from './deposit';
import Order from './order';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const mdTheme = createTheme();

function Dashboard() {
  const [chartOption, setChartOption] = useState();

  useEffect(() => {
    const option: EChartsOption = {
      grid: {
        top: 15,
        right: 20,
        bottom: 20,
        left: 70,
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00', '24:00'],
        axisLabel: {
          fontWeight: "lighter",
          fontFamily: "Arial",
          color: "black",
          fontSize: 13
        }
      },
      yAxis: {
        type: 'value',
        axisLine: {
          show: true
        },
        axisTick: {
          show: true
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          fontWeight: "lighter",
          fontFamily: "Arial",
          color: "black",
          fontSize: 13
        }
      },
      series: [
        {
          data: [0, 300, 600, 800, 1500, 2000, 2400, 2400, undefined],
          type: 'line',
          symbol: "none",
          smooth: true
        }
      ]
    }
    setChartOption(option)
  }, [])

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
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ alignItems: 'center', display: 'flex' }}>
                    <DashboardIcon sx={{ fontSize: '30px', mr: 1 }} />
                    <Typography style={{ fontWeight: '700', fontSize: '25px' }}>
                      Dashboard
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Typography className='title-font' component="h2" variant="h6" gutterBottom>
                    Today
                  </Typography>
                  {chartOption && <ReactEcharts option={chartOption} />}
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Deposit />
                </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Order />
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Dashboard;