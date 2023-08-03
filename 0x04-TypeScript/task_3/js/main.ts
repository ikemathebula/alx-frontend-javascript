import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

const row: RowElement = {
  firstName: "Monica",
  lastName: "Zitha",
}

const newRowID: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = {
  ...row,
  age: 28,
}

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
