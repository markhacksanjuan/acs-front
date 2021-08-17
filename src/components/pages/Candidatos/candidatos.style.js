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
    }
}))

export default useStyles