import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '35px'
    },
    form: {
        width: '500px'
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
    }
}))
export default useStyles