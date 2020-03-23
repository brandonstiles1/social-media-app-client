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
  card: {
    display: 'flex',
    marginBottom: 20
  },
  cardContent: {
    width: '100%',
    flexDirection: 'columm',
    padding: 25
  },
  cover: {
    minWidth: 200,
    objectFit: 'cover'
  },
  handle: {
    width: 60,
    height: 18,
    backgroundColor: '#00bcd4',
    marginBottom: '7px'
  },
  date: {
    height: 14,
    width: 100,
    backgroundColor: 'rgba(0,0,0,0.3)',
    marginBottom: 10,
  },
  fullLine: {
    height: 15,
    width: '90%',
    marginBottom: 10,
    backgroundColor: 'rgba(0,0,0,0.7)'
  },
  halfLine: {
    height: 15,
    width: '50%',
    backgroundColor: 'rgba(0,0,0,0.7)',
    marginBottom: 10
  },
  paper: {
    padding: 20
  },
  profile: {
    '& .image-wrapper': {
      textAlign: 'center',
      position: 'relative',
    },
    '& .profile-image': {
      width: 200,
      height: 200,
      objectFit: 'cover',
      maxWidth: '100%',
      borderRadius: '50%'
    },
    '& .profile-details': {
      textAlign: 'center',
      '& spawn, svg': {
        verticalAlign: 'middle'
      },
      '& a': {
        color: '#00bcd4',
      }
    },
    '& hr': {
      border: 'none',
      margin: '0 0 10px 0'
    },
  },
}