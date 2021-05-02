export default function Shell({ children }) {
  return (
    <div className="bg-white">
      <main className="flex flex-col justify-center px-8 bg-white">
        {children}
      </main>
    </div>
  );
}
