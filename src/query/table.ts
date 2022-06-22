export interface Table {
  tableName: string;
  columns: Column[];
  rows: Row[];
}

export interface Column {
  name: string;
  type: ColumnType;
}

export enum ColumnType {
  integer = "integer",
  text = "text",
  date = "date",
  float = "float",
}

export interface Row {
  values: any[];
}

export const toColumnName = (input: string) =>
  input?.toLowerCase().replace(/ /g, "_");

export const toDate = (input: string) => Date.parse(input);

export const toBool = (input: string) => input?.toLowerCase() === "true";
