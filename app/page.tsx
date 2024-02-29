import Mobile from "./pages/Mobile";
import Web from "./pages/Web";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center items-center h-screen">
        <Web />
        <Mobile />
      </div>
    </main>
  );
}
