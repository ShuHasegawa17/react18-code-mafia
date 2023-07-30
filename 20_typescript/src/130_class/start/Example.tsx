class User {
  public name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class AdminUser extends User {}

const Example = () => {
  const user1 = new User('Hanako', 20);

  return (
    <div>
      <p>{user1.name}</p>
    </div>
  );
};

export default Example;
