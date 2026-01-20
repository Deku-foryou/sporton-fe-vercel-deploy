"use client"

import { useState } from "react";
import CardWithHeader from "../ui/card-with-header";

const OrderInformation = () => {
   const [formData, setFormData] = useState({
      customerName: "",
      customerContact: "",
      customerAddress: ""
   })

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({...formData, [e.target.name]: e.target.value})
   }
   return (
     <CardWithHeader title="Order Information">
 <div className="p-5">
            <div className="input-group">
               <label htmlFor="customerName">Full Name</label>
               <input type="text" placeholder="Type Your Full Name" id="customerName" name="customerName" value={formData.customerName} onChange={handleInputChange} />
            </div>
             <div className="input-group">
               <label htmlFor="customerContact">Whatsapp Number</label>
               <input type="number" placeholder="+62xxx" id="customerContact" name="customerContact" 
               value={formData.customerContact} onChange={handleInputChange}/>
            </div>
             <div className="input-group">
               <label htmlFor="customerAddress">Shipping Address</label>
               <textarea placeholder="Example Street, 18, West Jakarta, Indonesia, 66521" id="customerAddress" name="customerAddress" 
               value={formData.customerAddress} onChange={handleInputChange} rows={7} />
            </div>
         </div>
      </CardWithHeader>
   );
};

export default OrderInformation;