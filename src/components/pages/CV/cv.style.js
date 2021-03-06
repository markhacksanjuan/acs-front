import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '35px'
    },
    card: {
        padding: '0 25px',
        borderRadius: '6px',
        width: '635px'
    },
    containerBtn: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '20px',
        justifyContent: 'space-between'
    },
    editBtn: {
        backgroundColor: theme.palette.button.azul,
        marginRight: '10px',
        color: theme.palette.text.blanco,
        '&:hover': {
            backgroundColor: theme.palette.text.blanco,
            border: `2px solid ${theme.palette.button.azul}`,
            color: theme.palette.button.azul,
            boxShadow: 'none'
        },
        fontWeight: 'bold',
        border: `2px solid ${theme.palette.text.blanco}`,
        boxShadow: 'none'
    },
    deleteBtn: {
        backgroundColor: theme.palette.button.delete,
        marginLeft: '10px',
        color: theme.palette.text.blanco,
        fontWeight: 'bold',
        '&:hover': {
            backgroundColor: theme.palette.text.blanco,
            border: `2px solid ${theme.palette.button.delete}`,
            color: theme.palette.button.delete,
            boxShadow: 'none'
        },
        border: `2px solid ${theme.palette.text.blanco}`,
        boxShadow: 'none'
    },
    head: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    edit: {
        '&:hover': {
            color: theme.palette.button.azul,
            cursor: 'pointer'
        }
    },
    form: {
        // marginTop: '35px'
    },
    label: {
        fontWeight: 'bold',
        color: theme.palette.color.gris,
        marginBottom: '5px'
    },

}))

export default useStyles