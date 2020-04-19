export class User {
  constructor(
    public username: string,
    public emailId: string,
    public contactNumber: number,
    public topic: string,
    public batchTiming: string,
    public isSubscribed: boolean
  ) {
  }
}
