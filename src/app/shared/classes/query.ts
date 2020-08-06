export interface ContactQuery {
  email: string;
  name: string;
  query: string;
  respondedTo?: boolean;
  queryID?: string;
}
