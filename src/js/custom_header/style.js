const drawerWidth = 240;
export const styles = theme => ({
  root: {
      display: 'flex',
  },
  toolBar: {
      minHeight: '56px',
  },
  drawer: {
      flexShrink: 0,
  },
  drawer_none: {
      display: 'none',
  },
  topBar: {
      zIndex: theme.zIndex.drawer + 1,
      backgroundColor: '#fff',
      borderBottom: '1px solid #eee',
  },
  menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
          display: 'none',
      },
  },
  menuIcon: {
      fontSize: '2.4rem'
  },
  aLink: {
     color: '#000000',
     fontSize: '1.6rem',
  },
  searchIcon: {
      fontSize: '2.4rem'
  },
  drawerPaper: {
      width:drawerWidth,
      overflowY: 'auto !important',
      marginTop: '55px',
      '&::-webkit-scrollbar': {
        width: '4px',
        height: '4px',
        backgroundColor: 'transparent',
      },
      '&::-webkit-scrollbar-track': {
        backgroundColor: 'transparent',
      },
      '&::-webkit-scrollbar-thumb': {
        borderRadius: '4px',
        backgroundColor: 'transparent',
      },
      '&:hover::-webkit-scrollbar-track': {
        backgroundColor: 'transparent',
      },
      '&:hover::-webkit-scrollbar-thumb': {
        backgroundColor: '#c1c1c1',
      }
  },
  drawerPaperMin: {   
    width: drawerWidth,
  },
  titleMenu: {
      display: 'inline-block',
      paddingTop: '10px',
      paddingBottom: '10px',
      marginLeft: '15px',
      marginRight: '15px',
      borderBottom: '4px solid transparent',
      transition: 'border .3s',
      '&:hover': {
          borderColor: '#47ACDD'
      }
  },
  titleMenuActived: {
    borderColor: '#47ACDD'
  }
});

export const stylesB = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  subHeader: {
    paddingLeft: '8px',
  },
  subHeaderSelected: {
    borderLeft: '4px solid #47ACDD',
    backgroundColor: '#e6f7ff'
  },
  article: {
    color: '#87CEFA',
  },
  textPrimary: {
    fontFamily: 'Microsoft YaHei, 微软雅黑',
    fontSize: '14px'
  },
  loading: {
    animation: '$rotate 0.75s 0s linear infinite',
    color: "#fff",
    display: 'inline-block',
    height: '20px',
    width: '20px',
    border: '2px solid #000000',
    borderRadius: '100%',
    borderBottomColor: 'transparent',
    background: 'transparent !important',
    margin: '2px',
    
  },
  "@keyframes rotate": {
    "0%": {  
      transform: "rotate(0deg)"
    },
    "50%": {
      transform: "rotate(180deg)"
    },
    "100%": {
      transform: "rotate(360deg)"
    }
  },
});