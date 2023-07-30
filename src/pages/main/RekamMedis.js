import { useState, useEffect } from 'react';
import {
  Grid,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  InputLabel,
  TextField,
  Select,
  MenuItem,
  TableCell,
  TableBody,
  Button,
  Divider,
  DialogActions,
  Dialog,
  DialogTitle,
  DialogContent,
  Snackbar,
  Alert
} from '@mui/material';
import { rekamMedis, pasien, pegawai } from 'data';
import { generateId, findElement } from 'utils/utils';
import AddIcon from '@mui/icons-material/Add';


const RekamMedis = () => {
  const [open, setOpen] = useState(false);
  const [dataRekamMedis, setDataRekamMedis] = useState(rekamMedis);
  const [idPasien, setIdPasien] = useState('');
  const [idDokter, setIdDokter] = useState('');
  const [id, setId] = useState('');
  const [diagnosa, setDiagnosa] = useState('');
  const [medications, setMedications] = useState('');
  const [openSB, setOpenSB] = useState(false);

  useEffect(() => {
    setDataRekamMedis(rekamMedis);
    setId(generateId(rekamMedis));
  }, []);

  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    if (name === 'pasien') {
      setIdPasien(value);
    }

    if (name === 'dokter') {
      setIdDokter(value);
    }

    if (name === 'diagnosa') {
      setDiagnosa(value);
    }

    if (name === 'medications') {
      setMedications(value);
    }
  };

  const handleSubmit = () => {
    handleClose();

    const d = new Date();

    const newData = {
      id,
      id_dokter: idDokter,
      id_pasien: idPasien,
      diagnosa: [diagnosa],
      medications: [medications],
      created_at: d.toISOString(),
      updated_at: d.toISOString()
    };

    setDataRekamMedis([...rekamMedis, newData]);
    setOpenSB(true);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseSB = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Paper elevation={0}>
            <Button variant="contained" onClick={handleClickOpen} startIcon={<AddIcon />}>
              Tambah
            </Button>
          </Paper>
        </Grid>
        <Grid item>
          <Divider />
        </Grid>
        <Grid item>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Id Rekam Medis</TableCell>
                  <TableCell>Nama Pasien</TableCell>
                  <TableCell>Tanggal Lahir</TableCell>
                  <TableCell>Jenis Kelamin</TableCell>
                  <TableCell>Dokter</TableCell>
                  <TableCell>Diagnosa</TableCell>
                  <TableCell>Pengobatan</TableCell>
                  <TableCell>Creation Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dataRekamMedis.map((rm, i) => (
                  <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {rm.id}
                    </TableCell>
                    <TableCell align="left">{findElement(pasien, 'id', rm.id_pasien, 'nama')}</TableCell>
                    <TableCell align="left">{findElement(pasien, 'id', rm.id_pasien, 'tanggal_lahir')}</TableCell>
                    <TableCell align="left">{findElement(pasien, 'id', rm.id_pasien, 'jenis_kelamin')}</TableCell>
                    <TableCell align="left">{findElement(pegawai, 'id', rm.id_dokter, 'nama')}</TableCell>
                    <TableCell align="left">{rm.diagnosa.map((d) => `${d}, `)}</TableCell>
                    <TableCell align="left">{rm.medications.map((m) => `${m}, `)}</TableCell>
                    <TableCell align="left">{rm.created_at}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Rekam Medis</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="id"
            id="id"
            label="ID"
            onChange={handleInputChange}
            type="text"
            fullWidth
            variant="standard"
            value={id}
          />

          <InputLabel id="demo-simple-pasien">Pasien</InputLabel>
          <Select
            fullWidth
            labelId="demo-simple-pasien"
            name="pasien"
            id="demo-simple-select-pasien"
            value={idPasien}
            onChange={handleInputChange}
            label="ID Pasien"
          >
            {pasien.map((pas) => (
              <MenuItem value={pas.id} key={pas.id}>
                {`${pas.id} | ${pas.nama}`}
              </MenuItem>
            ))}
          </Select>

          <InputLabel id="demo-simple-dokter">Dokter</InputLabel>
          <Select
            fullWidth
            name="dokter"
            labelId="demo-simple-dokter"
            id="demo-simple-select-dokter"
            value={idDokter}
            onChange={handleInputChange}
            label="ID Dokter"
          >
            {pegawai.map((peg) => (
              <MenuItem value={peg.id} key={peg.id}>
                {`${peg.id} | ${peg.nama}`}
              </MenuItem>
            ))}
          </Select>

          <TextField
            autoFocus
            margin="dense"
            id="diagnosa"
            name="diagnosa"
            label="Diagnosa"
            type="text"
            onChange={handleInputChange}
            fullWidth
            variant="standard"
            value={diagnosa}
          />

          <TextField
            autoFocus
            margin="dense"
            id="medications"
            name="medications"
            label="Medications"
            type="text"
            onChange={handleInputChange}
            fullWidth
            variant="standard"
            value={medications}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} variant="contained">
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={openSB} autoHideDuration={6000} onClose={handleCloseSB} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert onClose={handleCloseSB} severity="success" sx={{ width: '100%' }}>
          Berhasil menambah rekam medis
        </Alert>
      </Snackbar>
    </>
  );
};

export default RekamMedis;
