import Header from '@features/Header';
import Calculator from '@features/Calculator';

export default function App() {
  return (
    <div className="min-h-screen font-default bg-main text-text-body grid items-center py-8">
      <div className="grid grid-rows-[auto_1fr] gap-6 max-w-lg w-10/12 mx-auto">
        <Header />
        <Calculator />
      </div>
    </div>
  );
}
