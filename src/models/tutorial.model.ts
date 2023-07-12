import { RowDataPacket } from "mysql2"

export default interface Tutorial extends RowDataPacket {
  id?: number;
  title?: string;
  description?: string;
  published?: boolean;
}
