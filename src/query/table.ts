export class Table {
  tableName: string;

  columns: Column[];

  rows: Row[];

  constructor(tableName: string) {
    this.tableName = tableName;
    this.columns = [];
    this.rows = [{ values: [] }];
  }

  addColumn(columnName: string, columnType: ColumnType = ColumnType.text) {
    const columnExists = this.columns.some((c) => c.name === columnName);
    if (!columnExists) {
      this.columns.push({
        name: columnName,
        type: columnType,
      });
    }
  }
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

export const toDate = (input: string | number): number => {
  if (input) {
    if (typeof input === "string") {
      return Date.parse(input);
    }
    if (typeof input === "number") {
      if (input.toString().length === 10) {
        return new Date(input * 1000).getTime();
      }
      if (input.toString().length === 13) {
        return new Date(input).getTime();
      }
    }
  }
  return 0;
};

export const toBool = (input: string) => input?.toLowerCase() === "true";
