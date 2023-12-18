import Input from "./Input";
import Button from "./Button";

const FormStart = () => {

  const onSubmit = () => { }

  return (
    <form onSubmit={onSubmit}>
      <Input name="Логин" type="text" />
      <Input name="Пароль" type="password" />
      <Button text="Войти" />
    </form>
  )
}

export default FormStart;