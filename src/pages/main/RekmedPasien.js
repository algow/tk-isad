import { useState, useEffect } from 'react';
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { rekamMedis, pasien, pegawai } from 'data';
import { findElement } from 'utils/utils';

function RekmedPasien(props) {
  const [dataRekamMedis, setDataRekamMedis] = useState(rekamMedis);

  const currPasien = props?.pasien;
  const currIdPas = currPasien.id;

  useEffect(() => {
    const currRm = rekamMedis.filter((rm) => rm.id_pasien === currIdPas);

    setDataRekamMedis(currRm);
  }, [currIdPas]);

  return (
    <>
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
    </>
  );
}

export default RekmedPasien;
