import { RotatingLines } from 'react-loader-spinner'

const PageLoader = () => (
        <div style={{display:"grid",placeItems:"center"}} >
            <RotatingLines
             visible={true}
            //  height="96"
             width="96"
            //  color="grey"
             strokeWidth="5"
             animationDuration="0.75"
             ariaLabel="rotating-lines-loading"
            //  wrapperStyle={{}}
            //  wrapperClass=""
            />
        </div>
);

export default PageLoader;
