import {render} from "@testing-library/react";
import Register from "./Register";

describe("Register component", ()=>{
    it("rendered Register button", ()=>{
        const {getByTestId} = render(<Register/>);
        const button = getByTestId("btnVerify");
        expect(button).toBeTruthy();
    });
   
    it("rendered ratio", ()=>{
      const {getByTestId} = render(<Register/>);
      const Field = getByTestId("ratioVerify");
      expect(Field).toBeTruthy();
  });
 
})