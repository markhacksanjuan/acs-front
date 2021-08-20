import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '35px',
    },
    card: {
        width: '350px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: `1px solid ${theme.palette.button.azul}`,
        marginRight: '10px',
        marginLeft: '10px',
        paddingBottom: '20px',
        borderRadius: '6px',
        paddingLeft: '20px',
        paddingRight: '20px'
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
    containerCards: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '20px',
    }
}))

export default useStyles