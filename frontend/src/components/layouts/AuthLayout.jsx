import React from 'react'
import CARD_2 from "../../assets/images/card2.png";
import CARD_3 from "../../assets/images/card3.svg";
import { LuTrendingUpDown } from "react-icons/lu";
const AuthLayout = ({children}) => {
  return <div className="flex">
      <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
        <h2 className="text-lg font-medium text-black">Expense Tracker</h2>
        {children}
      </div>

      <div className="hidden md:block w-[40vw] h-screen bg-blue-50 bg-auth-bg-img bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative">
        <div className="w-48 h-48 rounded-[40px] bg-blue-500 absolute -top-7 -left-5"/>
            <div className="w-48 h-56 rounded-[40px] border-[20px] border-fuchsia-600 absolute top-[30%] -right-10"/>
                <div className="w-48 h-48 rounded-[40px] bg-blue-500 absolute -bottom-7 -left-5"/>

                <div className="grid grid-cols-1 z-20">
                    <StasInfoCard
                    icon={<LuTrendingUpDown />}
                    label="Track Your Income And Expenses"
                    value="9,30000"
                    color="bg-primary"
                    />
                    </div>

                

             <img
  src={CARD_3}
  className="w-64 lg:w-[80%] absolute bottom-10 rounded-3xl shadow-xl shadow-blue-400/20"
/>

</div>
      </div>


   
  
}

export default AuthLayout
 const StasInfoCard = ({icon, label, value, color}) => {
    return <div className="flex gap-6 bg-white p-4 rounded-xl shadow-md shadow-purple-400/10 border border-gray-200/50 z-10">
       <div>
        {icon}
        </div>
        <div>
            <h6 className="text-xs text-gray-500 mb-1">{label}</h6>
            <span className="text-[20px]">₹{value}</span>
</div>
        </div>
 }