import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
  Box,
  Container, createTheme, Grid,
  Link, Pagination, Paper, ThemeProvider, Toolbar
} from '@mui/material';
import Typography from '@mui/material/Typography';
import NavBar from '../../layout/nav';
import { ProductCard } from './product-card';
import { products } from './types';

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

function Products() {
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
            <Box component="main">
              <Box>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                      <Box sx={{ alignItems: 'center', display: 'flex' }}>
                        <ShoppingCartIcon sx={{ fontSize: '30px', mr: 1 }} />
                        <Typography style={{ fontWeight: '700', fontSize: '25px' }}>
                          Products
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>
                  {products.map((product) => (
                    <Grid item key={product.id} lg={4} md={6} xs={12}>
                      <ProductCard product={product} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center', pt: 3 }} >
                <Pagination color="primary" count={3} size="small" />
              </Box>
            </Box>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Products;