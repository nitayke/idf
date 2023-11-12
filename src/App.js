import Quiz from "./Quiz";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <h1 className="text-4xl mb-8">
        Logo Quiz
      </h1>
      <Quiz questions={questions} />
    </div>
  );
}

export default App;
