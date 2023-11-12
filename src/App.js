import Quiz from "./Quiz";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/username/repo/branch/filename.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  if (data === null) {
    return <div>Loading...</div>;
  }
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
