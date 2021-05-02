export default function Shell({ children }) {
  return (
    <div className="bg-white w-full h-screen">
      <main className="flex flex-col justify-center w-full bg-white">
        {children}
      </main>
    </div>
  );
}
