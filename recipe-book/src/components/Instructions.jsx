export default function Instruction({ item }) {
  const instructions =
    typeof item.instructions === "string"
      ? item.instructions.split("\n").filter((instr) => instr.trim() !== "")
      : item.instructions;
  console.log(item, instructions);

  return (
    <ol>
      {instructions.map((x, index) => {
        return <li key={index}>{x}</li>;
      })}
    </ol>
  );
}
