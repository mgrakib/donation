import { Link } from "react-router-dom";
import swal from "sweetalert";
const DonationLoaderCard = ({donation}) => {

    const{id,img,title,  text_button_bg, description} = donation || {}

    const handleAddDonation =() =>{
        const addedDonations =[]

        const donationItems = JSON.parse(localStorage.getItem('donations'))
        if(!donationItems){
            addedDonations.push(donation)
            localStorage.setItem('donations', JSON.stringify(addedDonations))
            swal("Good job!", "Donation added successfully!", "success")
        }
        else{
            const isExist = donationItems.find(donation => donation.id === id)
            if(!isExist){
                addedDonations.push(...donationItems, donation)
                localStorage.setItem('donations', JSON.stringify(addedDonations))
                swal("Good job!", "Donation added successfully", "success")
            }
            else{
                swal("Oops...", "already donated", "error");
            }
        }
    }
 
    return (
        <div>
            <div>
            <img className="h-screen w-full rounded-xl z-0" src={img} alt="" />
            <div className="bg-[#BBB080] z-10">
            <Link><button onClick={handleAddDonation} className="absolute -mt-24 ml-14  p-4 text-white rounded-xl" style={{backgroundColor:`${text_button_bg}`}}> Donate $290</button></Link>
            </div>
            </div>
            <div className="my-6">
                <h2 className="text-2xl font-bold pb-4">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default DonationLoaderCard;