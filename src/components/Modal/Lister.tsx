interface iProps {
  data: string[];
  children: string;
}

export default function Lister({ data, children }: iProps) {
  const list = data.toString();

  return (
    <div className={children}>
      <p>
        <em>{children !== "tags" ? children : "this programme is"}:</em>
        {list}
      </p>
    </div>
  );
}
