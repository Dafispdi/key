import { useState, useEffect } from "react";
import { useRouter } from "next/router";

let mockUsers = [
  { username: "admin", password: "cpanelreseller" }
];

export default function Dashboard() {
  const [users, setUsers] = useState(mockUsers);
  const [newUser, setNewUser] = useState({ username: "", password: "" });
  const [msg, setMsg] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isLoggedIn = localStorage.getItem("isLoggedIn");
      if (isLoggedIn !== "true") router.replace("/");
    }
  }, []);

  const handleAddUser = (e) => {
    e.preventDefault();
    if (!newUser.username || !newUser.password) {
      setMsg("Username dan password harus diisi!");
      return;
    }
    if (users.find(u => u.username === newUser.username)) {
      setMsg("Username sudah ada!");
      return;
    }
    setUsers([...users, newUser]);
    setNewUser({ username: "", password: "" });
    setMsg("User berhasil ditambah!");
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    router.replace("/");
  };

  return (
    <div style={{ maxWidth: 500, margin: "50px auto", borderRadius: 15, padding: 20, boxShadow: "0 2px 16px #0002" }}>
      <h2>📋 Panel User</h2>
      <button onClick={handleLogout} style={{ float: "right", marginBottom: 20, background: "#f33", color: "#fff", border: "none", borderRadius: 8, padding: "5px 15px" }}>Logout</button>
      <form onSubmit={handleAddUser} style={{ marginBottom: 20 }}>
        <input type="text" placeholder="Username baru" value={newUser.username} onChange={e => setNewUser({ ...newUser, username: e.target.value })} style={{ width: "45%", margin: "5px", padding: 10 }} />
        <input type="text" placeholder="Password baru" value={newUser.password} onChange={e => setNewUser({ ...newUser, password: e.target.value })} style={{ width: "45%", margin: "5px", padding: 10 }} />
        <button type="submit" style={{ width: "95%", padding: 10, borderRadius: 8, background: "#2d72fe", color: "#fff", border: "none" }}>Tambah User</button>
        <p style={{ color: msg.includes("berhasil") ? "green" : "red" }}>{msg}</p>
      </form>
      <h3>Daftar User</h3>
      <table style={{ width: "100%", background: "#fff", borderRadius: 12, overflow: "hidden" }}>
        <thead>
          <tr style={{ background: "#2d72fe", color: "#fff" }}>
            <th>Username</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => (
            <tr key={i}>
              <td>{u.username}</td>
              <td>{u.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}