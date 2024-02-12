import { screen,render, fireEvent } from "@testing-library/react";
import Form from "./Form";

test("testing onChange event",()=>{
        render(<Form/>);
        let input = screen.getByPlaceholderText("Enter userName here");
         fireEvent.change(input,{target:{value:'a'}});
         expect(input.value).toBe("a");
})

test("testing Click Event",()=>{
        render(<Form/>);
        const btn = screen.getByRole("button")
        fireEvent.click(btn);
        expect(screen.getByText("Updated Name")).toBeInTheDocument();
})