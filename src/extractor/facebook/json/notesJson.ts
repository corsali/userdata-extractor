import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { Notes } from "../models/notes.js";

class NotesJson extends JsonExtractor {
  async process() {
    const notes = this.query(`$.notes_v2.*`);

    const processedNotes = notes.map(
      (note) =>
        new Notes({
          title: note.title,
          content: note.text,
          dateCreated: note.created_timestamp,
          dateUpdated: note.updated_timestamp,
          tags: note.tags?.map((tag) => tag?.name).join(";"),
        })
    );

    this.table.rows.push(...processedNotes);
  }
}

export const notesJson = new NotesJson(
  config.SERVICE_FACEBOOK,
  ".*/notes.json",
  "notes"
);
