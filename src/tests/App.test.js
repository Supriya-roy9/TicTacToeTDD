import { render, screen } from "@testing-library/react";
import App from "../components/App";
describe("App.js",()=>{
    it("Should render Board component",()=>{
        const app = render(<App />);
        const boardElement=app.getByTestId('board');
        expect(boardElement).toBeDefined();
    });
})