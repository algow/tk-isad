import ava1 from './assets/images/users/1.jpg';
import ava2 from './assets/images/users/2.jpg';
import ava3 from './assets/images/users/3.jpg';
import ava4 from './assets/images/users/4.jpg';
import ava5 from './assets/images/users/5.jpg';

export const pegawai = [
  {
    id: '966',
    nama: 'dr. Andi',
    role: 'dokter',
    keterangan: 'dokter umum',
    pic: ava1,
    hari: 'Setiap hari',
    pukul: '08.00 - 12.00, 17.00 - 21.00'
  },
  {
    id: '967',
    nama: 'dr. Budi',
    role: 'dokter',
    keterangan: 'dokter umum',
    pic: ava2,
    hari: 'Senin, Selasa, Rabu',
    pukul: '08.00 - 12.00'
  },
  {
    id: '968',
    nama: 'dr. Amora',
    role: 'dokter',
    keterangan: 'dokter umum',
    pic: ava3,
    hari: 'Kamis, Jumat, Sabtu',
    pukul: '12.00 - 21.00'
  },
  {
    id: '969',
    nama: 'dr. Charli',
    role: 'dokter',
    keterangan: 'dokter penyakit dalam',
    pic: ava4,
    hari: 'Senin, Rabu, Jumat',
    pukul: '17.00 - 21.00'
  },
  {
    id: '970',
    nama: 'dr. Dani',
    role: 'dokter',
    keterangan: 'dokter kandungan',
    pic: ava5,
    hari: 'Selasa, Kamis, Jumat',
    pukul: '17.00 - 21.00'
  }
];

export const pasien = [
  {
    id: '1001',
    nama: 'Aminah Zakaria',
    alamat: 'Kemayoran',
    tanggal_lahir: '25 Oktober 1983',
    jenis_kelamin: 'Perempuan',
    status: 'menikah',
    created_at: '2023-07-26T10:20:14+07:00',
    updated_at: '2023-07-26T12:44:14+07:00'
  },
  {
    id: '1002',
    nama: 'Harun Bima',
    alamat: 'Jatinegara',
    tanggal_lahir: '12 Juni 1985',
    jenis_kelamin: 'Laki-laki',
    status: 'menikah',
    created_at: '2023-07-26T14:12:14+07:00',
    updated_at: '2023-07-26T15:44:14+07:00'
  },
  {
    id: '1003',
    nama: 'Sri Rustam',
    alamat: 'Kemayoran',
    tanggal_lahir: '11 November 1990',
    jenis_kelamin: 'Perempuan',
    status: 'menikah',
    created_at: '2023-07-26T10:08:14+07:00',
    updated_at: '2023-07-26T12:44:14+07:00'
  },
  {
    id: '1004',
    nama: 'Abdullah Cahya',
    alamat: 'Kwitang',
    tanggal_lahir: '15 Februari 1998',
    jenis_kelamin: 'Laki-laki',
    status: 'belum menikah',
    created_at: '2023-07-26T09:04:14+07:00',
    updated_at: '2023-07-26T10:44:14+07:00'
  },
  {
    id: '1005',
    nama: 'Tri Nur',
    alamat: 'Sentiong',
    tanggal_lahir: '18 Juni 1989',
    jenis_kelamin: 'Laki-laki',
    status: 'menikah',
    created_at: '2023-07-26T08:12:14+07:00',
    updated_at: '2023-07-26T09:20:14+07:00'
  },
  {
    id: '1007',
    nama: 'Ali Tirta',
    alamat: 'Senen',
    tanggal_lahir: '24 Juli 1988',
    jenis_kelamin: 'Laki-laki',
    status: 'menikah',
    created_at: '2023-07-26T16:12:14+07:00',
    updated_at: '2023-07-26T17:20:14+07:00'
  }
];

export const rekamMedis = [
  {
    id: '1',
    id_dokter: '966',
    id_pasien: '1001',
    diagnosa: ['COVID 19'],
    medications: ['lisinopril (Zestril)', 'metoprolol (Lopressor)'],
    created_at: '2023-07-26T10:20:14+07:00',
    updated_at: '2023-07-26T12:44:14+07:00'
  },
  {
    id: '2',
    id_dokter: '968',
    id_pasien: '1002',
    diagnosa: ['Asthma', 'Chest pain'],
    medications: ['levothyroxine (Synthroid)', 'amlodipine (Norvasc)'],
    created_at: '2023-07-26T10:20:14+07:00',
    updated_at: '2023-07-26T12:44:14+07:00'
  },
  {
    id: '3',
    id_dokter: '966',
    id_pasien: '1003',
    diagnosa: ['Arthritis'],
    medications: ['atorvastatin (Lipitor)'],
    created_at: '2023-07-26T10:20:14+07:00',
    updated_at: '2023-07-26T12:44:14+07:00'
  },
  {
    id: '4',
    id_dokter: '969',
    id_pasien: '1004',
    diagnosa: ['Asthma'],
    medications: ['metformin (Glucophage)'],
    created_at: '2023-07-26T10:20:14+07:00',
    updated_at: '2023-07-26T12:44:14+07:00'
  },
  {
    id: '5',
    id_dokter: '968',
    id_pasien: '1005',
    diagnosa: ['Chest pain'],
    medications: ['simvastatin (Zocor)', 'atorvastatin (Lipitor)'],
    created_at: '2023-07-26T10:20:14+07:00',
    updated_at: '2023-07-26T12:44:14+07:00'
  },
  {
    id: '6',
    id_dokter: '966',
    id_pasien: '1007',
    diagnosa: ['COVID 19'],
    medications: ['omeprazole (Prilosec)'],
    created_at: '2023-07-26T10:20:14+07:00',
    updated_at: '2023-07-26T12:44:14+07:00'
  },
  {
    id: '7',
    id_dokter: '967',
    id_pasien: '1001',
    diagnosa: ['Common cold'],
    medications: ['amlodipine (Norvasc)'],
    created_at: '2023-07-27T10:20:14+07:00',
    updated_at: '2023-07-27T12:44:14+07:00'
  },
  {
    id: '8',
    id_dokter: '966',
    id_pasien: '1002',
    diagnosa: ['Flu'],
    medications: ['metoprolol (Lopressor)'],
    created_at: '2023-07-27T10:20:14+07:00',
    updated_at: '2023-07-2T12:44:14+07:00'
  }
];
