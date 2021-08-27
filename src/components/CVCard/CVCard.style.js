import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({

    cvCard: {
        border: `1px solid ${theme.palette.border.gris}`,
        borderRadius: '6px',
        padding: '0 15px',
        marginRight: '10px',
        marginBottom: '20px',
        marginLeft: '10px',
        '&:hover': {
            backgroundColor: theme.palette.border.gris
        },
        // width: '200px'
    }

}))

export default useStyles