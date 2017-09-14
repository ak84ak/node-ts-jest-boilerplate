import { Calculator } from './calculator';

describe('Calculator', () => {
    it('should add two numbers correctly', () => {
        const calculator = new Calculator();

        const sum = calculator.sum(1, 2);

        expect(sum).toBe(3);
    });
});
