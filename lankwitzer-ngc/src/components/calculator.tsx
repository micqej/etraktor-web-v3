"use client";

import { useMemo, useState } from "react";

import type { Locale } from "@/lib/lankwitzer-data";

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

const labels = {
  sk: {
    area: "Plocha (m2)",
    solids: "Objemový obsah sušiny (%)",
    dft: "DFT - hrúbka suchého náteru (μm)",
    density: "Hustota (g/ml)",
    paintPrice: "Cena 1 kg farby vrátane tužidla (EUR)",
    thinnerPrice: "Cena 1 l riedidla (EUR)",
    thinningPercent: "Riedenie (%)",
    lossPercent: "Koeficient strát (%)",
    theoreticalCoverage: "Teoretická výdatnosť",
    practicalCoverage: "Praktická výdatnosť",
    paintUse: "Spotreba farby",
    thinnerUse: "Spotreba riedidla",
    sqmCost: "Cena za 1 m2",
    totalCost: "Celková cena",
  },
  en: {
    area: "Area (m2)",
    solids: "Volume solids (%)",
    dft: "DFT - dry film thickness (μm)",
    density: "Density (g/ml)",
    paintPrice: "Price per 1 kg incl. hardener (EUR)",
    thinnerPrice: "Price per 1 l of thinner (EUR)",
    thinningPercent: "Thinning (%)",
    lossPercent: "Loss coefficient (%)",
    theoreticalCoverage: "Theoretical coverage",
    practicalCoverage: "Practical coverage",
    paintUse: "Paint consumption",
    thinnerUse: "Thinner consumption",
    sqmCost: "Cost per 1 m2",
    totalCost: "Total cost",
  },
};

function formatNumber(value: number, locale: Locale, decimals = 2) {
  if (!Number.isFinite(value)) return "0.00";
  return new Intl.NumberFormat(locale === "sk" ? "sk-SK" : "en-GB", {
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

export function Calculator({ locale = "sk" }: { locale?: Locale }) {
  const [calc, setCalc] = useState<CalculatorInput>(initialCalculator);
  const copy = labels[locale];

  const results = useMemo(() => {
    const theoreticalCoverage = (10 * calc.solids) / (calc.dft * calc.density);
    const practicalCoverage = theoreticalCoverage * (1 - calc.lossPercent / 100);
    const paintUse = practicalCoverage > 0 ? calc.area / practicalCoverage : 0;
    const thinnerUse = paintUse * (calc.thinningPercent / 100);
    const sqmCost =
      practicalCoverage > 0
        ? (1 / practicalCoverage) * calc.paintPrice +
          (1 / practicalCoverage) * calc.thinnerPrice * (calc.thinningPercent / 100)
        : 0;
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
            label={copy.area}
            value={calc.area}
            onChange={(value) => setCalc((prev) => ({ ...prev, area: value }))}
          />
          <CalculatorField
            label={copy.solids}
            value={calc.solids}
            onChange={(value) => setCalc((prev) => ({ ...prev, solids: value }))}
          />
          <CalculatorField
            label={copy.dft}
            value={calc.dft}
            onChange={(value) => setCalc((prev) => ({ ...prev, dft: value }))}
          />
          <CalculatorField
            label={copy.density}
            value={calc.density}
            onChange={(value) => setCalc((prev) => ({ ...prev, density: value }))}
          />
          <CalculatorField
            label={copy.paintPrice}
            value={calc.paintPrice}
            onChange={(value) => setCalc((prev) => ({ ...prev, paintPrice: value }))}
          />
          <CalculatorField
            label={copy.thinnerPrice}
            value={calc.thinnerPrice}
            onChange={(value) => setCalc((prev) => ({ ...prev, thinnerPrice: value }))}
          />
          <CalculatorField
            label={copy.thinningPercent}
            value={calc.thinningPercent}
            onChange={(value) => setCalc((prev) => ({ ...prev, thinningPercent: value }))}
          />
          <CalculatorField
            label={copy.lossPercent}
            value={calc.lossPercent}
            onChange={(value) => setCalc((prev) => ({ ...prev, lossPercent: value }))}
          />
        </div>
      </div>

      <div className="calculator-results-card">
        <div className="result-card">
          <span>{copy.theoreticalCoverage}</span>
          <strong>{formatNumber(results.theoreticalCoverage, locale)} m2/kg</strong>
        </div>
        <div className="result-card">
          <span>{copy.practicalCoverage}</span>
          <strong>{formatNumber(results.practicalCoverage, locale)} m2/kg</strong>
        </div>
        <div className="result-card">
          <span>{copy.paintUse}</span>
          <strong>{formatNumber(results.paintUse, locale)} kg</strong>
        </div>
        <div className="result-card">
          <span>{copy.thinnerUse}</span>
          <strong>{formatNumber(results.thinnerUse, locale)} l</strong>
        </div>
        <div className="result-card">
          <span>{copy.sqmCost}</span>
          <strong>{formatNumber(results.sqmCost, locale)} EUR</strong>
        </div>
        <div className="result-card result-card-strong">
          <span>{copy.totalCost}</span>
          <strong>{formatNumber(results.totalCost, locale)} EUR</strong>
        </div>
      </div>
    </div>
  );
}
