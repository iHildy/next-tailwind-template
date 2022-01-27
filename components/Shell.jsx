export default function Shell({ children }) {
  return (
    <div id="bg-here" className="h-full w-full overflow-x-hidden scroll-smooth">
      <main className="flex w-full flex-col justify-center scroll-smooth">
        {children}
      </main>
    </div>
  );
}
