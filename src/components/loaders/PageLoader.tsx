import { RotatingLines } from 'react-loader-spinner'

const PageLoader = () => (
        <div style={{display:"grid",placeItems:"center"}} >
            <RotatingLines
            visible={true}
            height="80"
            width="80"
            color="#39cdcc"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
            />
        </div>
);

export default PageLoader;
