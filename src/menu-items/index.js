// import pages from './pages';
// import dashboard from './dashboard';
// import utilities from './utilities';
// import support from './support';
import { HomeOutlined, TeamOutlined, UserOutlined, MedicineBoxOutlined, AccountBookOutlined } from '@ant-design/icons';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  items: [
    {
      id: 'navigation',
      title: 'Navigation',
      type: 'group',
      children: [
        {
          id: 'home',
          title: 'Home',
          type: 'item',
          url: '/home',
          icon: HomeOutlined
        },
        // {
        //   id: 'dashboard',
        //   title: 'Dashboard',
        //   type: 'item',
        //   url: '/dashboard',
        //   icon: DashboardOutlined
        // },
        {
          id: 'pegawai',
          title: 'Pegawai',
          type: 'item',
          url: '/pegawai',
          icon: TeamOutlined
        },
        {
          id: 'pasien',
          title: 'Pasien',
          type: 'item',
          url: '/pasien',
          icon: UserOutlined,
          breadcrumbs: false
        },
        {
          id: 'rekam-medis',
          title: 'Rekam Medis',
          type: 'item',
          url: '/rekam-medis',
          icon: MedicineBoxOutlined,
          breadcrumbs: false
        },
        // {
        //   id: 'persediaan',
        //   title: 'Persediaan',
        //   type: 'item',
        //   url: '/persediaan',
        //   icon: BookOutlined,
        //   breadcrumbs: false
        // },
        {
          id: 'billing',
          title: 'Billing',
          type: 'item',
          url: '/billing',
          icon: AccountBookOutlined,
          breadcrumbs: false
        }
      ]
    }
    // dashboard,
    // pages,
    // utilities,
    // support
  ]
};

export default menuItems;
