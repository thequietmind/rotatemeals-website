export const darkTheme = {
  palette: {
    primary: { main: "#3B8CFF" },
    secondary: { main: "#9B7BFF" },
    background: { default: "#050A12", paper: "#0F1724" },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#0B1626',
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#083B7A',
        }
      }
    }
  },
};