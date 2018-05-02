import * as _ from 'lodash';

class Character {
  constructor(
    public id: string,
    public name: string,
    public level: number = 1,
//      public uid: string,
  ) {}
}
export const formatCharacters = (characters): Character[] => {
    const characterList: Character[] = _.map(characters, (char: Character, key: string) => {
      return new Character(key, char.name, char.level);
    });
    return characterList;
  };
