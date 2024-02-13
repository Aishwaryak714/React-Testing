import { screen,render, fireEvent } from "@testing-library/react";
import Form from "./Form";

beforeAll(()=>{
        console.log("*********");
})

beforeEach(()=>{
        console.log("+++++++++");
})

afterAll(()=>{
        console.log("_____after_all______");
})

afterEach(()=>{
        console.log("_____after_each______");
})

test("testing onChange event case 1",()=>{
        console.log("1");
        render(<Form/>);
        let input = screen.getByPlaceholderText("Enter userName here");
         fireEvent.change(input,{target:{value:'a'}});
         expect(input.value).toBe("a");
})

test("testing Click Event case 2",()=>{
        console.log("2");
        render(<Form/>);
        const btn = screen.getByRole("button")
        fireEvent.click(btn);
        expect(screen.getByText("Updated Name")).toBeInTheDocument();
})


test("Snapshot Testing for Form Component",()=>{
     const container = render(<Form/>);
     expect(container).toMatchSnapshot();

})