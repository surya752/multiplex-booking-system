import React from "react";
import "./payment.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Payment =() =>{

    const successMessage = () => {
    toast.success("Payment Successfull");
    
      };
    return(
        <div className="container752">
 <div className="Pay">
    <form action="">

        <div className="row752">
            <div className="col752">

                <h3 className="title752">payment</h3>

                <div className="inputBox752">
                
                </div>
                <div className="inputBox752">
                    <span>Name on card :</span>
                    <input type="text" placeholder="Name on card"/>
                </div>
                <div className="inputBox752">
                    <span>credit card number :</span>
                    <input type="number" placeholder="1111-2222-3333-4444"/>
                </div>
                <div className="inputBox752">
                    <span>Exp month :</span>
                    <input type="text" placeholder="january"/>
                </div>
                <div className="flex752">
                    <div className="inputBox752">
                        <span>Exp year :</span>
                        <input type="number" placeholder="2022"/>
                    </div>
                    <div className="inputBox752">
                        <span>CVV :</span>
                        <input type="text" placeholder="123"/>
                    </div>
                </div>

            </div>
    
        </div>
        <div>

        <input onClick={successMessage}  type="submit" value="proceed to checkout" className="submit-btn"/>
        <ToastContainer />
        
        </div>
    </form>
    </div>
</div>    
    )
};
export default Payment;