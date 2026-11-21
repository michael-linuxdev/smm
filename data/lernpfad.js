// Lernpfad durch das Glossar: aufbauende Reihenfolge je Modul (Grundbegriffe zuerst, darauf Aufbauendes danach).
// Die Module erscheinen in Kursreihenfolge (data/kurs.js). Die Reihenfolge kommt direkt aus den Glossar-Dateien
// data/einfach/<modul>.js: Neue Begriffe dort an passender Stelle einfügen. So steht jeder Begriff genau einmal hier,
// und zwar bei seinem Modul – `node tests/check-data.mjs` prüft das.
import { TEILE } from "./glossar.js";

export const LERNPFAD = Object.fromEntries(Object.entries(TEILE).map(([m, teil]) => [m, Object.keys(teil)]));
