import React, { useState } from 'react'
import Input from '../layouts/Inputs/Input';
import EmojiPickerPopup from '../EmojiPickerPopup';
const AddIncomeForm = ({onAddIncome}) => {
    const [income, setIncome] = useState({
        source: "",
        amount: "",
        date: "",
        icon: "",
    });

    const handleChange = (key, value) => setIncome({...income, [key]:value});
  return (
    <div>

      <EmojiPickerPopup
           icon={income.icon}
           onSelect={(selctedIcon) => handleChange("icon", selctedIcon)}
           />



      <Input
        value={income.source}
        onChange={({ target }) => handleChange("source", target.value)}
        label="Income Source"
        placeholder="Freelance, Salary, etc"
        type="text"
        />

        <Input 
           value={income.amount}
           onChange={({ target }) => handleChange("amount", target.value)} 
           label="Amount"
           placeholder=""
           type="number"
           />

           <Input
             value={income.date}
             onChange={({ target }) => handleChange("date", target.value)}
             label="Date"
             placeholder=""
             type="date"

             />

             <div className="flex justify-end mt-6">
                <button
                 type="button"
                 className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400"
                 onClick={() =>onAddIncome(income)}
                 >
                    Add Income
                 </button>
             </div>
    </div>
  )
}

export default AddIncomeForm
