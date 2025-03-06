import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard() {
  return (
    <AuthenticatedLayout
      header={
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Dashboard
        </h1>
      }
    >
      <Head title="Dashboard" />

      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              You're logged in!
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
