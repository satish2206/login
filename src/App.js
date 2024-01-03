import React,{ useState } from "react";


export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submit, setSubmit] = useState(false);
  const handlesubmit = (e) => {
    e.preventDefault();

    if (username === "user" && password === "password") {
      setError("");
      setSubmit(true);
    } else {
      setSubmit(false);
      setError("Invalid username or password");
    }
  };
  return (
    <div>
      <h1>Login Page</h1>
      {submit ? (
        <div>
          <p>Welcome, {username}!</p>
        </div>
      ) : (
        <form onSubmit={handlesubmit}>
          {error && <p className="error">{error}</p>}
          <div>
          <label>
            Username:
            <input
              id="username"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          </div>
          <div>
          <label>
            Password:
            <input
              id="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          </div>
          <div>
          <button type="submit">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
}
