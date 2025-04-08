

export default function LoginPage() {
  return (
    <>
      <section className="py-20 bg-black text-center">
        <h2 className="text-3xl font-bold text-white">Login</h2>
        <form className="mt-6 max-w-lg mx-auto flex flex-col gap-4">
          <input type="email" placeholder="Email" className="p-3 rounded placeholder-gray-700 text-gray-700 bg-white border border-gray-300" />
          <input type="password" placeholder="Password" className="p-3 rounded placeholder-gray-700 text-gray-700 bg-white border border-gray-300" />
          <button type="submit" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white text-sm">Login</button>
          <a href="/signup" className="text-blue-500"> Sign up here</a>
          <a href="/resetpass" className="text-blue-500"> Forgot your Password?</a>
        </form>
      </section>
    </>
  );
}

