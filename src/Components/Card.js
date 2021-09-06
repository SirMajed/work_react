import { Link } from 'react-router-dom';

const Card = (props) => {

    // const handleClick = ()=>{
    //     alert(props.message);
    // }
    return (

            <div className="container w-full bg-white rounded-xl shadow-md  hover:shadow-lg transform hover:scale-60 duration-500">
                <div className="text-center relative py-12">
                <h1 className="mb-4 text-2xl font-sans font-semibold text-gray-700 hover:text-gray-900">{props.functionName}</h1>
                {/* <p class="text-lg text-gray-700 hover:text-gray-900">Example bla...</p> */}
                <Link to={`/functions/${props.id}`} params={{ name:"Majed" }}>
                <button  className="py-2 w-3/4 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Try {props.functionName}</button>
                </Link>
                
                </div>
            </div>

    );
}
 
export default Card;