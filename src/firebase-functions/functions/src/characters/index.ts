import Character from './models/Character';
import Storage from '../firebase';

export default class CharacterWidget {
  constructor(private storage:Storage){}
  /**
   * 
   */
  public async fetch(){
    const {characters, charactersCount} = await this.storage.fetchCharacters();
    const characterList = Object.keys(characters)
    .map(id => {
      const char = characters[id];
      char.id = id;
      const fc = formatCharacter(char);
      return fc;
    });
    const result = {
      'characters' : characterList,
      'charactersCount': charactersCount
    };
    return result;
  }
  /**
   *
   *
   * @param {*} body
   * @returns
   * @memberof CharacterWidget
   */
  public async add(body){
    const obj = body.character;
    const char = await this.storage.createCharacter(obj);
    const result = {character: char};
    return result;
  }
  public async update(id, body){
    const obj = body.character;
    const char = await this.storage.updateCharacter(id, obj);
    const result = {character: char};
    return result;
  }

}

/**
 * キャラクターオブジェクトに正規化する
 * @param obj 
 */
function formatCharacter(obj){
  const {id, name, twitterId, twitterName, uid} = obj;
  return new Character(id, name, twitterId, twitterName, uid)
}
