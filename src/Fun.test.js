import { fireEvent, render,screen } from "@testing-library/react";
import Fun from './Fun';

test("Function component method testing case 1",()=>{
    render(<Fun/>);
    const btn=screen.getByTestId("btn1");
    fireEvent.click(btn);
    expect(screen.getByText("Hello")).toBeInTheDocument();
})