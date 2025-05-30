import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "cpanelreseller") {
      localStorage.setItem("isLoggedIn", "true");
      router.push("/dashboard");
    } else {
      setMsg("Username atau password salah.");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "100px auto", padding: 30, borderRadius: 15, boxShadow: "0 2px 16px #0002" }}>
      <h2>🔐 Login</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Masukkan Username" value={username} onChange={e => setUsername(e.target.value)} style={{ width: "100%", margin: "10px 0", padding: 10 }} />
        <input type="password" placeholder="Masukkan Password" value={password} onChange={e => setPassword(e.target.value)} style={{ width: "100%", margin: "10px 0", padding: 10 }} />
        <button type="submit" style={{ width: "100%", padding: 10, borderRadius: 8, background: "#2d72fe", color: "#fff", border: "none" }}>Login</button>
        <p style={{ color: "red" }}>{msg}</p>
      </form>
    </div>
  );
}