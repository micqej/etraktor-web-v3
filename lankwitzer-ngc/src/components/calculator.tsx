"use client";

import { useMemo, useState } from "react";

type CalculatorInput = {
  area: number;
  solids: number;
  dft: number;
  density: number;
  paintPrice: number;
  thinnerPrice: number;
  thinningPercent: number;
  lossPercent: number;
};

const initialCalculator: CalculatorInput = {
  area: 225,
  solids: 48,
  dft: 60,
  density: 1.25,
  paintPrice: 4.56,
  thinnerPrice: 2.5,
  thinningPercent: 10,
  lossPercent: 40,
};

function formatNumber(value: number, decimals = 2) {
  if (!Number.isFinite(value)) return "0.00";
  return new Intl.NumberFormat("sk-SK", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

function CalculatorField({
  label,
  value,
  onChange,
  step = 0.01,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  step?: number;
}) {
  return (
    <label className="calc-field">
      <span>{label}</span>
      <input
        type="number"
        value={Number.isFinite(value) ? value : 0}
        step={step}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </label>
  );
}

export function Calculator() {
  const [calc, setCalc] = useState<CalculatorInput>(initialCalculator);

  const results = useMemo(() => {
    const theoreticalCoverage = (10 * calc.solids) / (calc.dft * calc.density);
    const practicalCoverage = theoreticalCoverage * (1 - calc.lossPercent / 100);
    const paintUse = calc.area / practicalCoverage;
    const thinnerUse = paintUse * (calc.thinningPercent / 100);
    const sqmCost =
      (1 / practicalCoverage) * calc.paintPrice +
      (1 / practicalCoverage) * calc.thinnerPrice * (calc.thinningPercent / 100);
    const totalCost = paintUse * calc.paintPrice + thinnerUse * calc.thinnerPrice;

    return {
      theoreticalCoverage,
      practicalCoverage,
      paintUse,
      thinnerUse,
      sqmCost,
      totalCost,
    };
  }, [calc]);

  return (
    <div className="calculator-layout">
      <div className="calculator-form-card">
        <div className="calc-grid">
          <CalculatorField
            label="Plocha (m2)"
            value={calc.area}
            onChange={(value) => setCalc((prev) => ({ ...prev, area: value }))}
          />
          <CalculatorField
            label="Objemový obsah sušiny (%)"
            value={calc.solids}
            onChange={(value) => setCalc((prev) => ({ ...prev, solids: value }))}
          />
          <CalculatorField
            label="DFT - hrúbka suchého náteru (μm)"
            value={calc.dft}
            onChange={(value) => setCalc((prev) => ({ ...prev, dft: value }))}
          />
          <CalculatorField
            label="Hustota (g/ml)"
            value={calc.density}
            onChange={(value) => setCalc((prev) => ({ ...prev, density: value }))}
          />
          <CalculatorField
            label="Cena 1 kg farby vrátane tužidla (EUR)"
            value={calc.paintPrice}
            onChange={(value) => setCalc((prev) => ({ ...prev, paintPrice: value }))}
          />
          <CalculatorField
            label="Cena 1 l riedidla (EUR)"
            value={calc.thinnerPrice}
            onChange={(value) => setCalc((prev) => ({ ...prev, thinnerPrice: value }))}
          />
          <CalculatorField
            label="Riedenie (%)"
            value={calc.thinningPercent}
            onChange={(value) => setCalc((prev) => ({ ...prev, thinningPercent: value }))}
          />
          <CalculatorField
            label="Koeficient strát (%)"
            value={calc.lossPercent}
            onChange={(value) => setCalc((prev) => ({ ...prev, lossPercent: value }))}
          />
        </div>
      </div>

      <div className="calculator-results-card">
        <div className="result-card">
          <span>Teoretická výdatnosť</span>
          <strong>{formatNumber(results.theoreticalCoverage)} m2/kg</strong>
        </div>
        <div className="result-card">
          <span>Praktická výdatnosť</span>
          <strong>{formatNumber(results.practicalCoverage)} m2/kg</strong>
        </div>
        <div className="result-card">
          <span>Spotreba farby</span>
          <strong>{formatNumber(results.paintUse)} kg</strong>
        </div>
        <div className="result-card">
          <span>Spotreba riedidla</span>
          <strong>{formatNumber(results.thinnerUse)} l</strong>
        </div>
        <div className="result-card">
          <span>Cena za 1 m2</span>
          <strong>{formatNumber(results.sqmCost)} EUR</strong>
        </div>
        <div className="result-card result-card-strong">
          <span>Celková cena</span>
          <strong>{formatNumber(results.totalCost)} EUR</strong>
        </div>
      </div>
    </div>
  );
}
