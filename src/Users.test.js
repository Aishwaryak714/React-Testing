import {render,screen} from "@testing-library/react";
import Users from "./Users";
import renderer from "react-test-renderer";

test("Class Component method testing",()=>{
    const componentData = renderer.create(<Users/>).getInstance();
    expect(componentData.getUserList()).toMatch("User List")
})