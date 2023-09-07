import { Puff } from "react-loader-spinner";



const Spinner = () => {
    return (
        <div
            className="
      h-[70vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    "
        >
            <Puff
                height="80"
                width="80"
                radius={1}
                color="#2896FF"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
};

export default Spinner;
