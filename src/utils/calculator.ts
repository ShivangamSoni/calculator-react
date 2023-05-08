export type Operator = '+' | '-' | '*' | '/';

const Operations: Record<Operator, (a: number, b: number) => number> = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
};

export default function calculate(
  firstOperand: number,
  secondOperand: number,
  operator: Operator
) {
  return Operations[operator](firstOperand, secondOperand);
}
