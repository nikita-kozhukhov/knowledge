import { UserTable } from './components/UserTable/UserTable';

export default function UserManager() {
  return (
    <section>
      <h1 style={{ marginBottom: '50px' }}>Управление списком пользователей</h1>
      <UserTable />
    </section>
  );
}
