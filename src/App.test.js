import { render,screen } from "@testing-library/react";
import App from './App';

test("First react test case",()=>{
  render(< App />)
  const text = screen.getByText("First React Test Case")
  const title = screen.getByTitle("imageTest")
  expect(text).toBeInTheDocument();
  expect(title).toBeInTheDocument();
})

test("InputBox Here",()=>{
  render(<App/>);
  let inputBox = screen.getByRole("textbox");
  let inputplaceholder = screen.getByPlaceholderText("Enter Name Here");
  expect(inputBox).toBeInTheDocument();
  expect(inputplaceholder).toBeInTheDocument();
  expect(inputBox).toHaveAttribute("name","username");
  expect(inputBox).toHaveAttribute("id","userID");
})
//This is helpful when you want to focus on specific subset of test during developement or debugging.
describe.only("UI test case Grouping and testing",()=>{
  test("Testing using describe case 1",()=>{
     render(<App/>)
     let inputBox = screen.getByRole("textbox");
     expect(inputBox).toBeInTheDocument();
     expect(inputBox).toHaveAttribute("name","username");
  })

  test("Testing using describe case 2",()=>{
    render(<App/>)
    let inputBox = screen.getByRole("textbox");
    let inputplaceholder = screen.getByPlaceholderText("Enter Name Here");
    expect(inputplaceholder).toBeInTheDocument();
    expect(inputBox).toHaveAttribute("id","userID");
 })
})

//This is helpful when you want to focus on specific subset ot test during development or debugging.
describe.skip("API test case Grouping and testing",()=>{
  test("Testing using describe case 1",()=>{
     render(<App/>)
     let inputBox = screen.getByRole("textbox");
     expect(inputBox).toBeInTheDocument();
     expect(inputBox).toHaveAttribute("name","username");
  })

  test("Testing using describe case 2",()=>{
    render(<App/>)
    let inputBox = screen.getByRole("textbox");
    let inputplaceholder = screen.getByPlaceholderText("Enter Name Here");
    expect(inputplaceholder).toBeInTheDocument();
    expect(inputBox).toHaveAttribute("id","userID");
 })
})

