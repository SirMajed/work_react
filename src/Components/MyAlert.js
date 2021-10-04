import { Alert } from '@material-ui/lab';
 
const MyAlert = (props) => {
    return (
        <Alert severity={props.type} color={props.color}>
        <p className="text-xl">{props.message}</p>
      </Alert>  
    );
}
 
export default MyAlert;