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
            }
        }
    }
})

export default theme