import { unlink } from "fs/promises";

export async function removeFile(path) {
  try {
    if (path) {
      await unlink(path);
    }
  } catch (e) {
    console.log("Error while removing file", e.message);
  }
}
