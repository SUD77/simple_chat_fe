import "./App.css";

function App() {
  return (
    <div className="h-screen bg-black">
      <div className="h-[95vh]"></div>
      <div className="w-full bg-white flex p-4">
        <input className="flex-1 p-4"></input>
        <button className="bg-purple-600 text-white p-4">Send Message</button>
      </div>
    </div>
  );
}

export default App;
