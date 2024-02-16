import { fireEvent, render,screen } from "@testing-library/react";
import Fun from './Fun';

test("Function component method testing case 1",()=>{
    render(<Fun/>);
    const btn=screen.getByTestId("btn1");
    fireEvent.click(btn);
    expect(screen.getByText("Hello")).toBeInTheDocument();
})

test("Get By role",()=>{
    render(<Fun/>);
    let inputFeild = screen.getByRole("textbox");
    // const btn = screen.getByText("Update");
    // expect(btn).toBeInTheDocument();
    expect(inputFeild).toBeInTheDocument();
    expect(inputFeild).toHaveValue("Hello");
    expect(inputFeild).toBeDisabled();
})

test("Get All By Role",()=>{
    render(<Fun/>);
    let btns = screen.getAllByRole('button');
    expect(btns[0]).toBeInTheDocument();
    let options= screen.getAllByRole('option')
    for (let i=0;i<btns.length;i++)
    {
        expect(btns[i]).toBeInTheDocument();
    }
    for (let i=0;i<options.length;i++)
    {
        expect(options[i]).toBeInTheDocument();
    }
})

test("Get By Label",()=>{
    render(<Fun/>)
    const input = screen.getByLabelText("Username:");
    expect(input).toBeInTheDocument();
})


test("checkbox testing using getBylabel",()=>{
    render(<Fun/>);
    const checkbox = screen.getByLabelText('Skills');
    expect(checkbox).toBeInTheDocument();
})
