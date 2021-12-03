export default function CharacterSpliter({ projectTitle }) {
  return [...projectTitle].map((char, index) => (
    <span key={index}>{char}</span>
  ));
}
