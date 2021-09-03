import { createTheme } from '@material-ui/core'

const theme = createTheme({
    palette: {
        text: {
            blanco: 'rgb(255, 255, 255)',
            negro: 'rgb(0, 0, 0)'
        },
        button: {
            azul: '#62859d',
            delete: '#f33'
        },
        border: {
            gris: '#ccc'
        },
        hover: {
            delete: '#fcc'
        },
        color: {
            gris: '#555'
        }
    },
    overrides: {
        MuiInput: {
            root: {
                border: '1px solid #ccc'
            },
            fullWidth: {
                borderRadius: '6px',
                paddingLeft: '10px'
            }
        },
        MuiButton: {
            root: {
                marginTop: '16px',
                textTransform: 'initial'
            },
            contained: {
                backgroundColor: '#62859d',
                fontWeight: 'bold',
                color: '#FFF',
                '&:hover': {
                    backgroundColor: '#FFF',
                    boxShadow: 'none',
                },
                border: '2px solid #62859d'
            }
        },
        MuiLink: {
            root: {
                '&:visited': {
                    color: '#000'
                },
                '&:hover': {
                    color: '#000'
                }
            },
            underlineNone: {
                color: '#000',
                '&:visited': {
                    color: '#000'
                },
                '&:hover': {
                    color: '#555'
                }
            }
        }
    }
})

export default theme