// import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';
// project import
// import AuthLogin from '../authentication/auth-forms/AuthLogin';
import LandingWrapper from './LandingWrapper';
import LandingContent from './LandingContent';

// ================================|| LOGIN ||================================ //

const LandingPage = () => (
  <LandingWrapper>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
          <Typography variant="h3">Klinik Maharani</Typography>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <LandingContent />
      </Grid>
    </Grid>
  </LandingWrapper>
);

export default LandingPage;
