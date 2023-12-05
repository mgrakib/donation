
import { PieChart, Pie, Cell } from 'recharts';
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";



const Statistics = () => {
   
    // const [donations, setDonations] = useState([])
    const donationData = useLoaderData()
    const [getDonations, setGetDonations] = useState([])
    const [donations, setDonations] = useState([])
   let donationPrice = 0
   let donationTotalPrice = 0
//    console.log(donations)
 useEffect(() =>{
setGetDonations(donationData)
 },[])

    useEffect(()=>{
        const donationItem = JSON.parse(localStorage.getItem('donations'))
        if(donationItem){
            setDonations(donationItem)
        }
    },[])
    getDonations.forEach(getDonation =>{
        donationTotalPrice = donationTotalPrice + parseInt(getDonation.price)
    }
    )
    console.log(donationTotalPrice)
donations.forEach(donation => {
   donationPrice = donationPrice + parseInt(donation.price);

});


const data = [
  { name: 'Total', value: donationTotalPrice },
  { name: 'Donation', value:donationPrice},
];

const COLORS = ['#00C49F', '#FFBB28'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent,  }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

return(
    <div className='flex justify-center'>
<PieChart width={500} height={500}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
    </div>
    

)
            }
export default Statistics;