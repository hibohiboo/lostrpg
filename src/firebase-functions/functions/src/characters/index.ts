import * as _ from 'lodash';
import Character from './models/Character';

/**
 * データベースのデータをクラスのインスタンスに整形して返す
 * @param characters 
 */
export const formatCharacters = (characters): Character[] => {
    const characterList: Character[] = _.map(characters, (char: Character, key: string) => {
      return new Character(key, char.name, char.level);
    });
    return characterList;
  };
