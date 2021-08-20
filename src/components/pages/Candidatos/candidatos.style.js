import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        padding: '35px',
        alignItems: 'center'
    },
    candidatos: {
        display: 'flex',
        flexDirection: 'row',
        padding: '35px',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'center'
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
    }
}))

export default useStyles