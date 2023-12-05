

const FinalDonation = ({donation}) => {
   
    const{img,title, category,  card_bg, text_button_bg,price} = donation || {}
   

   
    return (
        <div>
<div className="relative  flex items-center  rounded-xl bg-white text-gray-700  flex-row" style={{backgroundColor: `${card_bg}`}}>
  <div
    className="relative  m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
    <img
      src={img} className="object-cover w-[220px] h-[235px]" />
  </div>
  <div className="p-6">
    <h6
      className="block mb-4  text-sm font-semibold l w-14 rounded text-center" style={{color: `${text_button_bg}`, backgroundColor:`${card_bg}`}}>
      {category}
    </h6>
    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      {title}
    </h4>
    <p className="block mb-8 " style={{color: `${text_button_bg}`}}>
     {price}
    </p>
   <button className="text-white p-4 rounded" style={{backgroundColor: `${text_button_bg}`}}>View Details</button>
  </div>
</div>  

        </div>
    );
};

export default FinalDonation;