import Link from "next/link";

export default function dashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <nav className="bg-gray-900 shadow-lg">
          <ul className="flex justify-center space-x-6 p-4">
            <li>
              <Link
                href="/dashboard"
                className="text-white hover:text-cyan-400 transition duration-300 border border-gray-500 rounded-md px-4 py-2"
              >
                Perfil
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/orders"
                className="text-white hover:text-cyan-400 transition duration-300 border border-gray-500 rounded-md px-4 py-2"
              >
                Órdenes
              </Link>
            </li>
          </ul>
        </nav>
        <main className="flex-1">{children}</main>
      </div>
    </>
  );
}
