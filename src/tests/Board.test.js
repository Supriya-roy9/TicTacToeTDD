import { fireEvent,render } from "@testing-library/react";
import Board from "../components/Board";
describe("Board.js",()=>{

    it("Should render the initial game board", () => {
        const boardComponent=render(<Board/>);
        const square=boardComponent.getAllByTestId("square");
        
        expect(square).toHaveLength(9);
    });

    it("Should render X on first click",()=>{
        const boardComponent=render(<Board/>);
        const square=boardComponent.getAllByTestId("square");

        fireEvent.click(square[0]);

        expect(square[0].textContent).toBe("X");
    });

    it("Should render O on second click",()=>{
        const boardComponent=render(<Board/>);
        const square=boardComponent.getAllByTestId("square");
        
        fireEvent.click(square[0]);
        expect(square[0].textContent).toBe("X");
        fireEvent.click(square[1]);
        expect(square[1].textContent).toBe("O");
    });

    it("Should render X/O only on empty square click",()=>{
        const boardComponent=render(<Board/>);

        const square=boardComponent.getAllByTestId("square");

        fireEvent.click(square[0]);

        expect(square[0].textContent).toBe("X");

        fireEvent.click(square[0]);

        expect(square[0].textContent).toBe("X");

    });

it("Should display the next player",()=>{
    const boardComponent=render(<Board/>);
    const status=boardComponent.getByTestId("status"); 
    expect(status.textContent).toBe("Next player: X");
    const squares=boardComponent.getAllByTestId("square");
    fireEvent.click(squares[0]);
    expect(status.textContent).toBe("Next player: O");


});

it("Should be able to find the winner",()=>{
        const boardComponent=render(<Board/>);
        const squares=boardComponent.getAllByTestId("square");
        const status=boardComponent.getByTestId("status");        

        fireEvent.click(squares[1]);
        fireEvent.click(squares[2]);
        fireEvent.click(squares[4]);
        fireEvent.click(squares[5]);
        fireEvent.click(squares[7]);
    
    expect(status.textContent).toBe("Winner: X");
    });
});