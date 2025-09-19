import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

// O 'children' é onde o conteúdo da tua página vai entrar
export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid h-screen w-full lg:grid-cols-[280px_1fr]">
      {/* Sidebar para Desktop (escondida em mobile) */}
      <div className="hidden border-r bg-muted/40 lg:block">
        <Sidebar />
      </div>

      {/* Conteúdo Principal (Header + Página) */}
      <div className="flex flex-col">
        <Header />
        <main className="flex-1 p-4 overflow-auto lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}