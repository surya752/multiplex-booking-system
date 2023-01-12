import {render} from "@testing-library/react";
import Signup from "./Signup";


describe("Login component", ()=>{
    it("rendered Login button", ()=>{
        const {getByTestId} = render(<Signup/>);
        const button = getByTestId("btnVerify");
        expect(button).toBeTruthy();
    });
   
})