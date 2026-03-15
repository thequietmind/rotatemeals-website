export const lightTheme = {
  palette: {
    primary: { main: "#0C66D5" },
    secondary: { main: "#7A4DF5" },
    background: { default: "#F4F8FF", paper: "#FFFFFF" },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#E8F1FF',
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#0C66D5',
        }
      }
    }
  },
};