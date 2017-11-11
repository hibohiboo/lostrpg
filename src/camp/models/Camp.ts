import Facility from './Facility';

export default class Camp {
  constructor(
    public campName:string,
    public facilities:Facility[],
    public freeWriting: string
  ) {
  }
}