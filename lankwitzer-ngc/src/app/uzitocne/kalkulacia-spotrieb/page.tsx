import { Calculator } from "@/components/calculator";

export default function ConsumptionCalculatorPage() {
  return (
    <section className="page-section">
      <div className="shell">
        <div className="section-heading">
          <span>Kalkulačka</span>
          <h1>Kalkulácia spotrieb</h1>
          <p>
            Pri stanovení ceny náteru nie je dôležitá len cena za kilogram, ale to, koľko reálne aplikujete na meter štvorcový. Preto je táto kalkulačka samostatná podstránka.
          </p>
        </div>
        <Calculator />
      </div>
    </section>
  );
}
