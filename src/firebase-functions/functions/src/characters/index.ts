import Character from './models/Character';

export function formatCharacter(obj){
  const {id, name, twitterId, twitterName, uid} = obj;
  return new Character(id, name, twitterId, twitterName, uid)
}