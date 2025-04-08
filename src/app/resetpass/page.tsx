

export default function ResetPage() {
  return (
    <>
      <section className="py-20 bg-black text-center">
        <h2 className="text-3xl font-bold text-white">Reset your password</h2>
        <p>Enter the email address associated with your account and we'll send you a link to reset your password.</p>
        <form className="mt-6 max-w-lg mx-auto flex flex-col gap-4">
          <input type="email" placeholder="Your Email" className="p-3 rounded placeholder-gray-700 text-gray-700 bg-white border border-gray-300" />
          <button type="submit" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white text-sm">Continue</button>
          <a href="/login" className="text-blue-500">Return to Login</a>
        </form>
      </section>
    </>
  );
}
