interface IMongoContext {
  openConnectionAsync(): Promise<void>;
}

export { IMongoContext };
