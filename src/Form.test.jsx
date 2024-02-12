import { screen,render, fireEvent } from "@testing-library/react";
import Form from "./Form";

test("testing onChange event",()=>{
        render(<Form/>);
        let input = screen.getByPlaceholderText("Enter userName here");
         fireEvent.change(input,{target:{value:'a'}});
         expect(input.value).toBe("a");
})