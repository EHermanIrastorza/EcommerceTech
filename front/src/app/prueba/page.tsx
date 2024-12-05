"use client";
import useAuth from "@/Hooks/AuthUse";

export default function prueba() {
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    return <div>Verificando...</div>;
  }

  return (
    <div>
      <h1>Welcome to your Dashboard</h1>
      <p>This is a private route.</p>
    </div>
  );
}
