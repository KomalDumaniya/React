import Navbar from './components/Navbar';
import Stories from './components/Stories';
import Feed from './components/Feed';
import Suggestions from './components/Suggestions';

export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen text-sm">
      <Navbar />
      <main className="max-w-6xl mx-auto mt-6 flex justify-center px-4 md:px-0">
        <section className="flex flex-col space-y-4 w-full max-w-[470px]">
          <Stories />
          <Feed />
        </section>
        <aside className="hidden md:flex ml-10 w-80">
          <Suggestions />
        </aside>
      </main>
    </div>
  );
}

