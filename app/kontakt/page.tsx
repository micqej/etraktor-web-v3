'use client'
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function KontaktPage() {
  return (
    <>
      <Nav />
      <main>
        <div className="page-hero">
          <div className="container">
            <span className="tag">Spojme sa</span>
            <h1>Kontaktujte nás</h1>
            <p>Ozvite sa nám – radi preberieme Vaše požiadavky a navrhneme riešenie.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
