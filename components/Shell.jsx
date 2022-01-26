export default function Shell({ children }) {
  return (
    <div id="bg-here" className="w-full h-full overflow-x-hidden scroll-smooth">
      <main className="flex flex-col justify-center w-full scroll-smooth">
        {children}
      </main>
    </div>
  );
}
