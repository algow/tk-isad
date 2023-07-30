import { useState, useEffect } from 'react';
import { Grid, Paper, Dialog, TableContainer, Alert, Snackbar, DialogTitle, DialogActions, MenuItem, Select, InputLabel, TextField, DialogContent, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Button, Divider } from '@mui/material';
// import EditIcon from '@mui/icons-material/Edit';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import { pasien } from 'data';
import AddIcon from '@mui/icons-material/Add';
import { generateId } from 'utils/utils';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import RekmedPasien from './RekmedPasien';

const Pasien = () => {
  const [open, setOpen] = useState(false);
  const [openMr, setOpenMr] = useState(false);
  const [openSB, setOpenSB] = useState(false);
  const [dataPasien, setDataPasien] = useState(pasien);
  const [id, setId] = useState('');
  const [nama, setNama] = useState('');
  const [alamat, setAlamat] = useState('');
  const [tanggalLahir, setTanggalLahir] = useState('');
  const [jenisKelamin, setJenisKelamin] = useState('');
  const [status, setStatus] = useState('');
  const [selectedPasien, setSelectedPasien] = useState({});

  useEffect(() => {
    setDataPasien(pasien);
    setId(generateId(pasien));
  }, []);

  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    if (name === 'nama') {
      setNama(value);
    }

    if (name === 'alamat') {
      setAlamat(value);
    }

    // if (name === 'tanggalLahir') {
    //   setTanggalLahir(value);
    // }

    if (name === 'jenisKelamin') {
      setJenisKelamin(value);
    }

    if (name === 'status') {
      setStatus(value);
    }
  };

  const handleSubmit = () => {
    handleClose();

    const d = new Date();

    const newData = {
      id,
      nama,
      alamat,
      tanggal_lahir: tanggalLahir.$d.toISOString(),
      jenis_kelamin: jenisKelamin,
      status,
      created_at: d.toISOString(),
      updated_at: d.toISOString()
    };

    setDataPasien([...dataPasien, newData]);
    setOpenSB(true);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenMr = (currPasien) => {
    setOpenMr(true);
    setSelectedPasien(currPasien);
  };

  const handleCloseMr = () => {
    setOpenMr(false);
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
                  <TableCell>Id Pasien</TableCell>
                  <TableCell>Nama</TableCell>
                  <TableCell>Alamat</TableCell>
                  <TableCell>Tanggal Lahir</TableCell>
                  <TableCell>Jenis Kelamin</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Creation Date</TableCell>
                  <TableCell>Aksi</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dataPasien.map((pas) => (
                  <TableRow key={pas.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {pas.id}
                    </TableCell>
                    <TableCell align="left">{pas.nama}</TableCell>
                    <TableCell align="left">{pas.alamat}</TableCell>
                    <TableCell align="left">{pas.tanggal_lahir}</TableCell>
                    <TableCell align="left">{pas.jenis_kelamin}</TableCell>
                    <TableCell align="left">{pas.status}</TableCell>
                    <TableCell align="left">{pas.created_at}</TableCell>
                    <TableCell>
                      {/* <IconButton color="primary" aria-label="ubah">
                        <EditIcon />
                      </IconButton> */}
                      <IconButton color="primary" aria-label="rekam medis" onClick={() => handleClickOpenMr(pas)}>
                        <MedicalServicesIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Regitrasi Pasien</DialogTitle>
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

          <TextField
            autoFocus
            margin="dense"
            id="nama"
            name="nama"
            label="Nama"
            type="text"
            onChange={handleInputChange}
            fullWidth
            variant="standard"
            value={nama}
          />

          <TextField
            autoFocus
            margin="dense"
            id="alamat"
            name="alamat"
            label="Alamat"
            type="text"
            onChange={handleInputChange}
            fullWidth
            variant="standard"
            value={alamat}
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker value={tanggalLahir} onChange={(newValue) => setTanggalLahir(newValue)} />
          </LocalizationProvider>

          <InputLabel id="demo-simple-jenis">Jenis Kelamin</InputLabel>
          <Select
            fullWidth
            labelId="demo-simple-jenis"
            name="jenisKelamin"
            id="demo-simple-select-jenis"
            value={jenisKelamin}
            onChange={handleInputChange}
            label="Jenis Kelamin"
          >
            <MenuItem value="Laki-laki" key={0}>
              laki-laki
            </MenuItem>
            <MenuItem value="Perempuan" key={2}>
              perempuan
            </MenuItem>
          </Select>

          <InputLabel id="demo-simple-status">Status</InputLabel>
          <Select
            fullWidth
            name="status"
            labelId="demo-simple-status"
            id="demo-simple-select-status"
            value={status}
            onChange={handleInputChange}
            label="Status"
          >
            <MenuItem value="menikah" key={0}>
              menikah
            </MenuItem>
            <MenuItem value="belum menikah" key={1}>
              belum menikah
            </MenuItem>
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} variant="contained">
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openMr} onClose={handleClose}>
        <DialogTitle>{`Rekam Medis Pasien ${selectedPasien.nama}`}</DialogTitle>
        <DialogContent>
          <RekmedPasien pasien={selectedPasien} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseMr}>close</Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={openSB} autoHideDuration={6000} onClose={handleCloseSB} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert onClose={handleCloseSB} severity="success" sx={{ width: '100%' }}>
          Berhasil menambah pasien
        </Alert>
      </Snackbar>
    </>
  );
};

export default Pasien;
