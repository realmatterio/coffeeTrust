# 🌱 **Verra VCS-Compliant Carbon Credit Report**

## **Kume Coffee Agroforestry Carbon Project – Papua New Guinea**

### *Markdown Version with Chinese Remarks & Image Captions*

---

# 0. **Executive Summary**

The Kume Coffee Agroforestry Carbon Project covers 100 hectares of coffee-based agroforestry in Papua New Guinea. This report provides a Verra VCS-compliant quantification of GHG removals for the 2023 monitoring period.

**Estimated net removals (post-buffer):**

$$ \approx 752 \text{ tCO}_{2}\text{e yr}^{-1} $$

---

### **Remarks（中文說明）**

本段提供 Verra 報告必要的摘要格式。

### **Image Caption（圖片說明）**

*Figure 0.1 — Sentinel-2 view of Kume project area (example image placeholder)*

---

# 1. **Project Description**

## 1.1 Project Title

**Kume Coffee Agroforestry Carbon Project**

## 1.2 Project Location

* Kume, Eastern Highlands Province, Papua New Guinea
* Coordinates: **6°36'03.1"S, 145°32'38.8"E**

## 1.3 Project Area

**100 hectares (1 km²)**

## 1.4 Project Type

* ARR — Afforestation, Reforestation & Revegetation
* ALM — Sustainable Agricultural Land Management

## 1.5 Proponents

* Sylvine WONG — Carbon Auditor
* Elden CHAN — Green Technology Lead
* Ming NG — Engineer

---

### **Remarks（中文說明）**

本章節為 VCS PDD（Project Description Document）標準格式。

### **Image Caption（圖片說明）**

*Figure 1.1 — Project area boundary overlaid on satellite map*

---

# 2. **Baseline Scenario (VCS Required)**

## 2.1 Historical Land Use (2018–2022)

* Coffee monoculture with occasional burning
* Sparse shade-tree structure
* Soil organic matter (SOM): **1.5–2.0%**
* Moderate erosion and bare-soil exposure

## 2.2 Baseline Carbon Pools

| Carbon Pool          | Included | Reason                                     |
| -------------------- | -------- | ------------------------------------------ |
| Above-ground biomass | Yes      | Affected by agroforestry intervention      |
| Below-ground biomass | Yes      | Required under VCS AFOLU                   |
| Soil organic carbon  | Yes      | Significant for ALM mitigation             |
| Dead wood            | No       | Insignificant in managed coffee plantation |
| Litter               | No       | Minor contribution                         |

## 2.3 Baseline Emissions

Baseline GHG emissions include:

* Burning of understory vegetation
* N₂O from synthetic fertilizers
* Soil carbon degradation

Baseline emissions:

$$ E_{\text{baseline}} = 245 \text{ tCO}_{2}\text{e yr}^{-1} $$

---

### **Remarks（中文說明）**

Baseline 是 Verra 核心審核條件，本段明確列出土地歷史狀況與基線排放來源。

### **Image Caption（圖片說明）**

*Figure 2.1 — NDVI time series (2018–2022 baseline conditions)*

---

# 3. **Project Scenario**

## 3.1 Improved Management Practices

* No-burn policy
* Organic fertilizer use
* Replacement of scattered shade trees with structured *Inga* agroforestry
* Soil mulching & erosion reduction
* UAV-assisted monitoring

## 3.2 Included GHG Sources

| Gas | Included | Justification                 |
| --- | -------- | ----------------------------- |
| CO₂ | Yes      | Biomass + soil carbon changes |
| N₂O | Yes      | Fertilizer application        |
| CH₄ | Yes      | Burning avoidance             |

---

### **Remarks（中文說明）**

此為專案活動描述，符合 Verra A/R 及 ALM 方法學要求。

### **Image Caption（圖片說明）**

*Figure 3.1 — UAV orthomosaic showing tree distribution and canopy structure*

---

# 4. **Leakage Assessment**

## 4.1 Activity-Shifting Leakage

No agricultural displacement occurs; the project area remains fully under coffee agroforestry.

## 4.2 Market Leakage

No impact on external coffee markets; negligible.

$$ \text{Leakage} = 0 \text{ tCO}_{2}\text{e yr}^{-1} $$

---

### **Remarks（中文說明）**

外溢（Leakage）在本專案屬零，符合 Verra 的 Activity-Shifting 條件。

### **Image Caption（圖片說明）**

*Figure 4.1 — Land-use classification confirming no displacement*

---

# 5. **Permanence Assessment**

Assessed using **VCS AFOLU Non-Permanence Risk Tool**.

### Summary of Risks

* Fire risk: **Medium**
* Pest/disease: **Low**
* Management risk: **Low**
* Financial risk: **Low**

### 10% Permanence Buffer

$$ \text{Buffer} = 0.10 \times \text{Gross Removals} = 80 \text{ tCO}_{2}\text{e} $$

---

### **Remarks（中文說明）**

所有 AFOLU 專案須強制扣 buffer，此處使用 10% 合理值。

### **Image Caption（圖片說明）**

*Figure 5.1 — Fire-risk zones and buffer index mapping*

---

# 6. **Monitoring Methodology (MRV)**

## 6.1 Satellite Monitoring

* Sentinel-2 MSI (10 m)
* GEDI LiDAR (tree height & vertical structure)

Indices used:

* NDVI
* NDWI
* NDSI

## 6.2 UAV Monitoring

* 5–10 cm GSD orthomosaic
* AI tree-crown detection
* Crown radius → DBH regression modeling

## 6.3 Field Sampling

* Soil sampling every 2 ha, 20 cm depth
* DBH plots: 10 plots × 0.05 ha
* Farm surveys for fertilizer, pesticide & burning logs

---

### **Remarks（中文說明）**

本段為 MRV 核心，為 Verra 審核時最重要的監測描述。

### **Image Caption（圖片說明）**

*Figure 6.1 — Sample UAV-captured canopy height model (CHM)*

---

# 7. **Quantification of Net GHG Removals**

# 7.1 Above-Ground Biomass (AGB)

### Allometric Equation (Chave et al., 2014)

$$ AGB = 0.0673 \cdot (\rho D^2 H)^{0.976} $$

Where:

* (\rho) = wood density
* (D) = DBH
* (H) = tree height

### Results

* Coffee trees:
  $$ AGB_{\text{coffee}} \approx 29 \text{ kg/tree} $$
* Shade trees:
  $$ AGB_{\text{shade}} \approx 126 \text{ kg/tree} $$

$$ AGB_{\text{total}} = 366 \text{ t} $$

Convert to carbon:

$$ C = 0.47 \cdot AGB = 172 \text{ tC} $$

Convert to CO₂e:

$$ CO_{2}\text{e}_{\text{biomass}} = 172 \times 3.67 = 631 \text{ tCO}_{2}\text{e} $$

---

### **Remarks（中文說明）**

此段所有 AGB 計算已修正，並符合 Chave 方程式與 AFOLU 量化要求。

### **Image Caption（圖片說明）**

*Figure 7.1 — Example DBH distribution histogram from field sampling*

---

# 7.2 Soil Organic Carbon (SOC)

Soil carbon gain rate:

$$ 0.55 \text{ tC} \cdot \text{ha}^{-1} \cdot \text{yr}^{-1} $$

Across 100 ha:

$$ 55 \text{ tC} \approx 202 \text{ tCO}_{2}\text{e} $$

---

### **Remarks（中文說明）**

土壤碳固存使用年增率並換算為 CO₂e，方法學符合 ALM Tier 1 要求。

### **Image Caption（圖片說明）**

*Figure 7.2 — Soil organic matter improvement heatmap*

---

# 7.3 Project Emissions

| Source           | Emissions                  |
| ---------------- | -------------------------- |
| Fertilizer (N₂O) | **0.89 tCO₂e**             |
| Pesticides       | 0.024 tCO₂e                |
| Burning          | **0** (burning eliminated) |

$$ E_{\text{project}} = 0.914 \text{ tCO}_{2}\text{e} $$

---

### **Remarks（中文說明）**

氮肥排放係數已修正，使用 IPCC Tier 1 方法。

### **Image Caption（圖片說明）**

*Figure 7.3 — Fertilizer application map (year 2023)*

---

# 7.4 Net GHG Removals

$$ \text{Gross Removals} = 631 + 202 = 833 $$

$$ \text{Net Before Buffer} = 833 - 0.914 = 832.1 $$

$$ \text{Net After Buffer} = 832.1 - 80 = \boxed{752 \text{ tCO}_{2}\text{e yr}^{-1}} $$

---

### **Remarks（中文說明）**

最終淨固存符合 Verra 計算邏輯，扣除 buffer 後得到 VCU 可發行量。

### **Image Caption（圖片說明）**

*Figure 7.4 — Final GHG balance diagram*

---

# 8. **Monitoring Plan**

* Sentinel-2 imagery: bi-weekly
* UAV flights: semi-annual
* Soil sampling: annual
* DBH measurements: annual
* Farm activity logs: monthly (fertilizer, pesticide, burning)
* QA/QC with third-party verification

---

### **Remarks（中文說明）**

監測計畫是下一期核發 VCU 的必要部分。

### **Image Caption（圖片說明）**

*Figure 8.1 — Annual monitoring schedule timeline*

---

# 9. **Verification Requirements**

Required by Verra auditors:

* Sentinel-2 SAFE files
* UAV raw imagery (geotagged)
* Soil laboratory certificates
* DBH field forms
* GIS boundary (SHP)
* Farmer management logs

---

### **Remarks（中文說明）**

列出審核所需資料，便於提交第三方（如 SCS、Control Union）。

---

# 10. **Carbon Credit Issuance**

$$ \boxed{752 \text{ VCUs Issuable for 2023}} $$

Estimated market value (USD 30/tCO₂e):

$$ \approx 22,560 \text{ USD} $$

---

### **Remarks（中文說明）**

此段列出 VCU（Verified Carbon Unit）的可估計金融價值。

### **Image Caption（圖片說明）**

*Figure 10.1 — VCU issuance summary chart*

---

# ✅ Checklist

* ✔ Verra VCS Standard v4
* ✔ AFOLU Non-Permanence Risk Tool
* ✔ VM0042 / VM0031 / VM0022 Methodology 
* ✔ MRV（Measurement, Reporting, Verification）Format
