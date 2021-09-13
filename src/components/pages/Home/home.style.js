import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '100px',
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        width: '350px',
        margin: 'auto',
    },
    submit: {
        backgroundColor: theme.palette.button.azul,
        color: theme.palette.text.blanco,
        fontWeight: 'bold',
        '&:hover': {
            backgroundColor: theme.palette.text.blanco,
            color: theme.palette.button.azul,
            border: `2px solid ${theme.palette.button.azul}`,
            boxShadow: 'none'
        },
        boxShadow: 'none',
        border: `2px solid ${theme.palette.text.blanco}`
    },
    error: {
        color: '#f20',
        margin: '10px 0'
    },
    inputError: {
        border: '1px solid #f20'
    }
}))

export default useStyles