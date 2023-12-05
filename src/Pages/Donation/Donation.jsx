import { useEffect, useState } from "react";
import FinalDonation from "./FinalDonation/FinalDonation";


const Donation = () => {
    const [donations, setDonations] = useState([])
    const[isShow, setIsShow] = useState(false)

    useEffect(()=>{
        const donationItem = JSON.parse(localStorage.getItem('donations'))
        if(donationItem){
            setDonations(donationItem)
        }
    },[])
console.log(donations)
    return (
        <div>
            <div className="grid grid-cols-2 gap-5">
                {
                isShow ? donations.map((donation, idx) => <><FinalDonation key={idx} donation = {donation}></FinalDonation></>)
                :
                donations.slice(0,4).map((donation, idx) => <FinalDonation key={idx} donation = {donation}></FinalDonation>)
                }
            </div>

            <div className="text-center p-6">
            {
                donations.length > 4 && <button className="p-4 rounded bg-rose-500 text-white" onClick={() => setIsShow(!isShow)}>{isShow ? 'See Less': 'Show More'}</button>
            }
            </div>
           
        </div>
    );
};

export default Donation;