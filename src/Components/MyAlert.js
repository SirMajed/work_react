import { Alert } from '@material-ui/lab';
 
const MyAlert = (props) => {
    return (
        <Alert severity={props.type} color={props.color}>
        <p className="text-xl">{props.message.message}</p>
        {props.message.all && props.message.all.map((fun)=>(
          <li>{fun.name + ' - ' + fun.status}</li>
        ))}
      </Alert>  
    );
}
 
export default MyAlert;