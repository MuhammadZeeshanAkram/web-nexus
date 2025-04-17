import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen p-6">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Web-Nexus Project</h1>
        <ThemeToggle />
      </header>
      
      <main>
        <section className="max-w-2xl">
          <h2 className="text-2xl font-semibold mb-4">Project Setup Complete</h2>
          <p className="mb-2">Your project has been configured with:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Next.js with App Router</li>
            <li>Supabase Client</li>
            <li>UI Components with dark/light mode</li>
            <li>Theme Toggle</li>
          </ul>
          <p>Ready for your competition!</p>
        </section>
      </main>
    </div>
  )
}