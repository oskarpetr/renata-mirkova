interface Props {
  items: string;
}

export default function NoItemsYet({ items }: Props) {
  return (
    <div className="col-span-full text-center text-black/50">
      No {items} found.
    </div>
  );
}
