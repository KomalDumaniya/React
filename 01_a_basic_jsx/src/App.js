function App() {
  return (
    <form action="/submit" method="POST">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
