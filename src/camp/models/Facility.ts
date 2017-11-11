/**
 * 施設
 *
 * @export
 * @class Facility
 */
export default class Facility {
  public name: string = '';
  public type: string = '';
  public speciality: string = '';
  public level: number = 1;
  public effect: string = '';

  constructor(data?: Facility) {
    if (data === undefined || data === null) {return;}

    const { name, type, speciality, level, effect } = data;
    this.name = name;
    this.type = type;
    this.speciality = speciality;
    this.level = level;
    this.effect = effect;
  }
}
