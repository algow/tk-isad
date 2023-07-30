import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

// material-ui
import { Box, Grid, Stack, Typography, Button, Container } from '@mui/material';

// project import
import LandingCard from './LandingCard';
import Logo from 'components/Logo';
// import AuthFooter from 'components/cards/AuthFooter';

// assets
import AuthBackground from 'assets/images/auth/AuthBackground';
import AuthFooter from 'components/cards/AuthFooter';

// ==============================|| AUTHENTICATION - WRAPPER ||============================== //

const LandingWrapper = ({ children }) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <AuthBackground />
      <Grid
        container
        direction="column"
        justifyContent="flex-end"
        sx={{
          minHeight: '100vh'
        }}
      >
        <Grid item xs={12} sx={{ ml: 3, mt: 3 }}>
          <Logo />
        </Grid>

        <Grid item xs={12} sx={{ ml: 3, mt: 3 }} justifyContent="center" align="center">
          <Container maxWidth="md">
            <Stack spacing={0.75} sx={{ mt: -1.5 }}>
              <Typography variant="h2">Klinik Maharani</Typography>
              <Typography variant="body" gutterBottom>
                RW.2, Bambu Apus, Cipayung, East Jakarta City, Jakarta
              </Typography>
              <Typography variant="body" gutterBottom>
                Telp: (+62) 598 9414 5065
              </Typography>

              <Button variant="outlined" size="small" onClick={() => navigate('/pegawai')}>Masuk</Button>
            </Stack>
          </Container>
        </Grid>

        <Grid item xs={12}>
          <Grid
            item
            xs={12}
            container
            justifyContent="center"
            alignItems="center"
            sx={{ minHeight: { xs: 'calc(100vh - 134px)', md: 'calc(100vh - 112px)' } }}
          >
            <Grid item>
              <LandingCard>{children}</LandingCard>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
          <AuthFooter />
        </Grid>
      </Grid>
    </Box>
  );
};

LandingWrapper.propTypes = {
  children: PropTypes.node
};

export default LandingWrapper;
