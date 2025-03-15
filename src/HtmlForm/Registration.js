export function Registration() {
  function submitForm(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData.entries());
    console.log(payload);
  }
  return (
    <>
      <form onSubmit={submitForm}>
        <input type={"email"} name="email" />
        <input type={"password"} name="password" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
