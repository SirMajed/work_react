import { FunctionsOutlined } from "@material-ui/icons";
const Footer = () => {
    return (
            <div className="pb-6 ">
                <div className="mx-auto container pt-0 lg:pt-72 flex flex-col items-center justify-center ">
                   
                    <div className="w-9/12  h-0.5 bg-gray-50 rounded-full" />
                    <div className="flex justify-between items-center">
                    <div className="mt-5">
                    <div className="text-center">
                    <FunctionsOutlined/>
                    {/* <h1 className="text-xl font-italic">All right reserved</h1> */}
                    </div>
                    </div>
                        
                    </div>
                </div>
            </div>
    );
}
 
export default Footer;