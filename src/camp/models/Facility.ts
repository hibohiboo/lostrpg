/**
 * 施設
 *
 * @export
 * @class Facility
 */
export default class Facility {
    public name: string;
    public type: string;
    public speciality: string;
    public level: number;
    public effect: string;

    constructor(data:Facility) {
      const {name, type, speciality, level, effect} = data;
      this.name = name || "";
      this.type = type || "";
      this.speciality = speciality || "";
      this.level = level || 1;
      this.effect = effect || "";
    }
  }
  