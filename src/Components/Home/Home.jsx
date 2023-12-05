import { useLoaderData } from "react-router-dom";
import DonationCard from "./DonationCard/DonationCard";
import Banner from "./Banner/Banner";

const Home = () => {
  const donations = useLoaderData()


    return (
        <div>
          <Banner></Banner>
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
       {
        donations.map((donation, idx) =><DonationCard key={idx} donation = {donation}></DonationCard>)
       }
         </div>
        </div>
    );
};

export default Home;