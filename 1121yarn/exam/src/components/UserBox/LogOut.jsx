export default function LogOut({ user, setUser }) {
  return (
    <div>
      {!user || `${user} 님 어서오세요.`}
      {/* ||는 앞에게 아니면 뒤에걸 띄운다. */}
      <button
        onClick={() => {
          setUser("");
        }}
      >
        Log Out
      </button>
    </div>
  );
}
