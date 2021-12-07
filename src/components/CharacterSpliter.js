import Character from "./Character";

export default function CharacterSpliter({ projectTitle }) {
  return [...projectTitle].map((char, index) => (
    <Character key={index} char={char} />
  ));
}
