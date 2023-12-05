import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationLoaderCard from "../DonationLoaderCard/DonationLoaderCard";

const DonationLoader = () => {
    const{id} = useParams()
    const [donation, setDonation] = useState({})
    const donations = useLoaderData()

    useEffect(()=>{
        const findDonation = donations?.find(donation => donation.id === id)
        setDonation(findDonation)
    },[id, donations])
    console.log(donation)
    return (
        <div>
            <DonationLoaderCard donation = {donation}></DonationLoaderCard>
        </div>
    );
};

export default DonationLoader;