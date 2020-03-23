export default {
  palette: {
    primary: {
      light: '#33c9dc',
      main: '#00bcd4',
      dark: '#008394',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff6333',
      main: '#ff3d00',
      dark: '#b22a00',
      contrastText: '#fff',
    },
  },
  spreadThis: {
    typography: {
      useNextVarianta: true,
    },
    form: {
      textAlign: 'center',
    },
    logo: {
      maxWidth: '150px',
      margin: '5vh auto',
    },
    pageTitle: {
      margin: '10px auto',
    },
    textField: {
      margin: '10px auto',
    },
    button: {
      marginTop: '2vh',
      position: 'relative',
    },
    progress: {
      position: 'absolute',
      left: '0',
      right: '0',
      margin: 'auto',
    },
    customError: {
      color: 'red',
      fontSize: '0.8rem',
    },
    registerText: {
      marginTop: '20px',
      fontSize: '12px',
      color: 'gray',
    }
  },
  visibleSeparator: {
    width: '100%',
    borderBottom: '1px solid rgba(0,0,0,0.1)',
    marginBottom: '20px'
  },
  invisibleSeparator: {
    border: 'none',
    margin: 4
  },
}