import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '35px'
    },
    form: {
        width: '750px'
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
    checkbox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    label: {
        fontWeight: 'bold',
        color: theme.palette.color.gris,
        marginBottom: '5px'
    },
    radio: {
        display: 'flex',
        justifyContent: 'flex-start'
    }
}))

export default useStyles