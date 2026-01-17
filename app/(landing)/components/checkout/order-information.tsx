import CardWithHeader from "../ui/card-with-header";

const OrderInformation = () => {
   return (
     <CardWithHeader title="Order Information">
 <div className="p-5">
            <div className="input-group">
               <label htmlFor="full_name">Full Name</label>
               <input type="text" placeholder="Type Your Full Name" id="full_name" />
            </div>
             <div className="input-group">
               <label htmlFor="wa_number">Whatsapp Number</label>
               <input type="text" placeholder="+62xxx" id="wa_number" />
            </div>
             <div className="input-group">
               <label htmlFor="shipping_address">Shipping Address</label>
               <textarea placeholder="Example Street, 18, West Jakarta, Indonesia, 66521" id="shipping_address" rows={7} />
            </div>
         </div>
      </CardWithHeader>
   );
};

export default OrderInformation;