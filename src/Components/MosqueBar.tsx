import { Link } from "react-router-dom";

interface MosqueData {
    Image: string;
    adress: string;
    // Add other properties here as needed
  }
  
  interface IProps {
    data: MosqueData; // Use the appropriate type for your data
  }
  
  const MosqueBar = ({ data }: IProps) => {
    return (
      <div className="flex flex-col space-y-3">
        <img src={data.Image} alt="" />
        <p>{data.adress}</p>
        <Link to='/details' className="btn btn-sm bg-textGreen border-none text-white text-xs hover:bg-textGreen/80 w-fit">
          Details
        </Link>{" "}
      </div>
    );
  };
  
  export default MosqueBar;
  