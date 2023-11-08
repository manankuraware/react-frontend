import { useId } from "react";

export default function EmailForm() {
  const id = useId();
  return (
    <>
      <label htmlFor={`${id}--email`}>Email</label>
      <input type="email" id={`${id}--email`} />
      <br />
      <label htmlFor={`${id}--name`}>Name</label>
      <input type="name" id={`${id}--name`} />
    </>
  );
}
