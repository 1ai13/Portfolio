export default function HeaderLink({ text, url = "#" }) {
  return (
    <>
      <a
        className="hover:bg-bg-secondary p-3 md:p-4 active:bg-bg-secondary active:underline"
        href={url}
      >
        {text}
      </a>
    </>
  );
}
