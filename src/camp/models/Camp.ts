/* tslint:disable */
import Facility from './Facility';

export class CampName {
  constructor(
    public campName: string,
    public campId: string,
    public twitterId: string,
    public uid: string,
  ) {}
}

export default class Camp {
  constructor(
    public campName: string,
    public facilities: Facility[],
    public freeWriting: string,
    public campId?: string,
    public uid?: string,
    public twitterId?: string,
    public twitterName?: string,
  ) {
  }
}
