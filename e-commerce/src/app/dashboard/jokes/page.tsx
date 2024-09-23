type Joke = {
  id: number;
  setup: string;
  delivery: string;
};

const fetchJokes = async (): Promise<Joke[]> => {
  const response = await fetch("http://localhost:3001/jokes");
  console.log(response);
  const responseJson: Joke[] = await response.json();

  if (!response.ok) {
    throw new Error("Waduh Error ...");
  }

  return responseJson;
};

const DashboardJokePage = async () => {
  const jokes = await fetchJokes();
  return (
    <section>
    <h2 className="text-2xl font-semibold">Dashboard Page - Jokes</h2>
    {/* ?? Step 9 - Mempopulasikan data pada /dashboard/jokes (4) */}
    {/* Gunakan jokes layaknya data yang biasa digunakan via "state" (READ-ONLY) */}
    <table className="mt-4">
      <thead>
        <tr>
          <th className="p-4">No</th>
          <th className="p-4">Setup</th>
          <th className="p-4">Delivery</th>
        </tr>
      </thead>
      <tbody>
        {jokes.map((todo, idx) => (
          <tr key={todo.id}>
            <td>{idx + 1}</td>
            <td>{todo.setup}</td>
            <td>{todo.delivery}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
  );
};

export default DashboardJokePage;
