import { useForm } from 'react-hook-form';

function ReactHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function onSubmitForm(formData) {
    console.log(formData);
    reset();
  }

  return (
    <div>
      <h1>ReactHookForm</h1>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div>
          <label>Email</label>
          <input
            {...register('email', { required: true })}
            type="email"
            name="email"
          />
          {errors?.email && errors?.email?.type === 'required' ? (
            <p style={{ color: 'red' }}>Email is required.</p>
          ) : null}
        </div>
        <div>
          <label>Password</label>
          <input
            {...register('password', {
              required: true,
              minLength: 8,
            })}
            type="password"
            name="password"
          />
          {errors?.password && errors?.password?.type === 'required' ? (
            <p style={{ color: 'red' }}>Password is required</p>
          ) : null}
          {errors?.password && errors?.password?.type === 'minLength' ? (
            <p style={{ color: 'red' }}>
              Password should have min 8 characters.
            </p>
          ) : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ReactHookForm;
