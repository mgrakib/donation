import { Link } from "react-router-dom";

const DonationCard = ({donation}) => {
    const{id,img,title, category, category_bg, card_bg, text_button_bg, description,price} = donation || {}
 
    
    return (
        <div>
          <Link to={`/donations/${id}`}>
          <div 
  className="relative flex max-w-[24rem] flex-col overflow-hidden rounded-xl   text-gray-700 ">
  <div className="relative m-0 overflow-hidden text-gray-700 rounded-none shadow-none "  >
    <img className="w-full"
      src={img}
      alt="ui/ux review check" />
  </div>
  <div className="p-6" style={{backgroundColor: `${card_bg}`}}>
        <h4 style={{color: `${text_button_bg}`, backgroundColor: `${card_bg}`}} className="w-24 text-center rounded">
     {category}
    </h4>
    <p style={{color:`${text_button_bg}`}} className="block mt-3 font-sans text-xl antialiased  font-semibold leading-relaxed text-gray-700">
     {title}
    </p>
  </div>
  
          </div> 
          </Link>  
        </div>
    );
};

export default DonationCard;