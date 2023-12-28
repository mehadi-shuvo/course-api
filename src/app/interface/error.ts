export type TErrorSources = {
  errorMessage: string;
}[];

export type TGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessage: any;
};
