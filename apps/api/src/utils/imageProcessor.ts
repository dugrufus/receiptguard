/**
 * imageProcessor scaffold (Rev C)
 * - Converts HEIC -> JPEG (requires "sharp")
 * - Resizes max edge to 1600 px
 * - Best-effort to keep <= 1.2 MB
 */
import fs from "fs";
let sharp: any = null;
try { sharp = require("sharp"); } catch (e) { /* sharp not installed */ }

export async function processImage(inputPath: string, outputPath: string) {
  if (!sharp) throw new Error("sharp not installed; run: pnpm --filter api add sharp");
  const img = sharp(inputPath, { animated: false });
  const meta = await img.metadata();
  const fmt = (meta.format || "").toLowerCase();
  let pipeline = img;
  if (fmt === "heic" || fmt === "mheic") { pipeline = img.toFormat("jpeg"); }
  pipeline = pipeline.resize({ width:1600, height:1600, fit:'inside', withoutEnlargement:true });
  await pipeline.jpeg({ quality:82 }).toFile(outputPath);
  const stat = fs.statSync(outputPath);
  if (stat.size > 1200000) { await pipeline.jpeg({ quality:72 }).toFile(outputPath); }
  return outputPath;
}