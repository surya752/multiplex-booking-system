import { experimental_extendTheme } from "@mui/material";
import {fireEvent, render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Input from "./input"; 
describe("Input component", () => {
   it("rendered input", () => {
     const {getByTestId} = render(<Input />); 
     const input = getByTestId("searchbar");
expect(input).toBeTruthy();
});
// it("render sensitive data", () =>{
//      const {getByTestId} = render(<Input showDiv={true} />);
//      const div= getByTestId("sensitiveData");
// expect(div).toBeTruthy();
// });
// it("render sensitive data", () => {
//      const {queryByTestId} = render(<Input showDiv={false} />);
//      const div = queryByTestId("sensitiveData"); 
//      expect(div),toBeFalsy();
//  });
//  it("change on input causes change on div", async()=>{
//      await act(async ()=>{
//          const {queryByTestId }= render(<Input/>);
//          const input = queryByTestId("searchbar");
//          const search = queryByTestId("displaySearch");
//          const name = "Hello Uma";
//          await fireEvent.change(input, {target:{ value: name}});
//          expect(search.innerHTML).toBe(name);
//      });
//  });
});


