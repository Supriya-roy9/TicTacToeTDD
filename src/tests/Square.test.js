import { render} from "@testing-library/react";
import Square from "../components/Square";

describe("Square.js",()=>{
    it("Should contain a button",()=>{
        const square = render(<Square />);
        const button=square.getByTestId("square");
        expect(button).not.toBeNull();
    });
})