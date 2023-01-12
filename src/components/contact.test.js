import {render} from "@testing-library/react";
import Contact from "./Contact";


describe("Message component", ()=>{
    it("rendered Message", ()=>{
        const {getByTestId} = render(<Contact/>);
        const textarea = getByTestId("para");
        expect(textarea).toBeTruthy();
    });
    // it("rendered Message", ()=>{
    //     const {getByTestId} = render(<Contact/>);
    //     const textarea = getByTestId("para");
    //     expect(textarea).toBeFalsy();
    // });
   
})