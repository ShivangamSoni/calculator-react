import Header from '@features/Header';

export default function App() {
  return (
    <div className="min-h-screen font-default bg-main dark:text-white text-text-primary grid items-center py-8">
      <div className="max-w-lg w-10/12 mx-auto">
        <Header />
      </div>
    </div>
  );
}
