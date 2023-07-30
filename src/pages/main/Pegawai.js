import { Grid, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Divider } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { pegawai } from 'data';

const Pegawai = () => (
  <Grid container direction="column" spacing={2}>
    {/* <Grid item>
      <Paper elevation={0}>
        <Button variant="contained">Tambah</Button>
      </Paper>
    </Grid> */}
    <Grid item>
      <Divider />
    </Grid>
    <Grid item>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id Pegawai</TableCell>
              <TableCell>Nama</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Keterangan</TableCell>
              <TableCell>Hari Piket</TableCell>
              <TableCell>Jam Piket</TableCell>
              <TableCell>Aksi</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pegawai.map((peg) => (
              <TableRow key={peg.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {peg.id}
                </TableCell>
                <TableCell align="left">{peg.nama}</TableCell>
                <TableCell align="left">{peg.role}</TableCell>
                <TableCell align="left">{peg.keterangan}</TableCell>
                <TableCell align="left">{peg.hari}</TableCell>
                <TableCell align="left">{peg.pukul}</TableCell>
                <TableCell>
                  <IconButton color="primary" aria-label="ubah">
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  </Grid>
);

export default Pegawai;
