import Button from '@components/Button';

export default function Calculator() {
  return (
    <main className="grid grid-rows-[auto_1fr] gap-6">
      <div className="grid bg-display py-8 px-6 gap-2 rounded-xl overflow-auto">
        <span className="font-semibold text-sm sm:text-base tracking-wide text-text-body text-opacity-50">
          History
        </span>
        <span className="text-right text-3xl sm:text-5xl font-bold tracking-wider whitespace-nowrap">
          Current
        </span>
      </div>

      <div className="grid grid-cols-4 grid-rows-6 gap-2 sm:gap-6 bg-keypad p-6 rounded-xl">
        <Button variant="primary" type="button">
          7
        </Button>
        <Button variant="primary" type="button">
          8
        </Button>
        <Button variant="primary" type="button">
          9
        </Button>
        <Button variant="primary" type="button">
          +
        </Button>

        <Button variant="primary" type="button">
          4
        </Button>
        <Button variant="primary" type="button">
          5
        </Button>
        <Button variant="primary" type="button">
          6
        </Button>
        <Button variant="primary" type="button">
          -
        </Button>

        <Button variant="primary" type="button">
          1
        </Button>
        <Button variant="primary" type="button">
          2
        </Button>
        <Button variant="primary" type="button">
          3
        </Button>
        <Button variant="primary" type="button">
          &times;
        </Button>

        <Button variant="primary" type="button">
          .
        </Button>
        <Button variant="primary" type="button">
          0
        </Button>
        <Button variant="primary" type="button">
          &#177;
        </Button>
        <Button variant="primary" type="button">
          /
        </Button>

        <Button variant="secondary" type="button" className="col-span-2">
          reset
        </Button>
        <Button variant="secondary" type="button" className="col-span-2">
          del
        </Button>

        <Button variant="accent" type="button" className="col-span-full">
          =
        </Button>
      </div>
    </main>
  );
}
