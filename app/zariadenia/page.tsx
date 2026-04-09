import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <div className="page-hero">
          <div className="container">
            <h1>Jednoúčelové zariadenia</h1>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
