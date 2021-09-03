import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    list: {
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'row'
    },
    link: {
        textDecoration: 'none'
    },
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '0 35px 0 35px',
        borderBottom: '1px solid black',
        color: '#000'
    },
    item: {
        color: 'black',
        margin: '0 10px 0 10px',
        '&:hover': {
           cursor: 'pointer',
           color: '#555'
        },
        '&:visited': {
            color: 'black'
        }
    }
}))
export default useStyles