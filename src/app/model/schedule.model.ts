export interface Schedule {
  id: number;
  startTime: string; // ISO 8601 format
  endTime: string; // ISO 8601 format
  breakStart: string; // ISO 8601 format
  breakEnd: string; // ISO 8601 format
  employee:{
    id: number;
    firstname: string;
    lastname: string;
  }
}