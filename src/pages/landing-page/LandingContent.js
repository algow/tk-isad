import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { pegawai } from '../../data';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { CardActions } from '../../../node_modules/@mui/material/index';

const LandingContent = () => (
  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    {pegawai.map((peg) => (
      <Grid item xs={6} key={peg.id}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 140 }} image={peg.pic} title="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {peg.nama}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {peg.keterangan}
            </Typography>
          </CardContent>
          <CardActions>
            <CalendarMonthIcon color="primary" />
            {peg.hari}
          </CardActions>
          <CardActions>
            <AccessTimeIcon color="primary" />
            {peg.pukul}
          </CardActions>
        </Card>
      </Grid>
    ))}
  </Grid>

);

export default LandingContent;
