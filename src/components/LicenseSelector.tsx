"use client";

import { useState } from "react";
import type { LicenseType } from "@/lib/types";
import styles from "./LicenseSelector.module.css";

interface LicenseSelectorProps {
  basePrice: number;
  defaultLicense: LicenseType;
}

const licenseInfo: Record<
  string,
  { label: string; description: string; multiplier: number }
> = {
  Personal: {
    label: "Personal",
    description: "For personal projects, no client work.",
    multiplier: 1,
  },
  Commercial: {
    label: "Commercial",
    description: "For client projects and commercial use.",
    multiplier: 1,
  },
  Extended: {
    label: "Extended",
    description: "Unlimited projects, teams, and redistribution.",
    multiplier: 2,
  },
};

export default function LicenseSelector({
  basePrice,
  defaultLicense,
}: LicenseSelectorProps) {
  const [selected, setSelected] = useState<string>(defaultLicense);

  return (
    <div className={styles.licenses}>
      {(Object.keys(licenseInfo) as string[]).map((key) => {
        const info = licenseInfo[key];
        const price = basePrice === 0 ? 0 : Math.round(basePrice * info.multiplier);
        return (
          <button
            key={key}
            className={`${styles.license} ${selected === key ? styles.licenseActive : ""}`}
            onClick={() => setSelected(key)}
            type="button"
          >
            <div className={styles.radioWrap}>
              <span
                className={`${styles.radio} ${selected === key ? styles.radioChecked : ""}`}
              />
            </div>
            <div className={styles.licenseInfo}>
              <span className={styles.licenseLabel}>{info.label}</span>
              <span className={styles.licenseDesc}>{info.description}</span>
            </div>
            <span className={styles.licensePrice}>
              {price === 0 ? "Free" : `$${price}`}
            </span>
          </button>
        );
      })}
    </div>
  );
}
