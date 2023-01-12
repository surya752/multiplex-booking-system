import {render} from "@testing-library/react";
import Footer from "./footer";



describe("links component", ()=>{
    it("rendered links", ()=>{
        const {getByTestId} = render(<Footer/>);
        const strong = getByTestId("para");
        expect(strong).toBeTruthy();
    });
   
})