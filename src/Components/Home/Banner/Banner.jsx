
const Banner = () => {
    return (
        <div className="bg-no-repeat h-[80vh] w-full rounded bg-[#FFFFFFF2]  " style={{backgroundImage:'url(/4.jpg)',
        opacity:'0.5'}}>
            <div className="text-center relative ">
            <h1 className="text-4xl font-bold  pt-52 pb-4">I Grow By Helping People In Need</h1>
            <input type="text" className="px-6 rounded border-none py-2" />
            <button className="p-2 bg-rose-800 text-white rounded">Search</button>
            </div>
        </div>
    );
};

export default Banner;