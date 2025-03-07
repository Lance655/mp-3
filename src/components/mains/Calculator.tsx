import styled from "styled-components";
import {useState} from 'react';

const StyledCalculator = styled.div`
    background-color: lightgray;
    padding: 5%;
    margin: auto;
    margin-top: 2%;
    border: 20px outset lightgray;
    border-bottom-left-radius: 80px;
    border-bottom-right-radius: 80px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    width: 80%;
`;

const StyledInputsWrapper = styled.div`
    background-color: black;
    padding-bottom: 7%;
    padding-top: 7%;
    margin: 3% auto;
    border: 12px inset sandybrown;
    border-radius: 20px;
`;

const StyledInputs = styled.div`
    display: flex;
    flex-direction: row;
    margin: auto;
`;

const StyledInput = styled.input`
    width: 20%;
    margin: auto;
    font-family: "Press Start 2P", serif;
    font-size: calc(20px + 0.5vw);
`;

const StyledResultP = styled.p<{ isNegative: boolean }>`
    color: ${(props) => (props.isNegative ? "red" : "green")};
    padding-top: 5%;
    text-align: center;
    font-family: "Press Start 2P", serif;
`;

const StyledOperations = styled.div`
    margin: auto;
    width: 50%;
    text-align: center;
    padding: 5%;
`;

const StyledOperationsWrapper = styled.div`
    background-color: gray;
    border: 10px inset sandybrown;
    border-top-left-radius: 80px;
    border-top-right-radius: 80px;
    border-bottom-left-radius: 80px;
    border-bottom-right-radius: 80px;
    margin: auto;
`;

const StyledOperationsButton = styled.button`
    padding: 10%;
    margin: 5%;
    border: 5px outset white;
    font-family: "Press Start 2P", serif;
    font-size: calc(10px + 0.5vw);
`;

const StyledClearButton = styled.button`
    padding: 10%;
    margin: 5%;
    font-family: "Press Start 2P", serif;
    font-size: calc(10px + 0.5vw);
    background-color: red;
    color: white;
    border: 5px outset red;
`;

const StyledLabel = styled.label`
    display: none;
`;



export function Calculator() {
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [result, setResult] = useState("");

    const add = () => setResult(String( Number(input1) + Number(input2) ) );

    const subtract = () => setResult(String (Number(input1) - Number(input2)) );

    const multiply = () => setResult(String (Number(input1) * Number(input2)) );

    const divide = () => setResult(String (Number(input2) !== 0 ? Number(input1) / Number(input2) : "Nan") );

    const power = () => {
        const x1 = Number(input1);
        const x2 = Number(input2);
        let tempInput = x2;

        if (x2 < 0) {
            tempInput *= -1;
        }

        let product = 1;
        for (let i = 0; i < tempInput; i++) {
            product *= x1;
        }

        if (x2 < 0) {
            product = 1 / product;
        }

        setResult(
            String(product)
        );
    }

    const clearInputs = () => {
        setInput1("");
        setInput2("");
        setResult("");
    };

    return (

        <StyledCalculator>
            <p>TEXAS-INSTRUMENTS TI-84</p>

            <StyledInputsWrapper>
                <StyledInputs>
                    <StyledLabel htmlFor="input-1">First Number:</StyledLabel>
                    <StyledInput
                        type="text"
                        id="input-1"
                        value={input1}
                        onChange={(e) => setInput1(e.target.value)}
                        />
                    <StyledLabel htmlFor="input-2">Second Number:</StyledLabel>
                    <StyledInput
                        type="text"
                        id="input-2"
                        value={input2}
                        onChange={(e) => setInput2(e.target.value)}/>
                </StyledInputs>

                <div className="result">
                    <StyledResultP isNegative={Number(result) < 0}>
                        {result}
                    </StyledResultP>
                </div>

            </StyledInputsWrapper>

            <StyledOperationsWrapper>
                <StyledOperations>
                    <StyledOperationsButton onClick={add}>+</StyledOperationsButton>
                    <StyledOperationsButton onClick={subtract}>-</StyledOperationsButton>
                    <StyledOperationsButton onClick={multiply}>x</StyledOperationsButton>
                    <StyledOperationsButton onClick={divide}>/</StyledOperationsButton>
                    <StyledOperationsButton onClick={power}>**</StyledOperationsButton>

                    <div className="clear">
                        <StyledClearButton onClick={clearInputs}>C</StyledClearButton>
                    </div>
                </StyledOperations>
            </StyledOperationsWrapper>

        </StyledCalculator>

    );
}