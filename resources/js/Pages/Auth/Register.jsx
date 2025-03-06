import ApplicationLogo from "@/Components/App/ApplicationLogo";
import InputError from "@/Components/Core/InputError";
import InputLabel from "@/Components/Core/InputLabel";
import PrimaryButton from "@/Components/Core/PrimaryButton";
import TextInput from "@/Components/Core/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const submit = (e) => {
    e.preventDefault();

    post(route("register"), {
      onFinish: () => reset("password", "password_confirmation"),
    });
  };

  return (
    <AuthenticatedLayout>
      <Head title="Register" />
      <div className="flex flex-col items-center min-h-screen pt-6 bg-gray-100 sm:justify-center sm:pt-0 dark:bg-gray-900">
        <div>
          <Link href="/">
            <ApplicationLogo className="w-20 h-20 text-gray-500 fill-current" />
          </Link>
        </div>

        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg dark:bg-gray-800">
          <form onSubmit={submit}>
            <div>
              <InputLabel htmlFor="name" value="Name" />

              <TextInput
                id="name"
                name="name"
                value={data.name}
                className="block w-full mt-1"
                autoComplete="name"
                isFocused={true}
                onChange={(e) => setData("name", e.target.value)}
                required
              />

              <InputError message={errors.name} className="mt-2" />
            </div>

            <div className="mt-4">
              <InputLabel htmlFor="email" value="Email" />

              <TextInput
                id="email"
                type="email"
                name="email"
                value={data.email}
                className="block w-full mt-1"
                autoComplete="username"
                onChange={(e) => setData("email", e.target.value)}
                required
              />

              <InputError message={errors.email} className="mt-2" />
            </div>

            <div className="mt-4">
              <InputLabel htmlFor="password" value="Password" />

              <TextInput
                id="password"
                type="password"
                name="password"
                value={data.password}
                className="block w-full mt-1"
                autoComplete="new-password"
                onChange={(e) => setData("password", e.target.value)}
                required
              />

              <InputError message={errors.password} className="mt-2" />
            </div>

            <div className="mt-4">
              <InputLabel
                htmlFor="password_confirmation"
                value="Confirm Password"
              />

              <TextInput
                id="password_confirmation"
                type="password"
                name="password_confirmation"
                value={data.password_confirmation}
                className="block w-full mt-1"
                autoComplete="new-password"
                onChange={(e) =>
                  setData("password_confirmation", e.target.value)
                }
                required
              />

              <InputError
                message={errors.password_confirmation}
                className="mt-2"
              />
            </div>

            <div className="flex items-center justify-end mt-4">
              <Link
                href={route("login")}
                className="text-sm text-gray-600 underline rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
              >
                Already registered?
              </Link>

              <PrimaryButton className="ms-4" disabled={processing}>
                Register
              </PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
