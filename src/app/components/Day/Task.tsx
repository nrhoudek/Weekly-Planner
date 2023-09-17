type taskProps = {
	content: String;
}

export default function Task({content} : taskProps) {
  return (
    <li>{content}</li>
  )
}