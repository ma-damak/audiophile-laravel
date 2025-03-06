import ApplicationLogo from "@/Components/App/ApplicationLogo";
import Checkbox from "@/Components/Core/Checkbox";
import InputError from "@/Components/Core/InputError";
import InputLabel from "@/Components/Core/InputLabel";
import PrimaryButton from "@/Components/Core/PrimaryButton";
import TextInput from "@/Components/Core/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false,
  });

  const submit = (e) => {
    e.preventDefault();

    post(route("login"), {
      onFinish: () => reset("password"),
    });
  };

  return (
    <AuthenticatedLayout>
      <Head title="Log in" />

      {status && (
        <div className="mb-4 text-sm font-medium text-green-600">{status}</div>
      )}
      <div className="flex flex-col items-center min-h-screen pt-6 bg-gray-100 sm:justify-center sm:pt-0 dark:bg-gray-900">
        <div>
          <Link href="/">
            <ApplicationLogo className="w-20 h-20 text-gray-500 fill-current" />
          </Link>
        </div>

        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg dark:bg-gray-800">
          <form onSubmit={submit}>
            <div>
              <InputLabel htmlFor="email" value="Email" />

              <TextInput
                id="email"
                type="email"
                name="email"
                value={data.email}
                className="block w-full mt-1"
                autoComplete="username"
                isFocused={true}
                onChange={(e) => setData("email", e.target.value)}
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
                autoComplete="current-password"
                onChange={(e) => setData("password", e.target.value)}
              />

              <InputError message={errors.password} className="mt-2" />
            </div>

            <div className="block mt-4">
              <label className="flex items-center">
                <Checkbox
                  name="remember"
                  checked={data.remember}
                  onChange={(e) => setData("remember", e.target.checked)}
                />
                <span className="text-sm text-gray-600 ms-2 dark:text-gray-400">
                  Remember me
                </span>
              </label>
            </div>

            <div className="flex items-center justify-end mt-4">
              {canResetPassword && (
                <Link
                  href={route("password.request")}
                  className="text-sm text-gray-600 underline rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
                >
                  Forgot your password?
                </Link>
              )}

              <PrimaryButton className="ms-4" disabled={processing}>
                Log in
              </PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
