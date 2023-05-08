import { useReducer, useEffect } from 'react';

import calculate, { Operator } from '@utils/calculator';

import Button from '@components/Button';

type CalculatorAction =
  | {
      type: 'SET_NUMBER';
      payload: number;
    }
  | {
      type: 'SET_OPERATOR';
      payload: Operator;
    }
  | {
      type: 'SET_DECIMAL' | 'TOGGLE_SIGN' | 'EQUATE' | 'RESET' | 'DELETE';
    };

interface CalculatorState {
  current: string;
  operator: Operator | null;
  equation: string;
  total: number;
}

const defaultState: CalculatorState = {
  current: '',
  operator: null,
  equation: '',
  total: 0,
};

function calculatorReducer(state: CalculatorState, action: CalculatorAction) {
  switch (action.type) {
    case 'SET_NUMBER': {
      const { payload } = action;
      let { current } = state;
      if (state.current === '0') {
        current = payload.toString();
      } else {
        current = state.current.toString() + payload.toString();
      }
      return { ...state, current };
    }
    case 'SET_OPERATOR': {
      const { payload } = action;
      const { current, equation, operator, total } = state;
      const newState = { ...state };
      if (Number(current) === 0 && equation === '') {
        return state;
      }

      if (operator === null) {
        // Set Operator
        newState.operator = payload;
        newState.total = Number(current);
        newState.equation = current + payload;
        newState.current = '';
      } else if (Number(current) === 0) {
        // Change Operator
        newState.operator = payload;
        newState.equation =
          equation.substring(0, equation.length - 1) + payload;
      } else {
        const calculated = calculate(total, Number(current), operator);
        newState.total = calculated;
        newState.equation = calculated + payload;
        newState.operator = payload;
        newState.current = '';
      }
      return newState;
    }
    case 'EQUATE': {
      const { operator, current, total } = state;
      if (operator === null || Number(current) === 0) {
        return state;
      }

      const calculated = calculate(total, Number(current), operator);
      return {
        total: calculated,
        current: calculated.toString(),
        equation: '',
        operator: null,
      };
    }
    case 'SET_DECIMAL': {
      let { current } = state;
      if (current === '') {
        current = '0.';
      } else if (!current.includes('.')) {
        current = `${current}.`;
      }
      return { ...state, current };
    }
    case 'TOGGLE_SIGN': {
      const { current } = state;
      return { ...state, current: (-Number(current)).toString() };
    }
    case 'DELETE': {
      const { current } = state;
      return { ...state, current: current.substring(0, current.length - 1) };
    }
    case 'RESET': {
      return defaultState;
    }
    default:
      return state;
  }
}

export default function Calculator() {
  const [{ current, equation }, dispatch] = useReducer(
    calculatorReducer,
    defaultState
  );

  useEffect(() => {
    const keyboardInputHandler = (e: KeyboardEvent) => {
      switch (e.key) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
          dispatch({ type: 'SET_NUMBER', payload: Number(e.key) });
          break;
        case '+':
        case '-':
        case '*':
        case '/':
          dispatch({ type: 'SET_OPERATOR', payload: e.key });
          break;
        case '=':
        case 'Enter':
          dispatch({ type: 'EQUATE' });
          break;
        case '.':
          dispatch({ type: 'SET_DECIMAL' });
          break;
        case 'Backspace':
          dispatch({ type: 'DELETE' });
          break;
        default:
          break;
      }
    };
    document.addEventListener('keydown', keyboardInputHandler);

    return () => document.removeEventListener('keydown', keyboardInputHandler);
  }, []);

  return (
    <main className="grid grid-rows-[auto_1fr] gap-6">
      <div className="grid bg-display py-8 px-6 gap-2 rounded-xl">
        <span className="min-h-[2ch] font-semibold text-text-body text-opacity-50 text-sm sm:text-base tracking-wide whitespace-nowrap overflow-auto">
          {equation}
        </span>
        <span className="min-h-[2ch] text-right text-3xl sm:text-5xl font-bold tracking-wider whitespace-nowrap overflow-auto">
          {current}
        </span>
      </div>

      <div className="grid grid-cols-4 grid-rows-6 gap-2 sm:gap-6 bg-keypad p-6 rounded-xl">
        <Button
          variant="primary"
          type="button"
          onClick={() => dispatch({ type: 'SET_NUMBER', payload: 7 })}
        >
          7
        </Button>
        <Button
          variant="primary"
          type="button"
          onClick={() => dispatch({ type: 'SET_NUMBER', payload: 8 })}
        >
          8
        </Button>
        <Button
          variant="primary"
          type="button"
          onClick={() => dispatch({ type: 'SET_NUMBER', payload: 9 })}
        >
          9
        </Button>
        <Button
          variant="primary"
          type="button"
          onClick={() => dispatch({ type: 'SET_OPERATOR', payload: '+' })}
        >
          +
        </Button>

        <Button
          variant="primary"
          type="button"
          onClick={() => dispatch({ type: 'SET_NUMBER', payload: 4 })}
        >
          4
        </Button>
        <Button
          variant="primary"
          type="button"
          onClick={() => dispatch({ type: 'SET_NUMBER', payload: 5 })}
        >
          5
        </Button>
        <Button
          variant="primary"
          type="button"
          onClick={() => dispatch({ type: 'SET_NUMBER', payload: 6 })}
        >
          6
        </Button>
        <Button
          variant="primary"
          type="button"
          onClick={() => dispatch({ type: 'SET_OPERATOR', payload: '-' })}
        >
          -
        </Button>

        <Button
          variant="primary"
          type="button"
          onClick={() => dispatch({ type: 'SET_NUMBER', payload: 1 })}
        >
          1
        </Button>
        <Button
          variant="primary"
          type="button"
          onClick={() => dispatch({ type: 'SET_NUMBER', payload: 2 })}
        >
          2
        </Button>
        <Button
          variant="primary"
          type="button"
          onClick={() => dispatch({ type: 'SET_NUMBER', payload: 3 })}
        >
          3
        </Button>
        <Button
          variant="primary"
          type="button"
          onClick={() => dispatch({ type: 'SET_OPERATOR', payload: '*' })}
        >
          &times;
        </Button>

        <Button
          variant="primary"
          type="button"
          onClick={() => dispatch({ type: 'SET_DECIMAL' })}
        >
          .
        </Button>
        <Button
          variant="primary"
          type="button"
          onClick={() => dispatch({ type: 'SET_NUMBER', payload: 0 })}
        >
          0
        </Button>
        <Button
          variant="primary"
          type="button"
          onClick={() => dispatch({ type: 'TOGGLE_SIGN' })}
        >
          &#177;
        </Button>
        <Button
          variant="primary"
          type="button"
          onClick={() => dispatch({ type: 'SET_OPERATOR', payload: '/' })}
        >
          /
        </Button>

        <Button
          variant="secondary"
          type="button"
          className="col-span-2"
          onClick={() => dispatch({ type: 'RESET' })}
        >
          reset
        </Button>
        <Button
          variant="secondary"
          type="button"
          className="col-span-2"
          onClick={() => dispatch({ type: 'DELETE' })}
        >
          del
        </Button>

        <Button
          variant="accent"
          type="button"
          className="col-span-full"
          onClick={() => dispatch({ type: 'EQUATE' })}
        >
          =
        </Button>
      </div>
    </main>
  );
}
