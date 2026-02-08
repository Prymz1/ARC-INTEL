# 🛰️ ARC INTEL — ARC Raiders Mission Companion

A lightweight, **searchable mission companion UI** for **ARC Raiders**, served by **Nginx + Docker**.

---

## ✨ Features
- 🔎 **Searchable** mission list (79 missions)
- ✅ **Objectives** with comfy checkboxes
- 🗂️ **Briefing + Phases** tabs for every mission
- 🗺️ **Maps** (only when available in `Maps/`, no placeholders)
- 📌 **Mission Queue** (drag missions into header slots)
- 📝 **Tactical Notes** (per-mission notes saved automatically)

---

## 🧰 Requirements
- 🐳 Docker Desktop (Windows/macOS) or Docker Engine (Linux)
- 🧩 Docker Compose
- 🧷 Git + **Git LFS** (required because `Maps/` is stored with LFS)

---

## 🗂️ Repo structure
```
ARC-INTEL/
  Dockerfile
  docker-compose.yml
  nginx.conf
  index.html
  missionRegistry.js
  allMissionMaps.js
  Maps/                  # tracked with Git LFS
```

---

## 🚀 Deploy / Run (from GitHub)
### 1) Clone + pull LFS files
```bash
git lfs install
git clone https://github.com/Prymz1/ARC-INTEL.git
cd ARC-INTEL
git lfs pull
```

### 2) Build + start
```bash
docker-compose up -d --build
```
(Compose v2 users can run `docker compose up -d --build`.)

### 3) Open the app
➡️ http://localhost:8080

---

## ✅ Quick test checklist
After any rebuild, confirm:
- App loads (no blank screen)
- Search works
- Open multiple missions across the list (early/mid/late)
- Mission Queue works:
  - drag → slot
  - click slot → opens mission
  - refresh → queue persists
- Tactical Notes works:
  - type notes
  - switch missions
  - refresh → notes persist
- Maps load where expected (no broken image UI)

Tip: open DevTools Console (F12). Validator should show **0 fatal**.

---

## 🔁 Updating content
### Update mission data
Edit `missionRegistry.js`, then rebuild:
```bash
docker-compose up -d --build
```

### Add / update maps
Add images to `Maps/`, commit, push (LFS handles storage).

---

## 🧯 Troubleshooting
### `no configuration file provided: not found`
You ran Compose outside the project folder:
```bash
cd ARC-INTEL
docker-compose up -d --build
```

### Maps are 404 / missing
- Confirm `Maps/` exists
- Confirm exact filename match (case + extension)
- Confirm LFS pulled files:
```bash
git lfs pull
git lfs ls-files
```

---

## 💾 Data persistence
- Mission Queue + Tactical Notes use browser `localStorage`
- Per-browser/per-device (not synced)

